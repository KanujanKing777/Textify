import { GUEST_FORMATS, guestSessionRequest } from './guest.js';
export { GuestSession } from './guest.js';

const GEMINI_MODEL = 'gemini-3.5-flash-lite';
const POLLINATIONS_IMAGE_URL = 'https://gen.pollinations.ai/image/';
const PEXELS_VIDEO_URL = 'https://api.pexels.com/videos/search';
const FIREBASE_JWKS_URL = 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';

let cachedJwks;
let jwksExpiry = 0;
const MAX_BODY_BYTES = 32 * 1024;
const IMAGE_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/avif']);
const IMAGE_MODELS = new Set([
  'zimage', 'flux', 'turbo', 'gptimage', 'kontext', 'seedream',
  'seedream-pro', 'nanobanana', 'nanobanana-pro',
]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const allowedOrigins = (env.ALLOWED_ORIGINS || '')
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);

    if (origin && !allowedOrigins.includes(origin)) {
      return jsonResponse({ error: 'Origin is not allowed.' }, 403);
    }

    const corsHeaders = origin
      ? {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization, Content-Type',
          'Access-Control-Max-Age': '86400',
          Vary: 'Origin',
        }
      : {};

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const path = new URL(request.url).pathname;
    const handlers = {
      '/api/text/format': formatText,
      '/api/text/generate': generateText,
      '/api/blog/generate': generateBlog,
      '/api/image/generate': generateImage,
      '/api/video/search': searchVideos,
    };
    const handler = Object.hasOwn(handlers, path) ? handlers[path] : undefined;

    if (request.method !== 'POST' || (!handler && path !== '/api/guest/session')) {
      return jsonResponse({ error: 'Not found.' }, 404, corsHeaders);
    }

    try {
      await enforceLimit(env.IP_RATE_LIMITER, request.headers.get('CF-Connecting-IP') || 'unknown');
      const guest = /^Guest ([a-f0-9]{64})$/.exec(request.headers.get('Authorization') || '');
      if (path === '/api/guest/session') {
        const id = guest ? getGuestSessionId(env, guest[1]) : env.GUEST_SESSIONS.newUniqueId();
        const usage = await guestSessionRequest(env.GUEST_SESSIONS.get(id), guest ? 'status' : 'create');
        return jsonResponse({ token: id.toString(), ...usage }, guest ? 200 : 201, corsHeaders);
      }
      if (guest && !['/api/blog/generate', '/api/image/generate'].includes(path)) {
        throw httpError('Sign in to use this feature.', 403);
      }
      const uid = guest ? guest[1] : await verifyFirebaseToken(request, env);
      await enforceLimit(env.USER_RATE_LIMITER, guest ? `guest:${uid}` : uid);
      const body = await readJsonBody(request);
      if (!body || typeof body !== 'object' || Array.isArray(body)) {
        throw httpError('Request body must be a JSON object.', 400);
      }
      const result = guest
        ? await processGuestRequest(path, body, env, uid)
        : await handler(body, env);
      return result instanceof Response
        ? addCorsHeaders(result, corsHeaders)
        : jsonResponse(result, 200, corsHeaders);
    } catch (error) {
      const status = error.status || 500;
      if (status >= 500) console.error('API request failed', { path, status, error: error.name });
      return jsonResponse(
        { error: status < 500 ? error.message : 'The requested processing failed.', code: error.code === 'GUEST_LIMIT' ? error.code : undefined },
        status,
        corsHeaders,
      );
    }
  },
};

function getGuestSessionId(env, token) {
  try {
    return env.GUEST_SESSIONS.idFromString(token);
  } catch {
    throw httpError('Guest session is invalid.', 401);
  }
}

