// Home.js
import React, { useState, useEffect } from 'react';
import { formatText, generateText, generateBlog } from './api';
import './Home.css';
import { handleOpenInNewTab, handleConvertToPDF } from './HomeFun';
import { generateBlogImages, formatBlogContent, downloadBlogImage } from './utils/blogUtils';
import { generateImage, downloadImage } from './utils/imageUtils';
import { handleCopy } from './utils/textUtils';
import { Volume2, Pause, Play, Copy, ExternalLink, FileText, Download, X, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { auth, db } from './firebase';
import {
  saveChatHistoryEntry,
  subscribeToChatHistory,
  updateChatHistoryOutput,
} from './chatHistory';
import { uploadGeneratedImage } from './storage';
import ChatHistoryPanel from './ChatHistoryPanel';

const formattedBlogOutputFormats = ['Blog', 'Story', 'Comic'];
const themeBasedOutputFormats = ['Story', 'Comic'];

const makeHistoryTitle = (value, fallback) => (
  value.trim().replace(/\s+/g, ' ').slice(0, 64) || fallback
);

const getHistoryBlogImages = (entry) => {
  const prompts = Array.isArray(entry.output?.imagePrompts) ? entry.output.imagePrompts : [];
  const storedImages = Array.isArray(entry.output?.imageUrls) ? entry.output.imageUrls : [];
  const availableIndexes = new Set(storedImages.map((_, index) => index));

  if (!prompts.length) return storedImages;
  if (storedImages.length === prompts.length) return storedImages;

  return prompts.map((prompt, promptIndex) => {
    const alignedImage = storedImages[promptIndex];
    if (alignedImage && alignedImage.prompt === prompt.prompt) {
      availableIndexes.delete(promptIndex);
      return alignedImage;
    }

    const matchingIndex = storedImages.findIndex((image, imageIndex) => (
      availableIndexes.has(imageIndex)
      && image
      && image.prompt
      && image.prompt === prompt.prompt
    ));
    if (matchingIndex < 0) return null;

    availableIndexes.delete(matchingIndex);
    return storedImages[matchingIndex];
  });
};

const getAdjacentComicImageIndex = (images, currentIndex, direction) => {
  for (let step = 1; step <= images.length; step += 1) {
    const nextIndex = (currentIndex + direction * step + images.length) % images.length;
    if (images[nextIndex]?.url) return nextIndex;
  }
  return currentIndex;
};

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
  const [storyThemes, setStoryThemes] = useState([]);
  const [isCustomThemeSelected, setIsCustomThemeSelected] = useState(false);
  const [customStoryTheme, setCustomStoryTheme] = useState('');
  const [blogLength, setBlogLength] = useState('Medium');
  const [comicImageCount, setComicImageCount] = useState('4');
  const [customComicImageCount, setCustomComicImageCount] = useState('4');
  const [blogStyle, setBlogStyle] = useState('Informative');
  const [blogOutputFormat, setBlogOutputFormat] = useState('Blog');
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogImages, setBlogImages] = useState([]);
  const [blogImagesLoading, setBlogImagesLoading] = useState([]);
  const [focusedComicImageIndex, setFocusedComicImageIndex] = useState(null);
  const [blogContentLoaded, setBlogContentLoaded] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [historyEntries, setHistoryEntries] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [historyError, setHistoryError] = useState('');
  const [historySaveError, setHistorySaveError] = useState('');
  const [historySaveStatus, setHistorySaveStatus] = useState('');
  const [selectedHistoryId, setSelectedHistoryId] = useState(null);
  const [restoredHistoryEntry, setRestoredHistoryEntry] = useState(null);
  const [historyOpen, setHistoryOpen] = useState(false);

  useEffect(() => {
    const currentUser = auth?.currentUser;
    if (!db || !currentUser) {
      setHistoryError('Chat history is unavailable until your account and Firestore are ready.');
      setHistoryLoading(false);
      return undefined;
    }

    return subscribeToChatHistory(
      currentUser.uid,
      (entries) => {
        setHistoryEntries(entries);
        setRestoredHistoryEntry((currentEntry) => (
          currentEntry ? entries.find((entry) => entry.id === currentEntry.id) || currentEntry : null
        ));
        setHistoryLoading(false);
        setHistoryError('');
      },
      (error) => {
        console.error('Failed to load chat history:', error);
        setHistoryError('Chat history could not be loaded. Check your Firestore rules and connection.');
        setHistoryLoading(false);
      },
    );
  }, []);

  // Update blog content loaded state when output or blogOutputFormat changes
  useEffect(() => {
    if (output && formattedBlogOutputFormats.includes(blogOutputFormat)) {
      setBlogContentLoaded(true);
    } else {
      setBlogContentLoaded(false);
    }
  }, [output, blogOutputFormat]);

  useEffect(() => {
    if (focusedComicImageIndex === null) return undefined;
    if (blogImages.length === 0) {
      setFocusedComicImageIndex(null);
      return undefined;
    }

    const handleViewerKeyDown = (event) => {
      if (event.key === 'Escape') {
        setFocusedComicImageIndex(null);
      } else if (event.key === 'ArrowRight') {
        setFocusedComicImageIndex((index) => getAdjacentComicImageIndex(blogImages, index, 1));
      } else if (event.key === 'ArrowLeft') {
        setFocusedComicImageIndex((index) => getAdjacentComicImageIndex(blogImages, index, -1));
      }
    };

    document.addEventListener('keydown', handleViewerKeyDown);
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleViewerKeyDown);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [focusedComicImageIndex, blogImages]);

  const persistGeneration = async (generationMode, action, input, outputText, titleSource, outputDetails) => {
    setHistorySaveError('');
    setHistorySaveStatus('');
    try {
      const id = await saveChatHistoryEntry({
        title: makeHistoryTitle(titleSource, `${action} ${generationMode.toLowerCase()}`),
        mode: generationMode,
        action,
        input,
        output: { text: outputText, ...outputDetails },
      });
      setSelectedHistoryId(id);
      return id;
    } catch (error) {
      console.error('Failed to save chat history:', error);
      setHistorySaveError(
        'Your result is ready, but it could not be saved to chat history. Check your Firestore rules and connection.',
      );
      return null;
    }
  };

  const persistGeneratedImages = async (entryId, generatedImages, outputText, imagePrompts) => {
    if (!entryId || !generatedImages.length) return;

    setHistorySaveStatus('Saving generated images to chat history…');
    setHistorySaveError('');
    const uploads = await Promise.allSettled(generatedImages.map((image) => (
      image
        ? uploadGeneratedImage(image.url, {
          prompt: image.prompt || '',
          caption: image.caption || '',
        })
        : Promise.resolve(null)
    )));
    const imageUrls = uploads.map((result) => (
      result.status === 'fulfilled' ? result.value : null
    ));
    const savedImageCount = imageUrls.filter(Boolean).length;
    const allImagesSaved = generatedImages.every(Boolean)
      && uploads.every((result) => result.status === 'fulfilled' && result.value);

    uploads.forEach((result) => {
      if (result.status === 'rejected') {
        console.error('Failed to save a generated image:', result.reason);
      }
    });

    try {
      await updateChatHistoryOutput(entryId, {
        text: outputText,
        imagePrompts,
        imageUrls,
        imageFilesStored: allImagesSaved,
        imageFileStored: allImagesSaved && generatedImages.length === 1,
      });
      setHistorySaveStatus('');
      if (!allImagesSaved) {
        setHistorySaveError(
          `${savedImageCount} of ${generatedImages.length} generated images were saved. Check the Supabase bucket and Storage policies.`,
        );
      }
    } catch (error) {
      console.error('Failed to link uploaded images to chat history:', error);
      setHistorySaveStatus('');
      setHistorySaveError(
        'Images were uploaded, but their links could not be saved to chat history. Check your Firestore rules and connection.',
      );
    }
  };

  const handleNewChat = () => {
    setHistoryOpen(false);
    setSelectedHistoryId(null);
    setRestoredHistoryEntry(null);
    setHistorySaveError('');
    setMode('Blog');
    setText('');
    setPlatform('Whatsapp');
    setTone('Casual');
    setWithe('With');
    setLength('Normal');
    setOutput('');
    setTextMode('Generate');
    setImagePrompt('');
    setGeneratedImage('');
    setImageModel('zimage');
    setBlogTopic('');
    setStoryThemes([]);
    setIsCustomThemeSelected(false);
    setCustomStoryTheme('');
    setBlogLength('Medium');
    setComicImageCount('4');
    setCustomComicImageCount('4');
    setBlogStyle('Informative');
    setBlogOutputFormat('Blog');
    setBlogImages([]);
    setBlogImagesLoading([]);
    setFocusedComicImageIndex(null);
  };

  const handleSelectHistoryEntry = (entry) => {
    if (!entry?.input || !entry?.output || !['Blog', 'Text', 'Image'].includes(entry.mode)) {
      console.error('Chat history entry has an unsupported format:', entry?.id);
      setHistoryError('This history item could not be opened because its saved data is incomplete.');
      return;
    }

    const input = entry.input;
    const outputText = typeof entry.output === 'string' ? entry.output : entry.output.text;
    if (typeof outputText !== 'string') {
      console.error('Chat history entry has no saved output:', entry.id);
      setHistoryError('This history item could not be opened because its saved output is missing.');
      return;
    }

    setHistoryError('');
    setHistorySaveError('');
    setHistoryOpen(false);
    setSelectedHistoryId(entry.id);
    setRestoredHistoryEntry(entry);
    setMode(entry.mode);
    setOutput(outputText);
    setGeneratedImage('');
    setBlogImages([]);
    setBlogImagesLoading([]);
    setFocusedComicImageIndex(null);

    if (entry.mode === 'Blog') {
      const themes = Array.isArray(input.themes) ? input.themes : [];
      const standardThemes = ['Sci-fi', 'Thriller', 'Drama', 'Comedy', 'Action', 'Adventure'];
      setBlogTopic(input.topic || '');
      setBlogOutputFormat(input.outputFormat || 'Blog');
      setBlogLength(input.length || 'Medium');
      setBlogStyle(input.style || 'Informative');
      setStoryThemes(themes);
      setIsCustomThemeSelected(
        typeof input.isCustomThemeSelected === 'boolean'
          ? input.isCustomThemeSelected
          : themes.some((theme) => !standardThemes.includes(theme)),
      );
      setCustomStoryTheme(input.customThemeDraft || '');
      setComicImageCount(input.imageCountSelection || '4');
      setCustomComicImageCount(String(input.customImageCount || '4'));
    } else if (entry.mode === 'Text') {
      setText(input.text || '');
      setTextMode(input.textMode || (entry.action === 'Format' ? 'Custom' : 'Generate'));
      setPlatform(input.platform || 'Whatsapp');
      setTone(input.tone || 'Casual');
      setWithe(input.includeEmojis || input.withe || 'With');
      setLength(input.length || 'Normal');
    } else {
      setImagePrompt(input.prompt || input.imagePrompt || '');
      setImageModel(input.model || input.imageModel || 'zimage');
    }
  };

  const handleFormat = async () => {
    const input = { text, platform, tone, includeEmojis: withe, length };
    setRestoredHistoryEntry(null);
    setLoading(true);
    try {
      const result = await formatText(text, platform, tone, withe, length);
      setOutput(result);
      setLoading(false);
      void persistGeneration('Text', 'Format', input, result, text, {});
    } catch (err) {
      setOutput('❌ Error formatting text.');
      console.error(err);
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    const input = { text, textMode, platform, tone, includeEmojis: withe, length };
    setRestoredHistoryEntry(null);
    setLoading(true);
    try {
      const result = await generateText(text, platform, tone, withe, length);
      setOutput(result);
      setLoading(false);
      void persistGeneration('Text', 'Generate', input, result, text, {});
    } catch (err) {
      setOutput('❌ Error generating text.');
      console.error(err);
      setLoading(false);
    }
  };

  const handleCopyText = () => {
    handleCopy(output, setCopied);
  };

  const handleReadText = () => {
    if (!output) return;
    
    // If currently speaking, pause it
    if (window.speechSynthesis.speaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      return;
    }
    
    // If paused, resume it
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    // Start new speech
    const utterance = new SpeechSynthesisUtterance(output);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const handleGenerateImageCall = async () => {
    const input = { prompt: imagePrompt, model: imageModel };
    setRestoredHistoryEntry(null);
    const imageUrl = await generateImage(imagePrompt, imageModel, setGeneratedImage, setOutput, setImageLoading);
    if (imageUrl) {
      const entryId = await persistGeneration(
        'Image',
        'Generate image',
        input,
        '✅ Image generated successfully!',
        imagePrompt,
        { imageFileStored: false },
      );
      if (entryId) {
        await persistGeneratedImages(
          entryId,
          [{ url: imageUrl, prompt: imagePrompt, caption: imagePrompt }],
          '✅ Image generated successfully!',
          [],
        );
      }
    }
  };

  const handleDownloadImageCall = async () => {
    await downloadImage(generatedImage, setOutput);
  };

  const handleDownloadBlogImageCall = async (imageUrl, index) => {
    await downloadBlogImage(imageUrl, index);
  };

  const handleStoryThemeToggle = (theme) => {
    setStoryThemes((currentThemes) => {
      if (currentThemes.includes(theme)) {
        return currentThemes.length > 1
          ? currentThemes.filter((currentTheme) => currentTheme !== theme)
          : currentThemes;
      }
      return [...currentThemes, theme];
    });
  };

  const handleAddCustomStoryTheme = () => {
    const theme = customStoryTheme.trim();
    if (theme && !storyThemes.includes(theme)) {
      setStoryThemes((currentThemes) => (
        currentThemes.includes(theme) ? currentThemes : [...currentThemes, theme]
      ));
      setCustomStoryTheme('');
    }
  };

  const handleGenerateBlogCall = async () => {
    if (!blogTopic.trim()) {
      setOutput(`❌ Please enter a ${blogOutputFormat === 'Story' ? 'story idea' : blogOutputFormat === 'Comic' ? 'comic idea' : 'blog topic'}.`);
      return;
    }
    if (themeBasedOutputFormats.includes(blogOutputFormat) && storyThemes.length === 0) {
      setOutput(`❌ Please select a theme for your ${blogOutputFormat.toLowerCase()}.`);
      return;
    }
    const requestedComicImageCount = comicImageCount === 'custom'
      ? Number(customComicImageCount)
      : Number(comicImageCount);
    if (blogOutputFormat === 'Comic'
      && (!Number.isInteger(requestedComicImageCount)
        || requestedComicImageCount < 1
        || requestedComicImageCount > 32)) {
      setOutput('❌ Enter a whole number of images between 1 and 32.');
      return;
    }

    setBlogLoading(true);
    setRestoredHistoryEntry(null);
    setBlogImages([]);
    setBlogImagesLoading([]);
    setFocusedComicImageIndex(null);
    try {
      const selectedStoryTheme = storyThemes.join(', ');
      const result = await generateBlog(
        blogTopic,
        blogLength,
        blogStyle,
        blogOutputFormat,
        selectedStoryTheme,
        requestedComicImageCount,
      );
      const generatedContent = result.content || '';
      setOutput(generatedContent);
      const input = {
        topic: blogTopic,
        outputFormat: blogOutputFormat,
        length: blogLength,
        style: blogStyle,
        themes: storyThemes,
        customThemeDraft: customStoryTheme,
        isCustomThemeSelected,
        imageCountSelection: comicImageCount,
        customImageCount: customComicImageCount,
        requestedImageCount: requestedComicImageCount,
      };
      const imagePrompts = (result.images || []).map((image) => (
        typeof image === 'string'
          ? { prompt: image, caption: image }
          : { prompt: image?.prompt || '', caption: image?.caption || '' }
      ));
      const imageGeneration = result.images?.length
        ? generateBlogImages(result.images, setBlogImages, setBlogImagesLoading)
        : Promise.resolve([]);
      const historyEntryIdPromise = persistGeneration(
        'Blog',
        `Generate ${blogOutputFormat.toLowerCase()}`,
        input,
        generatedContent,
        blogTopic,
        { imagePrompts, imageFilesStored: false },
      );
      
      if (result.images && result.images.length > 0) {
        void Promise.all([historyEntryIdPromise, imageGeneration]).then(([entryId, images]) => {
          const successfulImages = images.filter(Boolean);
          if (entryId && successfulImages.length) {
            return persistGeneratedImages(entryId, successfulImages, generatedContent, imagePrompts);
          }
          return undefined;
        });
        if (blogOutputFormat === 'Comic') {
          const images = await imageGeneration;
          if (images.some((image) => !image)) {
            setOutput('❌ One or more comic panels could not be generated.');
          }
        }
      }
    } catch (err) {
    setOutput(`❌ ${err.message || `Error generating ${blogOutputFormat.toLowerCase()}.`}`);
    console.error(err);
    }
    setBlogLoading(false);
  };

  // Function to format blog content with markdown-like syntax
  const formatBlogContentCall = (text) => {
    return formatBlogContent(text, blogImages, setFocusedComicImageIndex);
  };
  const focusedImageLabel = blogOutputFormat === 'Comic' ? 'Page' : 'Image';
  const handleBlogOutputFormatChange = (outputFormat) => {
    setMode('Blog');
    setBlogOutputFormat(outputFormat);
    setRestoredHistoryEntry(null);
    setOutput('');
    setBlogImages([]);
    setBlogImagesLoading([]);
    setFocusedComicImageIndex(null);
  };
  const handleOpenGeneratedContentInNewTab = () => {
    const headingTitle = document.querySelector('#blogcontent h1')?.textContent?.trim();
    const title = headingTitle || blogTopic.trim() || `Generated ${blogOutputFormat}`;
    const faviconPath = `${(process.env.PUBLIC_URL || '').replace(/\/$/, '')}/favicon.png`;
    const faviconHref = new URL(faviconPath, window.location.href).href;
    handleOpenInNewTab({ title, faviconHref });
  };

  const renderHistoryDetails = () => {
    const entry = restoredHistoryEntry;
    if (!entry) return null;

    const input = entry.input || {};
    const savedOutput = typeof entry.output === 'string' ? entry.output : entry.output?.text || '';
    const format = input.outputFormat || 'Blog';
    const settings = entry.mode === 'Blog'
      ? [
        { label: 'Format', value: format },
        ...(format === 'Blog' ? [{ label: 'Style', value: input.style }] : []),
        ...(format !== 'Comic' ? [{ label: 'Length', value: input.length }] : []),
        ...(format === 'Comic' ? [{ label: 'Images', value: input.requestedImageCount }] : []),
        ...(format !== 'Blog' && Array.isArray(input.themes)
          ? [{ label: 'Theme', value: input.themes.join(', ') }]
          : []),
      ]
      : entry.mode === 'Text'
        ? [
          { label: 'Action', value: entry.action },
          { label: 'Platform', value: input.platform },
          { label: 'Tone', value: input.tone },
          { label: 'Emojis', value: input.includeEmojis === 'With' || input.withe === 'With' ? 'Yes' : 'No' },
          { label: 'Length', value: input.length },
        ]
        : [{ label: 'Model', value: input.model }];
    const prompt = entry.mode === 'Blog'
      ? input.topic
      : entry.mode === 'Image'
        ? input.prompt || input.imagePrompt
        : input.text;
    const imagePrompts = Array.isArray(entry.output?.imagePrompts) ? entry.output.imagePrompts : [];
    const imageUrls = Array.isArray(entry.output?.imageUrls) ? entry.output.imageUrls : [];
    const historyBlogImages = getHistoryBlogImages(entry);

    return (
      <section className="history-view" aria-label="Saved generation">
        <div className="history-request">
          <div className="history-kind">{entry.mode === 'Blog' ? format : entry.mode}</div>
          <h2>{entry.mode === 'Image' ? 'Image prompt' : entry.mode === 'Blog' ? 'Topic' : 'Input'}</h2>
          <p className="history-prompt">{prompt || 'No input was saved.'}</p>
          <dl className="history-settings">
            {settings.filter(({ value }) => value !== undefined && value !== '').map(({ label, value }) => (
              <div className="history-setting" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="history-result">
          <h2>Generated output</h2>
          {entry.mode === 'Image' ? (
            imageUrls.length ? (
              <div className="history-saved-images">
                {imageUrls.filter(Boolean).map((image, index) => (
                  <img key={image.path || image.url} src={image.url} alt={`Generated artwork ${index + 1}`} />
                ))}
              </div>
            ) : (
              <p className="history-output-note">
                The generated image is not available in this history entry.
              </p>
            )
          ) : entry.mode === 'Blog' ? (
            <div className="history-output">
              {formatBlogContent(savedOutput, historyBlogImages)
                || <p>No text output was saved for this generation.</p>}
            </div>
          ) : (
            <p className="history-output history-output-plain">
              {savedOutput || 'No text output was saved for this generation.'}
            </p>
          )}
          {entry.mode === 'Blog' && imagePrompts.length > 0 && imageUrls.every((image) => !image) && (
            <p className="history-output-note">Generated images could not be saved to storage.</p>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="workspace-layout" id="top">
      <ChatHistoryPanel
        entries={historyEntries}
        error={historyError}
        isLoading={historyLoading}
        isOpen={historyOpen}
        onClose={() => setHistoryOpen(false)}
        onNewChat={handleNewChat}
        onSelect={handleSelectHistoryEntry}
        selectedId={selectedHistoryId}
        userLabel={auth?.currentUser?.email}
      />
      <div className="workspace-main">
        <div className="workspace-mobile-bar">
          <button type="button" onClick={() => setHistoryOpen(true)} aria-label="Open chat history">
            <Menu size={17} />
          </button>
        </div>
        {historySaveError && (
          <p className="history-save-error" role="alert">{historySaveError}</p>
        )}
        {historySaveStatus && (
          <p className="history-save-status" role="status">{historySaveStatus}</p>
        )}
        <div className="page">
        <div className="card" role="region" aria-label="Textify">
          <header className="workspace-heading">
            <span className="workspace-heading-mark"><FileText size={21} /></span>
            <div>
              <p className="workspace-eyebrow">Textify studio</p>
              <h1>{restoredHistoryEntry ? restoredHistoryEntry.title : 'What would you like to create?'}</h1>
              <p>{restoredHistoryEntry
                ? 'Saved generation · read-only'
                : 'Start with an idea and shape it into something worth sharing.'}</p>
            </div>
          </header>

          {restoredHistoryEntry ? renderHistoryDetails() : (
            <>
          <div className="mode-toggle">
            <button
              className={blogOutputFormat === 'Blog' ? 'active' : ''}
              aria-pressed={blogOutputFormat === 'Blog'}
              onClick={() => handleBlogOutputFormatChange('Blog')}
            >
              Blog
            </button>
            <button
              className={blogOutputFormat === 'Story' ? 'active' : ''}
              aria-pressed={blogOutputFormat === 'Story'}
              onClick={() => handleBlogOutputFormatChange('Story')}
            >
              Story
            </button>
            <button
              className={blogOutputFormat === 'Comic' ? 'active' : ''}
              aria-pressed={blogOutputFormat === 'Comic'}
              onClick={() => handleBlogOutputFormatChange('Comic')}
            >
              Comic
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
                  placeholder={blogOutputFormat === 'Story' ? 'Enter your story idea...' : blogOutputFormat === 'Comic' ? 'Enter your comic idea...' : 'Enter your Topic or main idea...'}
                />

                <div className="controls blog-controls">
                  {blogOutputFormat === 'Comic' ? (
                    <div className="field">
                      <label><strong>Number of images:</strong></label>
                      <div className="choice-options" role="group" aria-label="Number of images">
                        {[
                          { value: '4', label: '4' },
                          { value: '6', label: '6' },
                          { value: '8', label: '8' },
                          { value: '12', label: '12' },
                          { value: '16', label: '16' },
                          { value: 'custom', label: 'Custom count' },
                        ].map(({ value, label }) => (
                          <button
                            key={value}
                            type="button"
                            className={`choice-option${comicImageCount === value ? ' selected' : ''}`}
                            aria-pressed={comicImageCount === value}
                            onClick={() => setComicImageCount(value)}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                      {comicImageCount === 'custom' && (
                        <input
                          className="input"
                          type="number"
                          min="1"
                          max="32"
                          step="1"
                          value={customComicImageCount}
                          onChange={(e) => setCustomComicImageCount(e.target.value)}
                          aria-label="Custom number of comic images"
                          aria-describedby="comic-image-count-help"
                        />
                      )}
                      {comicImageCount === 'custom' && (
                        <span id="comic-image-count-help" className="muted-note">
                          Enter a whole number from 1 to 32.
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="field">
                      <label><strong>Length:</strong></label>
                      <div className="choice-options" role="group" aria-label="Text length">
                        {['Short', 'Medium', 'Long', 'Detailed'].map((option) => (
                          <button
                            key={option}
                            type="button"
                            className={`choice-option${blogLength === option ? ' selected' : ''}`}
                            aria-pressed={blogLength === option}
                            onClick={() => setBlogLength(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {themeBasedOutputFormats.includes(blogOutputFormat) && (
                    <div className="field">
                      <label><strong>Theme (select at least one):</strong></label>
                      <div className="story-theme-options" role="group" aria-label={`${blogOutputFormat} themes`}>
                        {['Sci-fi', 'Thriller', 'Drama', 'Comedy', 'Action', 'Adventure'].map((theme) => (
                          <button
                            key={theme}
                            type="button"
                            className={`story-theme-option${storyThemes.includes(theme) ? ' selected' : ''}`}
                            aria-pressed={storyThemes.includes(theme)}
                            onClick={() => handleStoryThemeToggle(theme)}
                            disabled={storyThemes.length === 1 && storyThemes.includes(theme)}
                          >
                            {theme}
                          </button>
                        ))}
                        <button
                          type="button"
                          className={`story-theme-option${isCustomThemeSelected ? ' selected' : ''}`}
                          aria-pressed={isCustomThemeSelected}
                          onClick={() => setIsCustomThemeSelected((selected) => !selected)}
                        >
                          Custom
                        </button>
                        {storyThemes
                          .filter((theme) => !['Sci-fi', 'Thriller', 'Drama', 'Comedy', 'Action', 'Adventure'].includes(theme))
                          .map((theme) => (
                            <button
                              key={theme}
                              type="button"
                              className="story-theme-option selected"
                              aria-pressed="true"
                              onClick={() => handleStoryThemeToggle(theme)}
                              disabled={storyThemes.length === 1}
                              title="Click to remove this custom theme"
                            >
                              {theme}
                            </button>
                          ))}
                      </div>
                      {isCustomThemeSelected && (
                        <div className="story-custom-theme">
                          <input
                            className="input"
                            type="text"
                            value={customStoryTheme}
                            onChange={(e) => setCustomStoryTheme(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddCustomStoryTheme();
                              }
                            }}
                            placeholder="Add your own theme..."
                            aria-label={`Custom ${blogOutputFormat.toLowerCase()} theme`}
                          />
                          <button
                            type="button"
                            className="story-theme-add"
                            onClick={handleAddCustomStoryTheme}
                            disabled={!customStoryTheme.trim()}
                          >
                            Add theme
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {!themeBasedOutputFormats.includes(blogOutputFormat) && (
                    <div className="field">
                      <label><strong>Style:</strong></label>
                      <div className="choice-options" role="group" aria-label="Writing style">
                        {['Informative', 'Casual', 'Professional', 'Creative', 'Educational'].map((option) => (
                          <button
                            key={option}
                            type="button"
                            className={`choice-option${blogStyle === option ? ' selected' : ''}`}
                            aria-pressed={blogStyle === option}
                            onClick={() => setBlogStyle(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="actions">
                  <button onClick={handleGenerateBlogCall} className="btn" disabled={blogLoading}>
                    {blogLoading ? 'Generating…' : 'Generate'}
                  </button>
                </div>

                <div className="generated-content-section" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="generated-content-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    {blogOutputFormat !== 'Comic' && (
                      <h4 style={{ margin: 0, color: '#e6eefc', fontSize: '14px' }}>Generated Content</h4>
                    )}
                    {blogOutputFormat !== 'Comic' && (
                    <div className="generated-content-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-end' }}>
                      {output && (
                        <>
                          <button
                            className="copyFloating"
                            onClick={handleReadText}
                            aria-label={isSpeaking && !isPaused ? "Pause Reading" : "Read Content"}
                            title={isSpeaking && !isPaused ? "Pause reading" : "Read content aloud"}
                            style={{ position: 'static', marginBottom: 0, flex: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                          >
                            {isSpeaking && !isPaused ? <Pause size={16} /> : isPaused ? <Play size={16} /> : <Volume2 size={16} />}
                            {isSpeaking && !isPaused ? 'Pause' : isPaused ? 'Play' : 'Read'}
                          </button>
                          <button
                            className="copyFloating"
                            onClick={handleCopyText}
                            aria-label="Copy Content"
                            title="Copy blog content"
                            style={{ position: 'static', marginBottom: 0, flex: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                          >
                            <Copy size={16} />
                            {copied ? 'Copied' : 'Copy'}
                          </button>
                        </>
                      )}

                      {blogContentLoaded && formattedBlogOutputFormats.includes(blogOutputFormat) && (
                        <>
                          <button
                            onClick={handleOpenGeneratedContentInNewTab}
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
                              transition: 'transform .12s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                            onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                            onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            title="Open blog content in a new tab"
                          >
                            <ExternalLink size={16} />
                            Open in New Tab
                          </button>
                          {blogOutputFormat === 'Comic' && (
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
                                transition: 'transform .12s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                              onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                              onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                              title="Convert blog content to PDF"
                            >
                              <FileText size={16} />
                              Convert to PDF
                            </button>
                          )}
                        </>
                      )}
                    </div>
                    )}
                  </div>
                  
                </div>
                  <div id='blogcontent' style={{ margin: 0, color: 'rgba(230,238,252,0.95)', fontSize: '14px' }}>
                    {restoredHistoryEntry?.mode === 'Blog' ? (
                      formatBlogContent(
                        output,
                        getHistoryBlogImages(restoredHistoryEntry),
                      ) || <p>No text output was saved for this generation.</p>
                    ) : blogOutputFormat === 'Comic' ? null : formattedBlogOutputFormats.includes(blogOutputFormat) ? (
                      formatBlogContentCall(output) || <p style={{ color: 'rgba(230,238,252,0.7)' }}>Your generated content will appear here.</p>
                    ) : (
                      <p style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'rgba(230,238,252,0.95)', fontSize: '14px' }}>
                        {output || 'Your generated content will appear here.'}
                      </p>
                    )}
                  </div>

                {blogOutputFormat === 'Comic' && output && !restoredHistoryEntry && (
                  <p role="alert" style={{ color: '#fca5a5' }}>{output}</p>
                )}

                {(blogImages.length > 0 || blogImagesLoading.length > 0)
                  && (blogOutputFormat === 'Comic' || !formattedBlogOutputFormats.includes(blogOutputFormat)) && (
                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    {blogOutputFormat !== 'Comic' && (
                      <h4 style={{ margin: '0 0 16px 0', color: '#e6eefc', fontSize: '14px' }}>Generated Images</h4>
                    )}
                    <div className="generated-image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '16px' }}>
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
                            {blogOutputFormat !== 'Comic' && (
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
                                <p style={{ margin: 0, fontSize: '12px', color: 'rgba(230,238,252,0.7)' }}>
                                  Loading image {index + 1}...
                                </p>
                              </div>
                            )}
                          </div>
                        ) : null
                      ))}
                      {/* Show actual loaded images */}
                      {blogImages.map((img, index) => (
                        img && img.url ? (
                          <div key={index} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                            {blogOutputFormat === 'Comic' ? (
                              <>
                                <button
                                  type="button"
                                  className="comic-page-thumbnail"
                                  onClick={() => setFocusedComicImageIndex(index)}
                                  aria-label={`Enlarge Page ${index + 1}`}
                                >
                                  <img
                                    src={img.url}
                                    alt={`Page ${index + 1}`}
                                    style={{ width: '100%', height: 'auto', display: 'block', minHeight: '200px' }}
                                  />
                                </button>
                                <p className="comic-page-caption">Page {index + 1}</p>
                              </>
                            ) : (
                              <>
                                <img
                                  src={img.url}
                                  alt={img.caption || img.prompt || `Generated ${index + 1}`}
                                  style={{ width: '100%', height: 'auto', display: 'block', minHeight: '200px' }}
                                />
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
                                <p style={{ margin: 0, fontSize: '12px', color: 'rgba(230,238,252,0.7)' }}>
                                  {img.caption || img.prompt || `Image ${index + 1}`}
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
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                  }}
                                  onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                                  onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                  <Download size={14} />
                                  Download
                                </button>
                              </div>
                              </>
                            )}
                        </div>
                        ) : null
                      ))}
                    </div>
                  </div>
                )}
                {focusedComicImageIndex !== null && blogImages[focusedComicImageIndex]?.url && (
                  <div
                    className="comic-viewer-backdrop"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${focusedImageLabel} ${focusedComicImageIndex + 1}`}
                    onClick={(event) => {
                      if (event.target === event.currentTarget) setFocusedComicImageIndex(null);
                    }}
                  >
                    <button
                      type="button"
                      className="comic-viewer-close"
                      onClick={() => setFocusedComicImageIndex(null)}
                      aria-label="Close enlarged image"
                      autoFocus
                    >
                      <X size={24} />
                    </button>
                    {blogImages.length > 1 && (
                      <button
                        type="button"
                        className="comic-viewer-nav comic-viewer-previous"
                        onClick={() => setFocusedComicImageIndex((index) => getAdjacentComicImageIndex(blogImages, index, -1))}
                        aria-label={`Previous ${focusedImageLabel.toLowerCase()}`}
                      >
                        <ChevronLeft size={30} />
                      </button>
                    )}
                    <figure className="comic-viewer-content">
                      <img
                        src={blogImages[focusedComicImageIndex].url}
                        alt={`${focusedImageLabel} ${focusedComicImageIndex + 1}`}
                      />
                      <figcaption>
                        {blogOutputFormat === 'Comic'
                          ? `Page ${focusedComicImageIndex + 1}`
                          : blogImages[focusedComicImageIndex].caption || `${focusedImageLabel} ${focusedComicImageIndex + 1}`}
                      </figcaption>
                    </figure>
                    {blogImages.length > 1 && (
                      <button
                        type="button"
                        className="comic-viewer-nav comic-viewer-next"
                        onClick={() => setFocusedComicImageIndex((index) => getAdjacentComicImageIndex(blogImages, index, 1))}
                        aria-label={`Next ${focusedImageLabel.toLowerCase()}`}
                      >
                        <ChevronRight size={30} />
                      </button>
                    )}
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
                {restoredHistoryEntry?.mode === 'Image' ? (
                  <p className="history-output-note">
                    This image file was not saved. The prompt and model are available above.
                  </p>
                ) : generatedImage ? (
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
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
