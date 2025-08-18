// api.js
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.

export async function formatText(text, platform, tone, withe) {
    const ai = new GoogleGenAI({apiKey: "AIzaSyBmgKHSHSyc2NEMFXW0fZvALIeQwd36HPc"});


  const prompt = `Format this text for ${platform} in a ${tone} tone ${withe} emojis and you may include new lines if needed:\n\n${text}\nI want only the rough text as output not anything else`;

 const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text || '';
}
