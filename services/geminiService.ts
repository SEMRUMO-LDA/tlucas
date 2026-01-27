
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client using the API_KEY environment variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAdvice = async (origin: string, destination: string, travelers: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User wants to go from ${origin} to ${destination} with ${travelers} people. 
      As a travel assistant for 't.lucas Transfers', suggest the best vehicle type (Sedan, Executive, or Minivan) 
      and estimate the vibe/difficulty of this route (e.g. traffic, duration). 
      Keep it short, professional, and friendly.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            vehicleType: { type: Type.STRING },
            estimatedDuration: { type: Type.STRING },
            proTip: { type: Type.STRING }
          },
          required: ["recommendation", "vehicleType", "estimatedDuration", "proTip"]
        }
      }
    });

    // Access the text property directly from the response object.
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};