async function processGuestRequest(path, body, env, token) {
  const session = env.GUEST_SESSIONS.get(getGuestSessionId(env, token));
  if (path === '/api/image/generate') {
    const { guestGenerationId: generationId, guestImageIndex: index } = body;
    if (typeof generationId !== 'string' || !/^[a-f0-9-]{36}$/.test(generationId)
      || !Number.isSafeInteger(index) || index < 0) {
      throw httpError('A guest illustration must belong to a generation.', 403);
    }
    const { prompt, attempt } = await guestSessionRequest(session, 'image', { generationId, index });
    let response;
    try {
      response = await generateImage({ prompt, model: body.model }, env);
      return response;
    } finally {
      await guestSessionRequest(session, 'image-finish', {
        generationId, index, attempt, success: Boolean(response),
      });
    }
  }

  const format = body.outputFormat ?? 'Blog';
  validateBlogRequest(body, format);
  const generationId = crypto.randomUUID();
  await guestSessionRequest(session, 'reserve', { format, generationId });
  try {
    const result = await generateBlog(body, env);
    const prompts = result.images.map((image) => image.prompt);
    const { remaining } = await guestSessionRequest(session, 'complete', { generationId, prompts });
    return { ...result, guestGenerationId: generationId, guestRemaining: remaining };
  } catch (error) {
    await guestSessionRequest(session, 'refund', { generationId });
    throw error;
  }
}

async function enforceLimit(limiter, key) {
  if (!(await limiter.limit({ key })).success) {
    throw httpError('Too many requests. Try again shortly.', 429);
  }
}

async function readJsonBody(request) {
  const mediaType = request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase();
  if (mediaType !== 'application/json') {
    throw httpError('Content-Type must be application/json.', 415);
  }
  if (Number(request.headers.get('Content-Length')) > MAX_BODY_BYTES) {
    throw httpError('Request body is too large.', 413);
  }
  if (!request.body) throw httpError('Request body is required.', 400);

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let json = '';
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw httpError('Request body is too large.', 413);
      }
      json += decoder.decode(value, { stream: true });
    }
    return JSON.parse(json + decoder.decode());
  } catch (error) {
    if (error.status) throw error;
    throw httpError('Request body must be valid JSON.', 400);
  } finally {
    reader.releaseLock();
  }
}

async function formatText(body, env) {
  const { text, platform, tone, withe, length } = body;
  requireText(text, 'text');
  const prompt = `Format this text for ${platform} in a ${tone} tone ${withe} emojis in a ${length} length and you may include new lines if needed:\n\n${text}\nI want only the rough text as output not anything else`;
  return { text: await generateGemini(prompt, env) };
}

async function generateText(body, env) {
  requireText(body.text, 'text');
  return { text: await generateGemini(`${body.text}\nI want only the generated text as output not anything else`, env) };
}

function validateBlogRequest(body, outputFormat) {
  if (!GUEST_FORMATS.includes(outputFormat)) throw httpError('Unsupported output format.', 400);
  const { topic, theme, imageCount } = body;
  requireText(topic, 'topic');
  if (outputFormat === 'Story' || outputFormat === 'Comic') {
    requireText(theme, 'theme');
  }
  if (outputFormat === 'Comic' && (!Number.isInteger(imageCount) || imageCount < 1 || imageCount > 32)) {
    throw httpError('Comic image count must be a whole number between 1 and 32.', 400);
  }
}

