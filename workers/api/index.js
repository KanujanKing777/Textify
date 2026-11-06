const GEMINI_MODEL = 'gemini-3.5-flash-lite';
const POLLINATIONS_IMAGE_URL = 'https://gen.pollinations.ai/image/';
const PEXELS_VIDEO_URL = 'https://api.pexels.com/videos/search';
const FIREBASE_JWKS_URL = 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';

let cachedJwks;
let jwksExpiry = 0;

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
    const handler = handlers[path];

    if (request.method !== 'POST' || !handler) {
      return jsonResponse({ error: 'Not found.' }, 404, corsHeaders);
    }

    try {
      await verifyFirebaseToken(request, env);
      let body;
      try {
        body = await request.json();
      } catch {
        throw httpError('Request body must be valid JSON.', 400);
      }
      if (!body || typeof body !== 'object' || Array.isArray(body)) {
        throw httpError('Request body must be a JSON object.', 400);
      }
      const result = await handler(body, env);
      return result instanceof Response
        ? addCorsHeaders(result, corsHeaders)
        : jsonResponse(result, 200, corsHeaders);
    } catch (error) {
      const status = error.status || 500;
      console.error('API request failed', {
        path,
        status,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
      return jsonResponse(
        { error: status < 500 ? error.message : 'The requested processing failed.' },
        status,
        corsHeaders,
      );
    }
  },
};

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

