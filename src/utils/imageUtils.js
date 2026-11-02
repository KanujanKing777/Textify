// Image generation utilities

export const generateImage = async (imagePrompt, imageModel, setGeneratedImage, setOutput, setImageLoading) => {
  if (!imagePrompt.trim()) {
    setOutput('❌ Please enter an image prompt.');
    return;
  }
  
  setImageLoading(true);
  try {
    const encodedPrompt = encodeURIComponent(imagePrompt.trim());
    const params = new URLSearchParams({
      model: imageModel,
      width: '1024',
      height: '1024',
      seed: '0',
      enhance: 'false',
      negative_prompt: 'worst quality, blurry',
      private: 'true',
      nologo: 'false',
      nofeed: 'false',
      safe: 'false',
      quality: 'medium',
      image: '',
      transparent: 'false',
      guidance_scale: '1'
    });
    const imageUrl = `https://gen.pollinations.ai/image/${encodedPrompt}?${params.toString()}&key=${encodeURIComponent("sk_JnVq787jGJsEXLWLKMZoZsm82ejmdZKn")}`;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setGeneratedImage(imageUrl);
      setOutput('✅ Image generated successfully!');
      setImageLoading(false);
    };
    img.onerror = () => {
      setOutput('❌ Failed to generate image.');
      setImageLoading(false);
    };
    img.src = imageUrl;
  } catch (err) {
    setOutput('❌ Error generating image.');
    console.error(err);
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