async function generateBlog(body, env) {
  const { topic, length, style, theme, imageCount } = body;
  const outputFormat = body.outputFormat ?? 'Blog';
  validateBlogRequest(body, outputFormat);
  if (outputFormat === 'Comic') {
    const MAX_LETTERING_ITEMS = 1;   // fewer text items = far fewer garbled words
    const MAX_WORDS_PER_ITEM = 8;

    const comicPrompt = `Create a story about "${topic}" under the theme "${theme.trim()}", told through exactly ${imageCount} separate illustrations. Write all dialogue and narration in English, regardless of the language of the topic or theme.

Plan the whole story first, with a clear beginning, middle, and ending. EVERY illustration must show a DIFFERENT moment: a new action, a new location or camera setup, and visible story progress compared with the one before. Never repeat the same scene from another angle. Each illustration is generated as its own standalone image showing one scene.

Return one JSON object with these fields:
- "sharedArtDirection": a concise (under 80 words) description of the look: color palette, linework/rendering style, lighting, overall world. Describe the look only. Do not mention layouts, pages, borders, text, or speech bubbles.
- "sharedCharacterGuide": a concise (under 100 words) description of each recurring character: face, hair, clothing, body proportions, distinguishing details. Describe appearance only.
- "panels": an array of exactly ${imageCount} objects in story order. Each has:
  - "beat": one short sentence saying what NEW thing happens here.
  - "setting": the specific place and time of day.
  - "prompt": ONE moment described visually: the characters' actions, expressions, positions, and camera framing, including their appearance from the character guide. Do not mention text, speech, bubbles, captions, or layout.
  - "lettering": an array of 1 to ${MAX_LETTERING_ITEMS} objects, each with:
      "speaker": the character's name, or "Narration".
      "speakerRef": a short visual reference to who is talking, such as "the boy in the orange shirt" or "the small robot" (use "" for Narration).
      "placement": where it sits, such as "top left" or "bottom".
      "text": the words to print.

LETTERING RULES (image generators cannot render long text):
- Each "text" must be ${MAX_WORDS_PER_ITEM} words or fewer, in simple common English words.
- No unusual names, rare words, numbers, or special symbols in "text".
- Never include the speaker's name or placement inside "text".

Return only one valid JSON object with exactly the top-level fields "sharedArtDirection", "sharedCharacterGuide", "panels". All fields are required and non-empty. Output only the JSON, with no Markdown, no code fences, no comments.`;

    // Words that make image models draw layouts or print meta text.
    const BANNED = /\b(panels?|frames?|grid|collage|storyboard|strip|split[- ]screen|diptych|triptych|montage|comic page|pages?|bubbles?|captions?|lettering|fonts?|shared|labels?)\b/i;
    const wordCount = (s) => s.trim().split(/\s+/).length;
    const isStr = (v) => typeof v === 'string' && v.trim().length > 0;

    let comic;
    let validationError;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const raw = await generateGemini(
        comicPrompt,
        env,
        { responseMimeType: 'application/json' },
      );
      let candidate;
      try {
        const result = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
        candidate = JSON.parse(result);
      } catch (error) {
        if (!(error instanceof SyntaxError)) throw error;
        validationError = new Error('Text provider returned invalid comic descriptions.');
        continue;
      }

      const valid = candidate
        && isStr(candidate.sharedArtDirection)
        && isStr(candidate.sharedCharacterGuide)
        && !BANNED.test(candidate.sharedArtDirection)
        && !BANNED.test(candidate.sharedCharacterGuide)
        && Array.isArray(candidate.panels)
        && candidate.panels.length === imageCount
        && candidate.panels.every((panel) => (
          panel
          && isStr(panel.prompt)
          && isStr(panel.beat)
          && isStr(panel.setting)
          && !BANNED.test(panel.prompt)
          && !BANNED.test(panel.setting)
          && Array.isArray(panel.lettering)
          && panel.lettering.length >= 1
          && panel.lettering.length <= MAX_LETTERING_ITEMS
          && panel.lettering.every((item) => (
            item
            && isStr(item.speaker)
            && isStr(item.placement)
            && isStr(item.text)
            && wordCount(item.text) <= MAX_WORDS_PER_ITEM
            // the speaker's name must never be inside the printed text
            && !item.text.toLowerCase().includes(item.speaker.trim().toLowerCase())
          ))
        ));

      if (!valid) {
        validationError = new Error(`Comic descriptions must include guides and exactly ${imageCount} valid scenes with short English text.`);
        continue;
      }
      comic = candidate;
      break;
    }
    if (!comic) throw validationError;

    const art = comic.sharedArtDirection.trim();
    const characters = comic.sharedCharacterGuide.trim();

    return {
      content: '',
      images: comic.panels.map(({ prompt, setting, beat, lettering }, index) => {
        const previousBeat = index > 0 ? comic.panels[index - 1].beat.trim().replace(/[.!?]+$/, '') : null;

        // Plain sentences only: no names of speakers, no numbering, no headings.
        const textSentences = lettering.map(({ speaker, speakerRef, placement, text }) => {
          const clean = text.trim().replace(/"/g, '');
          if (speaker.trim().toLowerCase() === 'narration') {
            return `A plain white rectangular box at the ${placement.trim()} of the image contains the words "${clean}".`;
          }
          const who = isStr(speakerRef) ? speakerRef.trim() : 'the character who is talking';
          return `A white speech bubble at the ${placement.trim()} of the image, with its tail pointing to ${who}, contains the words "${clean}".`;
        }).join(' ');

        return {
          prompt: [
            `One single wide illustration of one moment, drawn as one continuous picture that fills the whole image from edge to edge, with no borders and no dividing lines.`,
            `${prompt.trim().replace(/[.!?]+$/, '')}. ${beat.trim().replace(/[.!?]+$/, '')}. The location is ${setting.trim().replace(/[.!?]+$/, '')}.`,
            previousBeat
              ? `This moment looks clearly different from the one just before it, in which ${previousBeat.charAt(0).toLowerCase()}${previousBeat.slice(1)}, with a different action, pose, and camera view.`
              : '',
            `The characters look like this, and they look identical in every picture of the story: ${characters}`,
            `The artwork is drawn in this look, identical in every picture of the story: ${art}`,
            textSentences,
            `The only words visible anywhere in the image are the words just given, written in clear, large, correctly spelled English with bold black comic lettering. There are no other words, names, titles, captions, labels, numbers, or watermarks.`,
          ].filter(Boolean).join('\n\n'),
        };
      }),
    };
  }
  
  const content = await generateGemini(
    outputFormat === 'Story'
      ? `Write a ${length} story about "${topic}" under the theme "${theme.trim()}". Make the theme central to the story and write it like a story from a conventional storybook, using natural prose paragraphs. Where the story has major turning points, organize it into chapters with short, evocative subtitles, such as "Chapter 1: The Hidden Door". Do not use bullets, numbered lists, or list-style numbering; number only chapter headings. Do not add a separate conclusion section, summary, or moral; let the narrative reach a natural ending. I want only the story content, not anything else.`
      : `Write a ${length} blog post about "${topic}" in a ${style} style. Make it engaging and well-structured with an introduction, body paragraphs, and conclusion. I want only the blog content as output not anything else`,
    env,
  );
  const prompt = outputFormat === 'Story'
    ? `I am preparing a story under the theme "${theme.trim()}" using this content: ${content}

Format this as a conventional storybook: preserve natural prose paragraphs and divide the story into chapters at major turning points, using short, evocative subtitles in headings formatted as "Chapter 1: Subtitle", "Chapter 2: Subtitle", and so on. Use no bullets, numbered lists, or numbering other than chapter numbers. Do not add a separate conclusion heading, summary, moral, or closing commentary; preserve a natural narrative ending.

Cut the story into meaningful scenes and place image prompts between the prose at appropriate points, without interrupting chapter headings. Image prompts should be as detailed as possible. Keep every image coherent with the story theme, and use the same visual style, color palette, lighting, and setting throughout. Identify the visual details of each recurring character and repeat those details consistently in every image prompt where that character appears, so the character looks like the same person in each scene. For every image, also provide a concise, meaningful caption on exactly one line, no longer than 200 characters.

Please prepare a JSON type output like:
{
  "1": {"type": "heading", "content": "Chapter 1: Subtitle", "level": 2},
  "2": {"type": "image", "prompt": "detailed image description with consistent character and style details", "caption": "concise one-line caption under 200 characters"},
  "3": {"type": "paragraph", "content": "text"}
}

Please return only the raw JSON as the output`
    : `I am preparing for a blog article using this content: ${content}

Now cut this into meaningful chunks and also I need to add some images in between, so add prompts for images too. Image prompts should be as detailed as possible. For every image, also provide a concise, meaningful caption on exactly one line, no longer than 200 characters.

Also I need headings/bullets/heading2,3,4/paragraph etc...

Please prepare a JSON type output like:
{
  "1": {"type": "heading", "content": "text", "level": 1-4},
  "2": {"type": "image", "prompt": "detailed image description", "caption": "concise one-line caption under 200 characters"},
  "3": {"type": "paragraph", "content": "text"},
  "4": {"type": "bullet", "content": "text"},

}

Please return only the raw JSON as the output`;
  const raw = await generateGemini(prompt, env);

  try {
    const result = raw.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    const jsonResponse = JSON.parse(result || '{}');
    let formattedText = '';
    const images = [];

    for (const item of Object.values(jsonResponse)) {
      if (item.type === 'heading') {
        const level = Math.min(4, Math.max(1, Number(item.level) || 2));
        formattedText += `${'#'.repeat(level)} ${item.content}\n\n`;
      } else if (item.type === 'paragraph') {
        formattedText += `${item.content}\n\n`;
      } else if (item.type === 'image') {
        const imagePrompt = item.prompt || item.content || '';
        const caption = item.caption || imagePrompt;
        images.push({ prompt: imagePrompt, caption });
        formattedText += `[Image: ${images.length}]\n\n`;
      } else if (item.type === 'bullet' || item.type === 'list') {
        formattedText += `• ${item.content || item.text}\n`;
      }
    }

    return { content: formattedText.trim(), images };
  } catch {
    return { content: raw || 'Failed to generate blog content', images: [] };
  }
}