async function generateBlog(body, env) {
  const { topic, length, style, theme } = body;
  const outputFormat = body.outputFormat || 'Blog';
  requireText(topic, 'topic');
  if (outputFormat === 'Story' || outputFormat === 'Comic') {
    requireText(theme, 'theme');
  }
  if (outputFormat === 'Comic') {
    const imageCount = body.imageCount;
    if (!Number.isInteger(imageCount) || imageCount < 1 || imageCount > 32) {
      throw httpError('Comic image count must be a whole number between 1 and 32.', 400);
    }
    const comicPrompt = `Create a comic about "${topic}" with exactly ${imageCount} illustrations/panels under the theme "${theme.trim()}". Write all dialogue and narration in English, regardless of the language of the topic or theme. Every "text" value in the lettering must be English. Each panel will be generated as its own separate image, so each panel description must depict only one scene in one frame. Never combine multiple panels or scenes into one image. Plan the complete comic first, then return one JSON object with these fields:
- "sharedArtDirection": one detailed visual style and world guide to apply identically to every image, including a fixed color palette, linework/rendering style, lighting, environment/background design, and composition rules. Keep the same world and visual treatment throughout; scene content may change, but never the established style or palette.
- "sharedCharacterGuide": canonical appearance descriptions for every recurring character. Specify stable facial features, hair, clothing, body proportions, and distinguishing details. Reuse these exact descriptions in every image where each character appears; do not redesign, recolor, or change costumes between panels.
- "sharedLetteringStyle": one detailed lettering guide that must be identical in every panel: choose and specify a consistent font style, weight, text color, text size relative to each bubble, bubble fill and outline, narration-box styling, padding, and placement rules. Do not vary typography, text color, bubble styling, or scale between panels.
- "panels": an array of exactly ${imageCount} objects in sequential order. Each panel must have:
  - "prompt": only one scene's action, expressions, staging, and camera framing for one standalone image containing exactly one frame. Include the relevant canonical character descriptions from "sharedCharacterGuide". Do not describe or request multiple frames, panels, scenes, a grid, collage, storyboard, or page layout. Do not invent a different art style, palette, background treatment, or lettering style here.
  - "lettering": an array of objects, one for each piece of visible text. Include at least one item per panel; it can be character dialogue, narration, or both. Each item must have "speaker" (a character's name for dialogue or "Narration"), "placement" (where the speech bubble or narration box appears), and "text" (the exact words to print inside it). Render character dialogue inside a visible speech bubble with the text printed legibly inside; render narration inside a visible narration box.

Use the shared guides unchanged for all panels. Make backgrounds feel like the same locations and world, maintaining continuity of environment, palette, lighting, and rendering. Write all dialogue and narration in English. Text accuracy is essential: the English "text" value is authoritative, so preserve its spelling, capitalization, punctuation, and wording exactly. Do not translate, paraphrase, add words, or include speaker/placement labels as printed text. Every panel must include at least one lettering item: either character dialogue, narration, or both. Ensure every lettering item is visibly rendered: character dialogue in a speech bubble and narration in a narration box. The full sequence must tell a coherent story with a beginning, development, and ending.

MANDATORY OUTPUT FORMAT:
Return one JSON object with all of these top-level fields:
- "sharedArtDirection": a non-empty string.
- "sharedCharacterGuide": a non-empty string.
- "sharedLetteringStyle": a non-empty string.
- "panels": an array containing exactly ${imageCount} panel objects.

Every object in "panels" must contain:
- "prompt": a non-empty string describing that panel's scene.
- "lettering": a non-empty array of lettering objects.

Every object in a panel's "lettering" array must contain:
- "speaker": a non-empty string (a character's name for dialogue or "Narration").
- "placement": a non-empty string describing where the bubble or narration box appears.
- "text": a non-empty string containing the exact English text to print.
Every panel's "lettering" array must contain at least one item, which may be character dialogue, narration, or both.

Before responding, check that the JSON parses; all three shared-guide fields are present, strings, and non-empty; "panels" is an array of exactly ${imageCount} objects; every panel has a non-empty string "prompt" and a non-empty "lettering" array with at least one dialogue or narration item; and every lettering object has non-empty string "speaker", "placement", and "text" fields. These are required fields: do not omit any of them. Output only the JSON object—no Markdown, code fences, comments, or surrounding text.`;
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
        const result = raw.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        candidate = JSON.parse(result);
        console.log(candidate);
      } catch (error) {
        if (!(error instanceof SyntaxError)) throw error;
        validationError = new Error('Text provider returned invalid comic descriptions.');
        continue;
      }

      if (!candidate
        || typeof candidate.sharedArtDirection !== 'string'
        || !candidate.sharedArtDirection.trim()
        || typeof candidate.sharedCharacterGuide !== 'string'
        || !candidate.sharedCharacterGuide.trim()
        || typeof candidate.sharedLetteringStyle !== 'string'
        || !candidate.sharedLetteringStyle.trim()
        || !Array.isArray(candidate.panels)
        || candidate.panels.length !== imageCount
        || candidate.panels.some((panel) => (
          !panel
          || typeof panel.prompt !== 'string'
          || !panel.prompt.trim()
          || !Array.isArray(panel.lettering)
          || panel.lettering.length === 0
          || panel.lettering.some((item) => (
            !item
            || typeof item.speaker !== 'string'
            || !item.speaker.trim()
            || typeof item.placement !== 'string'
            || !item.placement.trim()
            || typeof item.text !== 'string'
            || !item.text.trim()
          ))
        ))) {
        validationError = new Error(`Comic descriptions must include shared art, character, and lettering guides with exactly ${imageCount} valid panels.`);
        continue;
      }
      comic = candidate;
      break;
    }
    if (!comic) throw validationError;
    return {
      content: '',
      images: comic.panels.map(({ prompt, lettering }) => ({
        prompt: `A single illustration, one panel only, full frame, IMAGE REQUIREMENT: Generate exactly one standalone image for this request, showing one scene in one frame only. This is one comic panel, single illustration, full frame, not a full comic page or a collection of panels/illustrations.(no borders, no outlines to the image generated). Do not create multiple frames, panels, scenes, a grid, collage, storyboard, strip, contact sheet, inset panels, or alternate versions. Keep the entire image as one continuous composition.\n\nREQUIRED VISIBLE LETTERING: All visible lettering must be in English. Render every dialogue item below as a clearly visible speech bubble in the image, with its exact English text legible inside the bubble. Do not omit, hide, translate, or replace dialogue text with symbols. Render any Narration item as a visible narration box containing its exact English text. Do not render speaker names or placement instructions as printed text.\n\nSHARED COMIC ART DIRECTION — apply exactly to this image and keep identical across every page:\n${comic.sharedArtDirection.trim()}\n\nSHARED CHARACTER CONTINUITY — reproduce recurring characters exactly as described; do not alter their appearance between pages:\n${comic.sharedCharacterGuide.trim()}\n\nSHARED LETTERING STYLE — use this same typography and bubble treatment on every page, without variation:\n${comic.sharedLetteringStyle.trim()}\n\nONE SCENE FOR THIS FRAME:\n${prompt.trim()}\n\nEXACT COMIC LETTERING — render all quoted text below exactly in English. Preserve every word, spelling, capitalization, and punctuation mark. Do not translate, add, omit, substitute, or repeat text. Make it legible and apply the shared lettering style.\n${lettering.map(({ speaker, placement, text }) => `- ${speaker} (${placement}): "${text}"`).join('\n')}`,
      })),
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
  const apiKey = env.POLLINATIONS_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('Image generation is not configured.');
  }

  const params = new URLSearchParams({
    model: body.model || 'zimage',
    width: '1024',
    height: '1024',
    seed: '0',
    enhance: 'false',
    negative_prompt: 'worst quality, blurry',
    private: 'true',
    nologo: 'false',
    nofeed: 'false',
    safe: 'false',
    quality: 'medium',
    image: '',
    transparent: 'false',
    guidance_scale: '1',
  });
  const upstream = await fetch(
    `${POLLINATIONS_IMAGE_URL}${encodeURIComponent(body.prompt.trim())}?${params}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
    },
  );
  if (!upstream.ok) {
    throw await providerError(upstream, 'Image', apiKey);
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': upstream.headers.get('Content-Type') || 'image/png',
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
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        ...(generationConfig ? { generationConfig } : {}),
      }),
    },
  );
  if (!response.ok) {
    throw await providerError(response, 'Text', apiKey);
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

async function providerError(response, provider, apiKey) {
  let detail = '';
  try {
    const body = await response.json();
    const error = body?.error;
    detail = typeof error === 'string' ? error : error?.message || body?.message || '';
  } catch {
    // Some upstream errors do not include a JSON response body.
  }
  if (detail) {
    detail = detail.split(apiKey).join('[redacted]');
  }
  return new Error(
    `${provider} provider request failed with status ${response.status}${detail ? `: ${detail}` : '.'}`,
  );
}

async function verifyFirebaseToken(request, env) {
  const projectId = env.FIREBASE_PROJECT_ID;
  if (!projectId) {
    throw new Error('Authentication is not configured.');
  }
  const authorization = request.headers.get('Authorization') || '';
  const match = authorization.match(/^Bearer (.+)$/);
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
  if (!jwk) {
    cachedJwks = undefined;
    const refreshedJwks = await getFirebaseJwks(true);
    const refreshedKey = refreshedJwks.keys.find((key) => key.kid === header.kid);
    if (!refreshedKey || !(await verifySignature(refreshedKey, signature, `${encodedHeader}.${encodedPayload}`))) {
      throw httpError('Invalid authentication token.', 401);
    }
    return;
  }
  if (!(await verifySignature(jwk, signature, `${encodedHeader}.${encodedPayload}`))) {
    throw httpError('Invalid authentication token.', 401);
  }
}

async function getFirebaseJwks(forceRefresh = false) {
  if (!forceRefresh && cachedJwks && Date.now() < jwksExpiry) {
    return cachedJwks;
  }
  const response = await fetch(FIREBASE_JWKS_URL);
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
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

function addCorsHeaders(response, corsHeaders) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(corsHeaders)) {
    headers.set(name, value);
  }
  return new Response(response.body, { status: response.status, headers });
}
