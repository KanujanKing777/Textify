// Home.js
import React, { useState, useEffect } from 'react';
import { formatText, generateText, generateBlog } from './api';
import './Home.css';
import { handleOpenInNewTab, handleConvertToPDF } from './HomeFun';
import { generateBlogImages, formatBlogContent, downloadBlogImage } from './utils/blogUtils';
import { generateImage, downloadImage } from './utils/imageUtils';
import { handleCopy } from './utils/textUtils';

function Home() {
  const [text, setText] = useState('');
  const [platform, setPlatform] = useState('Whatsapp');
  const [tone, setTone] = useState('Casual');
  const [withe, setWithe] = useState('With');
  const [length, setLength] = useState('Normal');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState('Blog');
  const [textMode, setTextMode] = useState('Generate');
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [imageModel, setImageModel] = useState('zimage');
  const [imageLoading, setImageLoading] = useState(false);
  const [blogTopic, setBlogTopic] = useState('');
  const [blogLength, setBlogLength] = useState('Medium');
  const [blogStyle, setBlogStyle] = useState('Informative');
  const [blogOutputFormat, setBlogOutputFormat] = useState('WebPage');
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogImages, setBlogImages] = useState([]);
  const [blogImagesLoading, setBlogImagesLoading] = useState([]);
  const [blogContentLoaded, setBlogContentLoaded] = useState(false);

  // Update blog content loaded state when output or blogOutputFormat changes
  useEffect(() => {
    if (output && (blogOutputFormat === 'WebPage' || blogOutputFormat === 'Blog')) {
      setBlogContentLoaded(true);
    } else {
      setBlogContentLoaded(false);
    }
  }, [output, blogOutputFormat]);

  const handleFormat = async () => {
    setLoading(true);
    try {
      const result = await formatText(text, platform, tone, withe, length);
      setOutput(result);
    } catch (err) {
      setOutput('❌ Error formatting text.');
      console.error(err);
    }
    setLoading(false);
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateText(text, platform, tone, withe, length);
      setOutput(result);
    } catch (err) {
      setOutput('❌ Error generating text.');
      console.error(err);
    }
    setLoading(false);
  };

  const handleCopyText = () => {
    handleCopy(output, setCopied);
  };

  const handleGenerateImageCall = async () => {
    await generateImage(imagePrompt, imageModel, setGeneratedImage, setOutput, setImageLoading);
  };

  const handleDownloadImageCall = async () => {
    await downloadImage(generatedImage, setOutput);
  };

  const handleDownloadBlogImageCall = async (imageUrl, index) => {
    await downloadBlogImage(imageUrl, index);
  };

  const handleGenerateBlogCall = async () => {
    if (!blogTopic.trim()) {
      setOutput('❌ Please enter a blog topic.');
      return;
    }
    setBlogLoading(true);
    setBlogImages([]);
    setBlogImagesLoading([]);
    try {
      const result = await generateBlog(blogTopic, blogLength, blogStyle);
      setOutput(result.content || '');
      
      if (result.images && result.images.length > 0) {
        generateBlogImages(result.images, setBlogImages, setBlogImagesLoading);
      }
    } catch (err) {
      setOutput('❌ Error generating blog.');
      console.error(err);
    }
    setBlogLoading(false);
  };

  // Function to format blog content with markdown-like syntax
  const formatBlogContentCall = (text) => {
    return formatBlogContent(text, blogImages);
  };

  return (
    <>
    

      <div className="page">
        <div className="card" role="region" aria-label="Textify">
          

          <div className="mode-toggle">
            <button
              className={mode === 'Blog' ? 'active' : ''}
              onClick={() => setMode('Blog')}
            >
              Magician
            </button>
            <button
              className={mode === 'Text' ? 'active' : ''}
              onClick={() => setMode('Text')}
            >
              Wordsmith
            </button>
            <button
              className={mode === 'Image' ? 'active' : ''}
              onClick={() => setMode('Image')}
            >
              Artist
            </button>
          </div>

          {mode === 'Blog' && (
            <>
              <div style={{ gridColumn: '1 / -1', marginBottom: '16px', padding: '12px', backgroundColor: 'transparent', borderRadius: '8px',  }}>
                <p style={{ margin: '0', fontSize: '14px', color: '#79808c', fontStyle: 'italic' }}>Generate rich text and stunning visuals combined in one creative flow.</p>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label><strong>Topic:</strong></label>
                <textarea
                  className="input"
                  value={blogTopic}
                  onChange={(e) => setBlogTopic(e.target.value)}
                  placeholder="Enter your Topic or main idea..."
                />

                <div className="controls">
                  <div className="field">
                    <label><strong>Length:</strong></label>
                    <select className="select" value={blogLength} onChange={(e) => setBlogLength(e.target.value)}>
                      <option value="Short">Short</option>
                      <option value="Medium">Medium</option>
                      <option value="Long">Long</option>
                      <option value="Detailed">Detailed</option>
                    </select>
                  </div>
                  <div className="field">
                    <label><strong>Style:</strong></label>
                    <select className="select" value={blogStyle} onChange={(e) => setBlogStyle(e.target.value)}>
                      <option value="Informative">Informative</option>
                      <option value="Casual">Casual</option>
                      <option value="Professional">Professional</option>
                      <option value="Creative">Creative</option>
                      <option value="Educational">Educational</option>
                    </select>
                  </div>
                  <div className="field">
                    <label><strong>Output Format:</strong></label>
                    <select className="select" value={blogOutputFormat} onChange={(e) => setBlogOutputFormat(e.target.value)}>
                      <option value="WebPage" title="Fully prepared content">Cooked</option>
                      <option value="Raw" title="Raw Text & Images">Raw</option>
                    </select>
                  </div>
                </div>

                <div className="actions">
                  <button onClick={handleGenerateBlogCall} className="btn" disabled={blogLoading}>
                    {blogLoading ? 'Generating…' : 'Generate'}
                  </button>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h4 style={{ margin: 0, color: '#e6eefc', fontSize: '14px' }}>Generated Content</h4>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-end' }}>
                      {output && (
                        <button
                          className="copyFloating"
                          onClick={handleCopyText}
                          aria-label="Copy Content"
                          title="Copy blog content"
                          style={{ position: 'static', marginBottom: 0, flex: 'none' }}
                        >
                          {copied ? 'Copied' : 'Copy'}
                        </button>
                      )}

                      {blogContentLoaded && (blogOutputFormat === 'WebPage' || blogOutputFormat === 'Blog') && (
                        <>
                          <button
                            onClick={handleOpenInNewTab}
                            style={{
                              flex: 'none',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              background: 'linear-gradient(90deg, rgba(124,58,237,0.95), rgba(6,182,212,0.95))',
                              color: 'white',
                              border: 'none',
                              cursor: 'pointer',
                              fontWeight: '600',
                              fontSize: '13px',
                              boxShadow: '0 4px 12px rgba(6,182,212,0.2)',
                              transition: 'transform .12s ease'
                            }}
                            onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                            onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            title="Open blog content in a new tab"
                          >
                            🔗 Open in New Tab
                          </button>
                          <button
                            onClick={handleConvertToPDF}
                            style={{
                              flex: 'none',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              background: 'linear-gradient(90deg, rgba(124,58,237,0.95), rgba(6,182,212,0.95))',
                              color: 'white',
                              border: 'none',
                              cursor: 'pointer',
                              fontWeight: '600',
                              fontSize: '13px',
                              boxShadow: '0 4px 12px rgba(6,182,212,0.2)',
                              transition: 'transform .12s ease'
                            }}
                            onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                            onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            title="Convert blog content to PDF"
                          >
                            📄 Convert to PDF
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                </div>
                  <div id='blogcontent' style={{ margin: 0, color: 'rgba(230,238,252,0.95)', fontSize: '14px' }}>
                    {blogOutputFormat === 'WebPage' || blogOutputFormat === 'PDF' ? (
                      formatBlogContentCall(output) || <p style={{ color: 'rgba(230,238,252,0.7)' }}>Your generated content will appear here.</p>
                    ) : (
                      <p style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'rgba(230,238,252,0.95)', fontSize: '14px' }}>
                        {output || 'Your generated content will appear here.'}
                      </p>
                    )}
                  </div>

                  

                {(blogImages.length > 0 || blogImagesLoading.length > 0) && blogOutputFormat !== 'WebPage' && blogOutputFormat !== 'PDF' && (
                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <h4 style={{ margin: '0 0 16px 0', color: '#e6eefc', fontSize: '14px' }}>Generated Images</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                      {/* Show loading skeletons for loading images */}
                      {blogImagesLoading.map((isLoading, index) => (
                        isLoading ? (
                          <div key={`loading-${index}`} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                            <div 
                              style={{ 
                                width: '100%', 
                                height: '200px', 
                                background: 'linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                backgroundSize: '200% 100%',
                                animation: 'skeleton-loading 1.5s infinite'
                              }} 
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
                              <p style={{ margin: 0, fontSize: '12px', color: 'rgba(230,238,252,0.7)' }}>
                                Loading image {index + 1}...
                              </p>
                            </div>
                          </div>
                        ) : null
                      ))}
                      {/* Show actual loaded images */}
                      {blogImages.map((img, index) => (
                        img && img.url ? (
                          <div key={index} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <img 
                              src={img.url} 
                              alt={`Generated ${index + 1}`} 
                              style={{ width: '100%', height: 'auto', display: 'block', minHeight: '200px' }} 
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
                              <p style={{ margin: 0, fontSize: '12px', color: 'rgba(230,238,252,0.7)' }}>
                                Image {index + 1}
                              </p>
                            <button
                              onClick={() => handleDownloadBlogImageCall(img.url, index)}
                              style={{
                                padding: '6px 10px',
                                borderRadius: '6px',
                                background: 'linear-gradient(90deg, rgba(124,58,237,0.95), rgba(6,182,212,0.95))',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '11px',
                                boxShadow: '0 4px 12px rgba(6,182,212,0.2)',
                                transition: 'transform .12s ease',
                                whiteSpace: 'nowrap'
                              }}
                              onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                              onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        ) : null
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}


          {mode === 'Text' && (
            <>
              <div style={{ gridColumn: '1 / -1', marginBottom: '16px', padding: '12px', backgroundColor: 'transparent', borderRadius: '8px',  }}>
                <p style={{ margin: '0', fontSize: '14px', color: '#79808c', fontStyle: 'italic' }}>Generate engaging text in seconds</p>
              </div>
              <div className="mode-toggle sub-toggle" style={{ marginTop: '12px' }}>
                <button
                  className={textMode === 'Generate' ? 'active' : ''}
                  onClick={() => setTextMode('Generate')}
                  style={{ flex: 1 }}
                >
                  Generate Text
                </button>
                <button
                  className={textMode === 'Custom' ? 'active' : ''}
                  onClick={() => setTextMode('Custom')}
                  style={{ flex: 1 }}
                >
                  Modify Text
                </button>
              </div>
              <br />
              {textMode === 'Generate' && (
            <div className="input-container">
              <label><strong>Prompt:</strong></label>
              <textarea
                className="input"
                rows={6}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your prompt here..."
              />


              <div className="actions">
                <button onClick={handleGenerate} className="btn" disabled={loading}>
                  {loading ? 'Generating…' : 'Generate'}
                </button>
              </div>

            </div>
              )}

              {textMode === 'Custom' && (
            <div className="input-container">
              <label><strong>Content:</strong></label>

              <textarea
                className="input"
                rows={6}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste your content here..."
              />

              <div className="controls">
                <div className="field">
                  <label><strong>Platform:</strong></label>
                  <select className="select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
                    <option value="Whatsapp">Whatsapp</option>
                    <option value="Discord">Discord</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Twitter">Twitter</option>
                  </select>
                </div>

                <div className="field">
                  <label><strong>Tone:</strong></label>
                  <select className="select" value={tone} onChange={(e) => setTone(e.target.value)}>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Cool">Cool</option>
                  </select>
                </div>

                <div className="field">
                  <label><strong>Include Emojis:</strong></label>
                  <select className="select" value={withe} onChange={(e) => setWithe(e.target.value)}>
                    <option value="With">Yes</option>
                    <option value="Without">No</option>
                  </select>
                </div>

                <div className="field">
                  <label><strong>Length:</strong></label>
                  <select className="select" value={length} onChange={(e) => setLength(e.target.value)}>
                    <option value="Normal">Normal</option>
                    <option value="Short">Short</option>
                    <option value="Long">Long</option>
                  </select>
                </div>
              </div>

              <div className="actions">
                <button onClick={handleFormat} className="btn" disabled={loading}>
                  {loading ? 'Formatting…' : 'Format'}
                </button>
              </div>

            </div>
              )}
            </>
          )}

          {mode === 'Image' && (
            <>
              <div style={{ gridColumn: '1 / -1', marginBottom: '16px', padding: '12px', backgroundColor: 'transparent', borderRadius: '8px', }}>
                <p style={{ margin: '0', fontSize: '14px', color: '#79808c', fontStyle: 'italic' }}>Turn imagination into high-quality visuals</p>
              </div>
              <div className="input-container">
                <label><strong>Image Prompt:</strong></label>

              <textarea
                className="input"
                rows={4}
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)}
                placeholder="e.g. a neon cyberpunk cityscape at night..."
              />

              <div className="controls">
                <div className="field">
                  <label><strong>Model:</strong></label>
                  <select className="select" value={imageModel} onChange={(e) => setImageModel(e.target.value)}>
                    <option value="zimage">zimage (default)</option>
                    <option value="flux">flux</option>
                    <option value="turbo">turbo</option>
                    <option value="gptimage">gptimage</option>
                    <option value="kontext">kontext</option>
                    <option value="seedream">seedream</option>
                    <option value="seedream-pro">seedream-pro</option>
                    <option value="nanobanana">nanobanana</option>
                    <option value="nanobanana-pro">nanobanana-pro</option>
                  </select>
                </div>
              </div>

              <div className="actions">
                <button onClick={handleGenerateImageCall} className="btn" disabled={imageLoading}>
                  {imageLoading ? 'Generating…' : 'Generate Image'}
                </button>
              </div>

            </div>
            </>
          )}

          

          <aside className="preview" aria-live="polite" style={{ display: mode === 'Blog' ? 'none' : 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4>{mode === 'Image' ? 'Generated Image' : 'Output Text'}</h4>
              {mode === 'Image' && generatedImage && (
                <button
                  onClick={handleDownloadImageCall}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'linear-gradient(90deg, rgba(124,58,237,0.95), rgba(6,182,212,0.95))',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '13px',
                    boxShadow: '0 4px 12px rgba(6,182,212,0.2)',
                    transition: 'transform .12s ease'
                  }}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Download
                </button>
              )}
            </div>
            {mode === 'Image' ? (
              <>
                {generatedImage ? (
                  <div>
                    <div style={{ marginTop: '12px', borderRadius: '10px', overflow: 'hidden' }}>
                      <img src={generatedImage} alt="Generated" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                ) : (
                  <p style={{ color: 'rgba(230,238,252,0.65)' }}>Your generated image will appear here.</p>
                )}
                {output && <p style={{ fontSize: '13px', color: 'rgba(230,238,252,0.75)', marginTop: '8px' }}>{output}</p>}
              </>
            ) : (
              <>
                {output && (
                  <button
                    className="copyFloating"
                    onClick={handleCopyText}
                    aria-label="Copy formatted text"
                    title="Copy formatted text"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                )}
                <p>
                  {textMode === 'Generate' ? output || 'Your generated content will appear here.' : output || 'Your formatted text will appear here.'}
                 
                </p>
              </>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;
