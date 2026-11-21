import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker, { GuestSession } from '../workers/api/index.js';

test('guest sessions enforce independent quotas and authorize only their own illustrations', async (t) => {
  const objects = new Map();
  const get = (id) => {
    if (!objects.has(id)) {
      const data = new Map();
      let pending = Promise.resolve();
      const storage = {
        get: async (key) => structuredClone(data.get(key)),
        put: async (key, value) => { data.set(key, structuredClone(value)); },
        delete: async (key) => data.delete(key),
        transaction(callback) {
          const next = pending.then(() => callback(storage));
          pending = next.catch(() => {});
          return next;
        },
      };
      objects.set(id, new GuestSession({ storage }));
    }
    return { fetch: (url, options) => objects.get(id).fetch(new Request(url, options)) };
  };
  let nextId = 0;
  const allow = { limit: async () => ({ success: true }) };
  const env = {
    GUEST_SESSIONS: {
      get, idFromString: (value) => value,
      newUniqueId: () => (++nextId).toString(16).padStart(64, '0'),
    },
    IP_RATE_LIMITER: allow,
    USER_RATE_LIMITER: allow,
    FIREBASE_PROJECT_ID: 'demo-textify',
    GEMINI_API_KEY: 'test',
    POLLINATIONS_API_KEY: 'test',
  };
  let imageCalls = 0;
  let failNextTextRequest = false;
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    if (new URL(url).hostname === 'gen.pollinations.ai') {
      imageCalls += 1;
      assert.equal(decodeURIComponent(new URL(url).pathname), '/image/A generated illustration');
      return new Response('image', { headers: { 'Content-Type': 'image/png' } });
    }
    assert.equal(new URL(url).hostname, 'generativelanguage.googleapis.com');
    if (failNextTextRequest) {
      failNextTextRequest = false;
      return new Response(null, { status: 503 });
    }
    const { generationConfig } = JSON.parse(options.body);
    const text = generationConfig ? JSON.stringify({
      sharedArtDirection: 'Soft blue watercolor.',
      sharedCharacterGuide: 'A small brown dog.',
      panels: [{
        prompt: 'A small dog crosses a bridge.', beat: 'The dog crosses the bridge.',
        setting: 'Forest at sunrise.',
        lettering: [{ speaker: 'Narration', placement: 'bottom', text: 'The trail led home.' }],
      }],
    }) : JSON.stringify({ 1: { type: 'image', prompt: 'A generated illustration' } });
    return Response.json({ candidates: [{ content: { parts: [{ text }] } }] });
  });
  const post = (path, token, body = {}) => worker.fetch(new Request(`https://worker.example${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Guest ${token}` }),
    },
    body: JSON.stringify(body),
  }), env);
  const create = async () => {
    const response = await post('/api/guest/session');
    assert.equal(response.status, 201);
    return (await response.json()).token;
  };
  const generate = (token, outputFormat) => post('/api/blog/generate', token, {
    topic: 'A forest walk', theme: 'Adventure', outputFormat, imageCount: 1,
  });
  const browser = await create();
  const anotherBrowser = await create();

  assert.equal((await generate(null, 'Blog')).status, 401);
  assert.equal((await generate('f'.repeat(64), 'Blog')).status, 401);
  assert.equal((await post('/api/text/generate', browser)).status, 403);
  assert.equal((await generate(browser, 'Invalid')).status, 400);
  failNextTextRequest = true;
  assert.equal((await generate(browser, 'Blog')).status, 500);
  const outcomes = await Promise.all(Array.from({ length: 3 }, () => generate(browser, 'Blog')));
  assert.deepEqual(outcomes.map(({ status }) => status).sort(), [200, 200, 403]);
  const results = await Promise.all(outcomes.map((response) => response.json()));
  assert.ok(results.some((result) => result.code === 'GUEST_LIMIT'));
  assert.ok(results.some((result) => result.guestRemaining === 0));
  const resumed = await post('/api/guest/session', browser);
  assert.equal(resumed.status, 200);
  assert.deepEqual((await resumed.json()).exhausted, { Blog: true, Story: false, Comic: false });

  const { guestGenerationId } = results.find((result) => result.guestGenerationId);
  const image = { guestGenerationId, guestImageIndex: 0, prompt: 'Ignored client prompt' };
  assert.equal((await post('/api/image/generate', anotherBrowser, image)).status, 403);
  assert.equal((await post('/api/image/generate', browser, { ...image, guestImageIndex: 1 })).status, 403);
  const concurrentImages = await Promise.all([
    post('/api/image/generate', browser, image),
    post('/api/image/generate', browser, image),
  ]);
  assert.deepEqual(concurrentImages.map(({ status }) => status).sort(), [200, 403]);
  assert.equal((await post('/api/image/generate', browser, image)).status, 403);
  assert.equal(imageCalls, 1);

  for (const format of ['Story', 'Comic']) {
    assert.equal((await generate(browser, format)).status, 200);
    assert.equal((await generate(browser, format)).status, 200);
    assert.equal((await generate(browser, format)).status, 403);
  }
  assert.equal((await generate(anotherBrowser, 'Blog')).status, 200);
});
