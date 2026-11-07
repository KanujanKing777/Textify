create policy "Allow public Textify image uploads"
on storage.objects
for insert
to anon, authenticated
with check (
  bucket_id = 'textifybucket'
  and coalesce(metadata ->> 'mimetype', '') in (
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif',
    'image/avif'
  )
  and array_length(storage.foldername(name), 1) >= 1
);
