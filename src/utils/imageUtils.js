// Image generation utilities
import { apiRequest } from '../apiClient';

export const generateImage = async (imagePrompt, imageModel, setGeneratedImage, setOutput, setImageLoading) => {
  if (!imagePrompt.trim()) {
    setOutput('❌ Please enter an image prompt.');
    return null;
  }
  
  setImageLoading(true);
  try {
    const response = await apiRequest('/api/image/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: imagePrompt.trim(),
        model: imageModel,
      }),
    });
    const imageUrl = URL.createObjectURL(await response.blob());
    setGeneratedImage(imageUrl);
    setOutput('✅ Image generated successfully!');
    return imageUrl;
  } catch (err) {
    setOutput(`❌ ${err.message || 'Error generating image.'}`);
    console.error(err);
    return null;
  } finally {
    setImageLoading(false);
  }
};

export const downloadImage = async (generatedImage, setOutput) => {
  if (!generatedImage) return;
  try {
    const response = await fetch(generatedImage);
    if (!response.ok) throw new Error('Failed to fetch image.');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setOutput('✅ Image downloaded!');
  } catch (err) {
    console.error(err);
    setOutput('❌ Failed to download image.');
  }
};
