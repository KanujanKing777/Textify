import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { PGlite } from '@electric-sql/pglite';

test('the storage migration makes images private and enforces owner access in PostgreSQL', async () => {
  const db = await PGlite.create();
  try {
    // Model the Supabase Storage tables and JWT/path helpers used by this migration.
    await db.exec(`
      create role anon;
      create role authenticated;
      create schema auth;
      create schema storage;
      create function auth.jwt() returns jsonb language sql stable as
        $$ select nullif(current_setting('request.jwt.claims', true), '')::jsonb $$;
      create function storage.foldername(name text) returns text[] language sql immutable as
        $$ select (string_to_array(name, '/'))[1:array_length(string_to_array(name, '/'), 1) - 1] $$;
      create function storage.filename(name text) returns text language sql immutable as
        $$ select split_part(name, '/', -1) $$;
      create table storage.buckets (
        id text primary key, public boolean, file_size_limit bigint, allowed_mime_types text[]
      );
      create table storage.objects (
        bucket_id text references storage.buckets, name text, primary key (bucket_id, name)
      );
      alter table storage.objects enable row level security;
      grant usage on schema auth, storage to anon, authenticated;
      grant select, insert on storage.objects to anon, authenticated;
      insert into storage.buckets (id, public) values ('textifybucket', true);
      insert into storage.objects values ('textifybucket', 'other/2-abcd.png');
      create policy "Allow public Textify image uploads" on storage.objects
        for insert to anon, authenticated with check (bucket_id = 'textifybucket');
      create policy "Example broad read policy" on storage.objects for select using (true);
    `);
    const migration = await readFile(new URL('../supabase-storage-policies.sql', import.meta.url), 'utf8');
    await db.exec(migration);
    await db.exec(migration);
    const { rows: [bucket] } = await db.query('select * from storage.buckets');
    assert.equal(bucket.public, false);
    assert.equal(Number(bucket.file_size_limit), 8 * 1024 * 1024);
    assert.deepEqual(bucket.allowed_mime_types, ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/avif']);

    const insert = (name) => db.query("insert into storage.objects values ('textifybucket', $1)", [name]);
    const readImages = async () => (await db.query('select name from storage.objects')).rows;
    const denied = { code: '42501' };
    await db.exec('set role anon');
    assert.deepEqual(await readImages(), []);
    await assert.rejects(insert('owner/1-abcd.png'), denied);

    await db.exec('set role authenticated');
    const claims = { sub: 'owner', aud: 'letstypifythecontent', iss: 'https://securetoken.google.com/letstypifythecontent' };
    const setClaims = (overrides) => db.query("select set_config('request.jwt.claims', $1, false)", [
      JSON.stringify({ ...claims, ...overrides }),
    ]);
    await setClaims();
    await insert('owner/1-abcd.png');
    assert.deepEqual(await readImages(), [{ name: 'owner/1-abcd.png' }]);
    await assert.rejects(insert('other/1-abcd.png'), denied);
    await assert.rejects(insert('owner/nested/1-abcd.png'), denied);
    await assert.rejects(insert('owner/1-abcd.svg'), denied);

    await setClaims({ iss: 'https://securetoken.google.com/other-project' });
    assert.deepEqual(await readImages(), []);
    await assert.rejects(insert('owner/3-abcd.png'), denied);
    await setClaims({ aud: 'other-project' });
    await assert.rejects(insert('owner/3-abcd.png'), denied);
  } finally {
    await db.close();
  }
});
