import { expect, test, vi } from 'vitest';
import { getSavedImages } from './storage';

const { createSignedUrls } = vi.hoisted(() => ({ createSignedUrls: vi.fn() }));

vi.mock('./firebase', () => ({ auth: { currentUser: { uid: 'owner' } } }));
vi.mock('./supabase', () => ({
  supabaseStorageBucket: 'textifybucket',
  supabase: { storage: { from: () => ({ createSignedUrls }) } },
}));

test('replaces legacy URLs with signed URLs for the current user’s objects', async () => {
  const path = 'owner/123-abcd.png';
  const signedUrl = 'https://example.invalid/signed.png';
  createSignedUrls.mockResolvedValue({ data: [{ path, signedUrl }], error: null });

  await expect(getSavedImages([
    { path, url: 'https://example.invalid/legacy.png' },
    null,
    { path: 'another-user/123-abcd.png' },
    { path: 'owner/nested/123-abcd.png' },
    { url: 'https://example.invalid/by-url-only.png' },
  ])).resolves.toEqual([{ path, url: signedUrl }, null, null, null, null]);
  expect(createSignedUrls).toHaveBeenCalledWith([path], 600);
});