async function generateImage(body, env) {
  requireText(body.prompt, 'prompt');
  const prompt = body.prompt.trim();
  if (prompt === '.' || prompt === '..') throw httpError('Invalid image prompt.', 400);
  const model = body.model ?? 'zimage';
  if (!IMAGE_MODELS.has(model)) throw httpError('Unsupported image model.', 400);
  const apiKey = env.POLLINATIONS_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('Image generation is not configured.');
  }

  const params = new URLSearchParams({
    model,
    width: '1024',
    height: '1024',
    seed: '0',
    enhance: 'false',
    negative_prompt: 'worst quality, blurry',
    private: 'true',
    nologo: 'false',
    nofeed: 'false',
    safe: 'true',
    quality: 'medium',
    image: '',
    transparent: 'false',
    guidance_scale: '1',
  });
  const upstream = await fetch(
    `${POLLINATIONS_IMAGE_URL}${encodeURIComponent(prompt)}?${params}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      redirect: 'error',
      signal: AbortSignal.timeout(60_000),
    },
  );
  if (!upstream.ok) {
    throw new Error('Image provider request failed.');
  }

  const contentType = upstream.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase();
  if (!IMAGE_TYPES.has(contentType)) {
    await upstream.body?.cancel();
    throw new Error('Image provider returned an unsupported media type.');
  }
  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'private, no-store',
    },
  });
}

async function searchVideos(body, env) {
  requireText(body.query, 'query');
  if (!env.PEXELS_API_KEY) {
    throw new Error('Video search is not configured.');
  }

  const url = new URL(PEXELS_VIDEO_URL);
  url.searchParams.set('query', body.query.trim());
  url.searchParams.set('per_page', '1');
  url.searchParams.set('orientation', 'landscape');
  const response = await fetch(url, {
    headers: { Authorization: env.PEXELS_API_KEY },
    redirect: 'error',
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    throw new Error('Video provider request failed.');
  }

  return response.json();
}

async function generateGemini(prompt, env, generationConfig) {
  const apiKey = env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('Text generation is not configured.');
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      redirect: 'error',
      signal: AbortSignal.timeout(60_000),
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        ...(generationConfig ? { generationConfig } : {}),
      }),
    },
  );
  if (!response.ok) {
    throw new Error('Text provider request failed.');
  }

  const result = await response.json();
  const text = result.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || '')
    .join('');
  if (!text) {
    throw new Error('Text provider returned no content.');
  }
  return text;
}

async function verifyFirebaseToken(request, env) {
  const projectId = env.FIREBASE_PROJECT_ID;
  if (!projectId) {
    throw new Error('Authentication is not configured.');
  }
  const authorization = request.headers.get('Authorization') || '';
  const match = authorization.length <= 8192
    && authorization.match(/^Bearer ([A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)$/i);
  if (!match) {
    throw httpError('Authentication is required.', 401);
  }

  const tokenParts = match[1].split('.');
  if (tokenParts.length !== 3) {
    throw httpError('Invalid authentication token.', 401);
  }
  const [encodedHeader, encodedPayload, encodedSignature] = tokenParts;
  if (!encodedHeader || !encodedPayload || !encodedSignature) {
    throw httpError('Invalid authentication token.', 401);
  }

  let header;
  let payload;
  let signature;
  try {
    header = JSON.parse(decodeBase64Url(encodedHeader));
    payload = JSON.parse(decodeBase64Url(encodedPayload));
    signature = decodeBase64UrlBytes(encodedSignature);
  } catch {
    throw httpError('Invalid authentication token.', 401);
  }

  if (
    !header
    || typeof header !== 'object'
    || Array.isArray(header)
    || !payload
    || typeof payload !== 'object'
    || Array.isArray(payload)
  ) {
    throw httpError('Invalid authentication token.', 401);
  }

  const now = Math.floor(Date.now() / 1000);
  if (
    header.alg !== 'RS256'
    || typeof header.kid !== 'string'
    || !header.kid
    || payload.aud !== projectId
    || payload.iss !== `https://securetoken.google.com/${projectId}`
    || typeof payload.sub !== 'string'
    || payload.sub.length === 0
    || payload.sub.length > 128
    || typeof payload.exp !== 'number'
    || payload.exp <= now
    || typeof payload.iat !== 'number'
    || payload.iat > now
    || typeof payload.auth_time !== 'number'
    || payload.auth_time > now
  ) {
    throw httpError('Invalid or expired authentication token.', 401);
  }

  const jwks = await getFirebaseJwks();
  const jwk = jwks.keys.find((key) => key.kid === header.kid);
  if (!jwk || !(await verifySignature(jwk, signature, `${encodedHeader}.${encodedPayload}`))) {
    throw httpError('Invalid authentication token.', 401);
  }
  return payload.sub;
}

