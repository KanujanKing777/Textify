/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { apiRequest } from '../apiClient';

// Generate images for blog with multiple model fallbacks
export const generateBlogImages = async (imagePrompts, setBlogImages, setBlogImagesLoading) => {
  const modelsToTry = ['nanobanana-pro', 'nanobanana', 'gptimage', 'kontext'];
  
  if (!imagePrompts || imagePrompts.length === 0) return;
  
  setBlogImagesLoading(new Array(imagePrompts.length).fill(true));

  const results = await Promise.all(imagePrompts.map(async (entry, promptIndex) => {
    const prompt = typeof entry === 'string' ? entry : (entry.prompt || '');
    const caption = typeof entry === 'string'
      ? entry
      : (entry.caption || entry.prompt || '').replace(/\s+/g, ' ').trim();
    let imageUrl = null;
    let lastError;

    for (let pass = 0; pass < 3 && !imageUrl; pass += 1) {
      for (const model of modelsToTry) {
        try {
          const response = await apiRequest('/api/image/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              prompt: prompt.trim(),
              model,
            }),
          });
          imageUrl = URL.createObjectURL(await response.blob());
          break;
        } catch (modelErr) {
          lastError = modelErr;
          console.log(`Model ${model} failed for prompt on pass ${pass + 1}/3, trying the next model or retrying the sequence...`);
        }
      }
    }

    if (!imageUrl) {
      try {
        const response = await apiRequest('/api/image/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: prompt.trim(),
            model: 'zimage',
          }),
        });
        imageUrl = URL.createObjectURL(await response.blob());
      } catch (modelErr) {
        lastError = modelErr;
      }
    }

    if (imageUrl) {
      setBlogImages((prev) => {
        const updated = [...prev];
        updated[promptIndex] = {
          url: imageUrl,
          prompt,
          caption,
        };
        return updated;
      });
      setBlogImagesLoading((prev) => {
        const updated = [...prev];
        updated[promptIndex] = false;
        return updated;
      });
    } else {
      console.error('Failed to generate image for prompt:', prompt, lastError);
      setBlogImagesLoading((prev) => {
        const updated = [...prev];
        updated[promptIndex] = false;
        return updated;
      });
    }
    return Boolean(imageUrl);
  }));
  return results.every(Boolean);
};

// Format blog content with markdown-like syntax
export const formatBlogContent = (text, blogImages, onImageClick) => {
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
            <button
              type="button"
              className="comic-page-thumbnail"
              onClick={() => onImageClick?.(imageNum)}
              aria-label={`Enlarge image ${imageNum + 1}`}
            >
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
            </button>
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
