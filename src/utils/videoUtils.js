const PEXELS_API_URL = 'https://api.pexels.com/videos/search';

export const generateVideo = async (videoPrompt, setGeneratedVideo, setOutput, setVideoLoading) => {
  if (!videoPrompt.trim()) {
    setOutput('❌ Please enter a video search phrase.');
    return;
  }

  const apiKey = process.env.REACT_APP_PEXELS_API_KEY;
  if (!apiKey) {
    setOutput('❌ Add REACT_APP_PEXELS_API_KEY to your .env file.');
    return;
  }

  setVideoLoading(true);
  setGeneratedVideo('');

  try {
    const response = await fetch(
      `${PEXELS_API_URL}?query=${encodeURIComponent(videoPrompt.trim())}&per_page=1&orientation=landscape`,
      { headers: { Authorization: apiKey } }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Pexels returned ${response.status}: ${errorText || 'video search failed'}`);
    }

    const result = await response.json();
    const video = result.videos?.[0];
    const videoFile = video?.video_files
      ?.filter((file) => file.file_type === 'video/mp4')
      ?.sort((first, second) => (second.width || 0) - (first.width || 0))[0];

    if (!videoFile?.link) {
      throw new Error('No matching video was found on Pexels.');
    }

    setGeneratedVideo(videoFile.link);
    setOutput(`✅ Video found on Pexels${video.url ? `. Source: ${video.url}` : '.'}`);
  } catch (error) {
    console.error(error);
    setOutput(`❌ ${error.message || 'Video search failed.'}`);
  } finally {
    setVideoLoading(false);
  }
};

export const downloadVideo = async (generatedVideo, setOutput) => {
  if (!generatedVideo) return;

  try {
    const response = await fetch(generatedVideo);
    if (!response.ok) throw new Error('Failed to fetch video.');
    const videoBlob = await response.blob();
    const videoUrl = URL.createObjectURL(videoBlob);
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `pexels-video-${Date.now()}.mp4`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(videoUrl);
    setOutput('✅ Video downloaded!');
  } catch (error) {
    console.error(error);
    setOutput('❌ Failed to download video.');
  }
};
