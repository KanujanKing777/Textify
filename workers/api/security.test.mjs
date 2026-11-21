import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import worker from './index.js';

const project = 'textify-test';
const origin = 'https://textify.example';
const now = Math.floor(Date.now() / 1000);
const keys = await crypto.subtle.generateKey({
  name: 'RSASSA-PKCS1-v1_5',
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
  hash: 'SHA-256',
}, true, ['sign', 'verify']);
const jwk = { ...await crypto.subtle.exportKey('jwk', keys.publicKey), kid: 'test-key' };
let jwksCalls = 0;
let providerCalls = 0;
const originalFetch = globalThis.fetch;
globalThis.fetch = async (url, options) => {
  const host = new URL(url).hostname;
  if (host === 'www.googleapis.com') {
    jwksCalls += 1;
    return Response.json({ keys: [jwk] }, { headers: { 'Cache-Control': 'max-age=900' } });
  }
  assert.equal(host, 'gen.pollinations.ai');
  assert.equal(new URL(url).searchParams.get('safe'), 'true');
  assert.equal(options.redirect, 'error');
  providerCalls += 1;
  return new Response('image', { headers: {
    'Content-Type': new URL(url).pathname.endsWith('unexpected-type') ? 'text/html' : 'image/png',
  } });
};
after(() => { globalThis.fetch = originalFetch; });

async function token(claims = {}, header = {}) {
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  const signed = [
    encode({ alg: 'RS256', kid: jwk.kid, ...header }),
    encode({
      aud: project, iss: `https://securetoken.google.com/${project}`,
      sub: 'test-user', exp: now + 300, iat: now, auth_time: now, ...claims,
    }),
  ].join('.');
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5', keys.privateKey, new TextEncoder().encode(signed),
  );
  return `${signed}.${Buffer.from(signature).toString('base64url')}`;
}

const validToken = await token();
const allow = { limit: async () => ({ success: true }) };
const deny = { limit: async () => ({ success: false }) };
const env = {
  FIREBASE_PROJECT_ID: project,
  ALLOWED_ORIGINS: origin,
  IP_RATE_LIMITER: allow,
  USER_RATE_LIMITER: allow,
  POLLINATIONS_API_KEY: 'test-only',
};

function request({ authorization = validToken, from = origin, type = 'application/json',
  body = '{"prompt":"sample"}', path = '/api/image/generate', method = 'POST', bindings = {},
} = {}) {
  const headers = { Origin: from, 'Content-Type': type, 'CF-Connecting-IP': '192.0.2.1' };
  if (authorization) headers.Authorization = `Bearer ${authorization}`;
  return worker.fetch(new Request(`https://worker.example${path}`, {
    method, headers, body: method === 'POST' ? body : undefined,
  }), { ...env, ...bindings });
}

test('allows only configured origins and known routes', async () => {
  assert.equal((await request({ from: 'https://other.example' })).status, 403);
  assert.equal((await request({ path: '/api/unknown' })).status, 404);
  const preflight = await request({ method: 'OPTIONS', authorization: null });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('Access-Control-Allow-Origin'), origin);
});

test('rejects missing credentials, invalid claims, and invalid signatures', async () => {
  const [header, claims] = validToken.split('.');
  for (const authorization of [
    null, 'invalid', `${header}.${claims}.${Buffer.alloc(256).toString('base64url')}`,
    await token({ aud: 'other-project' }), await token({ iss: 'https://other.example' }),
    await token({ exp: now - 1 }), await token({ iat: now + 3600 }),
    await token({ auth_time: now + 3600 }), await token({ sub: '' }),
    await token({}, { alg: 'none' }),
  ]) {
    assert.equal((await request({ authorization })).status, 401);
  }
  assert.equal(providerCalls, 0);
});

test('rejects unknown signing keys without repeatedly refreshing a valid cache', async () => {
  const before = jwksCalls;
  const differentKey = await token({}, { kid: 'unknown-key' });
  assert.equal((await request({ authorization: differentKey })).status, 401);
  assert.equal((await request({ authorization: differentKey })).status, 401);
  assert.equal(jwksCalls, before);
});

test('enforces IP and authenticated user request limits', async () => {
  assert.equal((await request({ bindings: { IP_RATE_LIMITER: deny } })).status, 429);
  const limiter = {
    async limit({ key }) {
      assert.equal(key, 'test-user');
      return { success: false };
    },
  };
  assert.equal((await request({ bindings: { USER_RATE_LIMITER: limiter } })).status, 429);
});

test('rejects unsupported media, malformed JSON, oversized input and unknown models', async () => {
  assert.equal((await request({ type: 'text/plain' })).status, 415);
  assert.equal((await request({ body: '{' })).status, 400);
  assert.equal((await request({ body: '[]' })).status, 400);
  assert.equal((await request({ body: JSON.stringify({ prompt: 'é'.repeat(17000) }) })).status, 413);
  assert.equal((await request({ body: '{"prompt":"sample","model":"unknown"}' })).status, 400);
  assert.equal(providerCalls, 0);
});

test('accepts a valid request and refuses unexpected upstream media types', async () => {
  const good = await request();
  assert.equal(good.status, 200);
  assert.equal(good.headers.get('Content-Type'), 'image/png');
  assert.equal(good.headers.get('X-Content-Type-Options'), 'nosniff');
  assert.match(good.headers.get('Cache-Control'), /no-store/);
  await good.text();
  const bad = await request({ body: '{"prompt":"unexpected-type"}' });
  assert.equal(bad.status, 500);
  assert.equal((await bad.json()).error, 'The requested processing failed.');
});
