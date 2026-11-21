import { auth } from './firebase';
import { supabase, supabaseConfigError, supabaseStorageBucket } from './supabase';

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

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
  const user = auth?.currentUser;
  if (!user) {
    throw new Error('Sign in before saving generated images.');
  }

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error('Could not read the generated image for upload.');
  }

  const imageBlob = await response.blob();
  const contentType = imageBlob.type;
  if (imageBlob.size === 0 || imageBlob.size > MAX_IMAGE_BYTES) {
    throw new Error('The image must be between 1 byte and 8 MiB.');
  }
  if (!extensionForContentType(contentType)) {
    throw new Error(`The generated image format is not supported: ${contentType}.`);
  }

  const filePath = `${user.uid}/${Date.now()}-${crypto.randomUUID()}.${extensionForContentType(contentType)}`;
  const { error } = await supabase.storage
    .from(supabaseStorageBucket)
    .upload(filePath, imageBlob, {
      cacheControl: '0',
      contentType,
      upsert: false,
    });

  if (error) {
    throw new Error(`Image upload failed: ${error.message}`);
  }

  return {
    ...imageDetails,
    path: filePath,
  };
}

export async function getSavedImages(images) {
  const uid = auth?.currentUser?.uid;
  if (!supabase || !uid || !Array.isArray(images)) return [];
  const paths = [...new Set(images.map((image) => image?.path).filter((path) => (
    typeof path === 'string'
    && path.startsWith(`${uid}/`)
    && /^[0-9]+-[a-f0-9-]+\.(jpg|png|webp|gif|avif)$/i.test(path.slice(uid.length + 1))
  )))];
  if (!paths.length) return images.map(() => null);

  const { data, error } = await supabase.storage.from(supabaseStorageBucket)
    .createSignedUrls(paths, 600);
  if (error) throw error;
  const urls = new Map(data.filter((image) => image.signedUrl)
    .map((image) => [image.path, image.signedUrl]));
  return images.map((image) => {
    const url = urls.get(image?.path);
    return url ? { ...image, url } : null;
  });
}
