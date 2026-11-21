begin;

update storage.buckets
set public = false,
    file_size_limit = 8388608,
    allowed_mime_types = array['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/avif']
where id = 'textifybucket';

drop policy if exists "Allow public Textify image uploads" on storage.objects;
drop policy if exists "Restrict Textify images to their Firebase owner" on storage.objects;
drop policy if exists "Read own Textify images" on storage.objects;
drop policy if exists "Insert own Textify images" on storage.objects;

create policy "Restrict Textify images to their Firebase owner"
on storage.objects as restrictive
for all to public
using (
  bucket_id <> 'textifybucket'
  or (
    auth.jwt() ->> 'iss' = 'https://securetoken.google.com/letstypifythecontent'
    and auth.jwt() ->> 'aud' = 'letstypifythecontent'
    and (storage.foldername(name))[1] = auth.jwt() ->> 'sub'
  )
)
with check (
  bucket_id <> 'textifybucket'
  or (
    auth.jwt() ->> 'iss' = 'https://securetoken.google.com/letstypifythecontent'
    and auth.jwt() ->> 'aud' = 'letstypifythecontent'
    and (storage.foldername(name))[1] = auth.jwt() ->> 'sub'
    and array_length(storage.foldername(name), 1) = 1
    and storage.filename(name) ~ '^[0-9]+-[a-f0-9-]+\.(jpg|png|webp|gif|avif)$'
  )
);

create policy "Read own Textify images"
on storage.objects for select to authenticated
using (bucket_id = 'textifybucket');

create policy "Insert own Textify images"
on storage.objects for insert to authenticated
with check (bucket_id = 'textifybucket');

commit;
