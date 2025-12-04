import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTutor = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `Context: You are a friendly and knowledgeable Islamic Education tutor for Grade 6 students in the UAE. 
          The current lesson is "Attributes of Believers" (Surah As-Sajdah Verses 13-22).
          
          Key Topics:
          1. Believers' Attributes: Prostration when reminded, Night Prayer (Tahajjud/Forsaking beds), Charity, Fear & Hope.
          2. The Reward: "Comfort of eyes" (Joy) hidden for them in Paradise.
          3. The Comparison: Believers are not equal to the Fasiq (Defiantly Disobedient).
          4. Vocabulary: Tatajafa (Forsake beds), Ma'wa (Refuge), Nuzul (Hospitality).
          5. Punishment: The disobedient taste "nearer punishment" (worldly issues) before the greater one, to help them return (repent).

          Instructions: 
          1. Answer the student's question clearly and simply.
          2. Keep the tone encouraging and respectful.
          3. Connect answers to the importance of prayer and good deeds.
          4. If the question is not related to Islam, History, or Values, politely steer back to the topic.
          5. Provide the answer in both English and Arabic if possible, or the language the user asked in.
          
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