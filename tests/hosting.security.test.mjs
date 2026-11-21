import assert from 'node:assert/strict';
import { test } from 'node:test';

const origin = 'http://127.0.0.1:5000';

test('Hosting sends the security headers on the homepage and SPA routes', async () => {
  for (const path of ['/', '/security-smoke-test']) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('X-Content-Type-Options'), 'nosniff');
    assert.equal(response.headers.get('X-Frame-Options'), 'DENY');
    assert.equal(response.headers.get('Referrer-Policy'), 'no-referrer');
    const policy = response.headers.get('Content-Security-Policy');
    assert.match(policy, /(?:^|; )frame-ancestors 'none'(?:;|$)/);
    assert.match(policy, /(?:^|; )object-src 'none'(?:;|$)/);
    assert.match(policy, /(?:^|; )base-uri 'none'(?:;|$)/);
    assert.doesNotMatch(policy.match(/(?:^|; )script-src [^;]+/)[0], /unsafe-inline|unsafe-eval/);
    const page = await response.text();
    const script = page.match(/<script\b[^>]*\bsrc="(\/assets\/[^"]+\.js)"/)?.[1];
    assert.ok(script, 'Production bundle must load from the same origin.');
    const bundle = await fetch(new URL(script, origin));
    assert.equal(bundle.status, 200);
    await bundle.body.cancel();
  }
});
