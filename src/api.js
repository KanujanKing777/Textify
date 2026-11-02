// api.js
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.

export async function formatText(text, platform, tone, withe, length) {
    const ai = new GoogleGenAI({apiKey: "AIzaSyCRjrpXf3Ar08M24Rcmryj2y6H-1mciHuc"});


  const prompt = `Format this text for ${platform} in a ${tone} tone ${withe} emojis in a ${length} length and you may include new lines if needed:\n\n${text}\nI want only the rough text as output not anything else`;
 const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text || '';
}

export async function generateText(text, platform, tone, withe) {
    const ai = new GoogleGenAI({apiKey: "AIzaSyCRjrpXf3Ar08M24Rcmryj2y6H-1mciHuc"});

  const prompt = `${text}\nI want only the generated text as output not anything else`;

 const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text || '';
}

export async function generateBlog(topic, length, style) {
    const ai = new GoogleGenAI({apiKey: "AIzaSyCRjrpXf3Ar08M24Rcmryj2y6H-1mciHuc"});

  const prompt = `Write a ${length} blog post about "${topic}" in a ${style} style. Make it engaging and well-structured with an introduction, body paragraphs, and conclusion. I want only the blog content as output not anything else`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const blogContent = response.text || '';

  const prompt2 = `I am preparing for a blog article using this content: ${blogContent}

Now cut this into meaningful chunks and also I need to add some images in between, so add prompts for images too. Image prompts should be as detailed as possible. For every image, also provide a concise, meaningful caption on exactly one line, no longer than 200 characters.

Also I need headings/bullets/heading2,3,4/paragraph etc...

Please prepare a JSON type output like:
{
  "1": {"type": "heading", "content": "text", "level": 1-4},
  "2": {"type": "image", "prompt": "detailed image description", "caption": "concise one-line caption under 200 characters"},
  "3": {"type": "paragraph", "content": "text"},
  "4": {"type": "bullet", "content": "text"},

}

Please return only the raw JSON as the output`;

  const response2 = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt2,
  });

  try {
    const result = response2.text
  .replace(/^```json\s*/, '')
  .replace(/\s*```$/, '');
    const jsonResponse = JSON.parse(result || '{}');
    let formattedText = '';
    const imagePrompts = [];

    // Iterate through the JSON object and format it
    for (const key in jsonResponse) {
      const item = jsonResponse[key];
      console.log('Processing item:', item);
      if (item.type === 'heading') {
        const level = item.level || 2;
        const heading = '#'.repeat(level) + ' ' + item.content;
        formattedText += heading + '\n\n';
      } else if (item.type === 'paragraph') {
        formattedText += item.content + '\n\n';
       } else if (item.type === 'image') {
        const prompt = item.prompt || item.content || '';
        const caption = item.caption || prompt;
        imagePrompts.push({ prompt, caption });
        formattedText += `[Image: ${imagePrompts.length}]\n\n`;

      } else if (item.type === 'bullet' || item.type === 'list') {
        formattedText += '• ' + (item.content || item.text) + '\n';
      }
    }

    return {
      content: formattedText.trim(),
      images: imagePrompts
    };
  } catch (error) {
    console.error('Error parsing blog JSON:', error);
    // If parsing fails, return the raw text
    return {
      content: response2.text || 'Failed to generate blog content',
      images: []
    };
  }
}

