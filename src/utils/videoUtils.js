import { apiPostJson } from '../apiClient';

export const generateVideo = async (videoPrompt, setGeneratedVideo, setOutput, setVideoLoading) => {
  if (!videoPrompt.trim()) {
    setOutput('❌ Please enter a video search phrase.');
    return;
  }

  setVideoLoading(true);
  setGeneratedVideo('');

  try {
    const result = await apiPostJson('/api/video/search', { query: videoPrompt.trim() });
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
