import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables. AI features may not work.");
    }
    client = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-ui-demo' });
  }
  return client;
};

export const generateServiceRecommendation = async (businessDescription: string): Promise<string> => {
  const ai = getClient();
  
  // Graceful fallback if no API key is present during development/preview
  if (!process.env.API_KEY) {
     return new Promise(resolve => setTimeout(() => {
        resolve("Based on your description, we highly recommend starting with our **Social Strategy** package to build brand awareness, followed by **Workflow Automation** to streamline your operations as you scale. (Note: Real AI response requires a valid API Key).");
     }, 1500));
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze the following business description and recommend the best Wagihni Agency services (Copywriting, Social Strategy, SEO Optimization, Workflow Automation). Keep it professional, persuasive, and under 100 words. Address the user directly. Business Description: ${businessDescription}`,
      config: {
        systemInstruction: "You are WagihniAI, a senior consultant for Wagihni Agency. Your tone is expert, modern, and concise. You help potential clients understand which of our 4 core services fit their needs.",
        temperature: 0.7,
      },
    });

    return response.text || "We couldn't generate a recommendation at this moment. Please contact us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We encountered an error analyzing your business. Please reach out to our team directly via the contact form.";
  }
};