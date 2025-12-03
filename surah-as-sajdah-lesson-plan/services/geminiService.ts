import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTutor = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `Context: You are a friendly and knowledgeable Islamic Education tutor for Grade 6 students. 
          The current lesson is Surah As-Sajdah verses 1-12.
          Topics include: The truth of Quran, Creation of Universe (6 days), Divine Governance, Creation of Man (Clay to Soul), Resurrection.
          
          Instructions: 
          1. Answer the student's question clearly and simply.
          2. Keep the tone encouraging and respectful.
          3. If the question is not related to Islam, Quran, or Science/Values, politely steer back to the topic.
          4. Provide the answer in both English and Arabic if possible, or the language the user asked in.
          
          Student Question: ${question}` }]
        }
      ]
    });

    return response.text || "I'm sorry, I couldn't generate an answer right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to my knowledge base. Please try again later.";
  }
};