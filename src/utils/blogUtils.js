/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

// Generate images for blog with multiple model fallbacks
export const generateBlogImages = async (imagePrompts, setBlogImages, setBlogImagesLoading) => {
  const modelsToTry = ['nanobanana-pro', 'nanobanana', 'gptimage', 'zimage'];
  
  if (!imagePrompts || imagePrompts.length === 0) return;
  
  setBlogImagesLoading(new Array(imagePrompts.length).fill(true));

  imagePrompts.forEach((entry, promptIndex) => {
    (async () => {
      const prompt = typeof entry === 'string' ? entry : (entry.prompt || '');
      const caption = typeof entry === 'string'
        ? entry
        : (entry.caption || entry.prompt || '').replace(/\s+/g, ' ').trim();
      let imageUrl = null;
      
      for (const model of modelsToTry) {
        try {
          const encodedPrompt = encodeURIComponent(prompt.trim());
          const params = new URLSearchParams({
            model: model,
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
          const testUrl = `https://gen.pollinations.ai/image/${encodedPrompt}?${params.toString()}&key=${encodeURIComponent("sk_JnVq787jGJsEXLWLKMZoZsm82ejmdZKn")}`;
          
          const testImage = new Image();
          testImage.crossOrigin = 'anonymous';
          
          // eslint-disable-next-line no-loop-func
          const imageLoadPromise = new Promise((resolve) => {
            testImage.onload = () => {
              imageUrl = testUrl;
              console.log(`Successfully generated image with model: ${model}`);
              resolve(true);
            };
            testImage.onerror = () => {
              console.log(`Model ${model} failed for prompt, trying next...`);
              resolve(false);
            };
            testImage.src = testUrl;
          });
          
          if (await imageLoadPromise) {
            if (imageUrl) {
              break;
            }
          }
        } catch (modelErr) {
          console.log(`Model ${model} failed for prompt, trying next...`);
          continue;
        }
      }
      
      if (imageUrl) {
        setBlogImages((prev) => {
          const updated = [...prev];
          updated[promptIndex] = {
            url: imageUrl,
            prompt: prompt,
            caption: caption
          };
          return updated;
        });
        setBlogImagesLoading((prev) => {
          const updated = [...prev];
          updated[promptIndex] = false;
          return updated;
        });
      } else {
        console.error('Failed to generate image for prompt:', prompt);
        setBlogImagesLoading((prev) => {
          const updated = [...prev];
          updated[promptIndex] = false;
          return updated;
        });
      }
    })();
  });
};

// Format blog content with markdown-like syntax
export const formatBlogContent = (text, blogImages) => {
  if (!text) return null;
  
  const lines = text.split('\n');
  
  return lines.map((line, index) => {
    const imageMatch = line.match(/\[Image:\s*(\d+)\]/i);
    if (imageMatch) {
      const imageNum = parseInt(imageMatch[1]) - 1;
      if (blogImages[imageNum] && blogImages[imageNum].url) {
        return (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div key={index} style={{ margin: '16px 0', textAlign: 'center' }}>
            <img 
              src={blogImages[imageNum].url} 
              alt={blogImages[imageNum].caption || blogImages[imageNum].prompt || `Image ${imageNum + 1}`}
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                maxHeight: '400px'
              }} 
            />
             <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: 'rgba(230,238,252,0.6)' }}>
               {blogImages[imageNum].caption || blogImages[imageNum].prompt || `Image ${imageNum + 1}`}
             </p>
          </div>
        );
      } else {
        return (
          <div key={index} style={{ margin: '16px 0', padding: '20px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.2)' }}>
            <p style={{ margin: 0, color: 'rgba(230,238,252,0.6)', fontSize: '12px' }}>
              Image {imageNum + 1} loading...
            </p>
          </div>
        );
      }
    }
    else if (line.startsWith('####')) {
      const content = line.replace(/^####\s*/, '');
      return (
        <div key={index} style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '8px', color: '#e6eefc' }}>
          {content}
        </div>
      );
    }
    else if (line.startsWith('###')) {
      const content = line.replace(/^###\s*/, '');
      return (
        <div key={index} style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px', color: '#e6eefc' }}>
          {content}
        </div>
      );
    }
    else if (line.startsWith('##')) {
      const content = line.replace(/^##\s*/, '');
      return (
        <div key={index} style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '12px', color: '#e6eefc', marginTop: '12px' }}>
          {content}
        </div>
      );
    }
    else if (line.startsWith('#')) {
      const content = line.replace(/^#\s*/, '');
      return (
        <div key={index} style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px', color: '#e6eefc', marginTop: '16px' }}>
          {content}
        </div>
      );
    }
    else if (line.includes('**') || line.includes('*')) {
      const parts = line.split(/(\*\*.*?\*\*|\*[^*]+\*)/g);
      return (
        <p key={index} style={{ margin: '6px 0', color: 'rgba(230,238,252,0.95)' }}>
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i}>{part.slice(2, -2)}</strong>;
            } else if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
              return <strong key={i}>{part.slice(1, -1)}</strong>;
            } else {
              return part;
            }
          })}
        </p>
      );
    }
    else if (line.trim()) {
      return (
        <p key={index} style={{ margin: '6px 0', color: 'rgba(230,238,252,0.95)', lineHeight: '1.6' }}>
          {line}
        </p>
      );
    }
    else {
      return <div key={index} style={{ height: '8px' }} />;
    }
  });
};

// Download blog image
export const downloadBlogImage = async (imageUrl, index) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Failed to fetch image.');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blog-image-${index + 1}-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error(err);
    alert('❌ Failed to download image.');
  }
};
