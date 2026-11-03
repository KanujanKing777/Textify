import { apiPostJson } from './apiClient';

export async function formatText(text, platform, tone, withe, length) {
  const result = await apiPostJson('/api/text/format', {
    text,
    platform,
    tone,
    withe,
    length,
  });
  return result.text || '';
}

export async function generateText(text, platform, tone, withe) {
  const result = await apiPostJson('/api/text/generate', {
    text,
    platform,
    tone,
    withe,
  });
  return result.text || '';
}

export async function generateBlog(topic, length, style) {
  return apiPostJson('/api/blog/generate', { topic, length, style });
}
