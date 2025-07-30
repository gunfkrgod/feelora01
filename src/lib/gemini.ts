const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyCiWHaacgsIgIzUkdRmwsdiuUm2EG05HgI";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export const generateCounselorResponse = async (userMessage: string, conversationHistory: string[] = []): Promise<string> => {
  try {
    const systemPrompt = `You are a compassionate, professional AI wellness counselor. Your role is to:
- Provide empathetic, supportive responses
- Offer practical coping strategies when appropriate
- Maintain professional boundaries
- Encourage professional help when needed
- Keep responses conversational and warm
- Focus on mental health and emotional well-being
- Never give medical advice or diagnose conditions
- Always prioritize user safety and well-being

Respond as a caring counselor would, with empathy and practical support. Keep responses under 200 words.`;

    const conversationContext = conversationHistory.length > 0 
      ? `Previous conversation context: ${conversationHistory.slice(-3).join(' | ')}\n\n`
      : '';

    const prompt = `${systemPrompt}\n\n${conversationContext}User: ${userMessage}\n\nCounselor:`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 300,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text.trim();
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    // Fallback to a supportive response if API fails
    return "I'm here to listen and support you. I'm experiencing some technical difficulties right now, but I want you to know that your feelings are valid and important. Would you like to try sharing again, or would you prefer to connect with one of our human counselors?";
  }
}; 