async function getFirebaseJwks() {
  if (cachedJwks && Date.now() < jwksExpiry) {
    return cachedJwks;
  }
  const response = await fetch(FIREBASE_JWKS_URL, {
    redirect: 'error',
    signal: AbortSignal.timeout(5_000),
  });
  if (!response.ok) {
    throw new Error('Unable to verify authentication token.');
  }
  cachedJwks = await response.json();
  const maxAge = response.headers.get('Cache-Control')?.match(/max-age=(\d+)/)?.[1];
  jwksExpiry = Date.now() + (Number(maxAge || 3600) * 1000);
  return cachedJwks;
}

async function verifySignature(jwk, signature, signedData) {
  const publicKey = await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['verify'],
  );
  return crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    publicKey,
    signature,
    new TextEncoder().encode(signedData),
  );
}

function decodeBase64Url(value) {
  return new TextDecoder().decode(decodeBase64UrlBytes(value));
}

function decodeBase64UrlBytes(value) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=');
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function requireText(value, field) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw httpError(`A non-empty ${field} is required.`, 400);
  }
}

function httpError(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...headers,
    },
  });
}

function addCorsHeaders(response, corsHeaders) {
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  for (const [name, value] of Object.entries(corsHeaders)) {
    headers.set(name, value);
  }
  return new Response(response.body, { status: response.status, headers });
}
