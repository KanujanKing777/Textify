import { auth } from './firebase';
import { supabase, supabaseConfigError, supabaseStorageBucket } from './supabase';

const extensionForContentType = (contentType) => {
  const extensions = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
    'image/avif': 'avif',
  };
  return extensions[contentType];
};

export async function uploadGeneratedImage(imageUrl, imageDetails = {}) {
  if (!supabase) {
    throw new Error(supabaseConfigError);
  }
  if (!auth?.currentUser) {
    throw new Error('Sign in before saving generated images.');
  }

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error('Could not read the generated image for upload.');
  }

  const imageBlob = await response.blob();
  const contentType = imageBlob.type || 'image/png';
  if (!extensionForContentType(contentType)) {
    throw new Error(`The generated image format is not supported: ${contentType}.`);
  }

  const filePath = `${auth.currentUser.uid}/${Date.now()}-${crypto.randomUUID()}.${extensionForContentType(contentType)}`;
  const { error } = await supabase.storage
    .from(supabaseStorageBucket)
    .upload(filePath, imageBlob, {
      cacheControl: '31536000',
      contentType,
      upsert: false,
    });

  if (error) {
    throw new Error(`Image upload failed: ${error.message}`);
  }

  const { data } = supabase.storage.from(supabaseStorageBucket).getPublicUrl(filePath);
  if (!data?.publicUrl) {
    throw new Error('The image uploaded, but Supabase did not return a public URL.');
  }

  return {
    ...imageDetails,
    path: filePath,
    url: data.publicUrl,
  };
}
