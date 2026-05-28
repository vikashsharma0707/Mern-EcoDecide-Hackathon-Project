import axios from 'axios';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export const getAIResponse = async (messages) => {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY missing in .env");
    }

    const systemPrompt = {
      role: "system",
      content: `You are EcoDecide, a helpful sustainability assistant. 
      Give practical, eco-friendly advice. Use simple language. Mix Hindi & English if needed.`
    };

    const response = await axios.post(OPENROUTER_API_URL, {
      model: process.env.MODEL || "deepseek/deepseek-v4-flash:free",
      messages: [systemPrompt, ...messages],
      temperature: 0.7,
      max_tokens: 600
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'EcoDecide',
        'Content-Type': 'application/json'
      }
    });

    // Safe response handling
    if (response.data?.choices?.[0]?.message?.content) {
      return response.data.choices[0].message.content.trim();
    } 
    else if (response.data?.error) {
      console.error("OpenRouter API Error:", response.data.error);
      throw new Error(response.data.error.message || "AI service error");
    }

    throw new Error("Invalid response from AI");

  } catch (error) {
    console.error("OpenRouter Full Error:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      throw new Error("Invalid API Key. Check your .env file.");
    }
    if (error.response?.status === 429) {
      throw new Error("Too many requests. Please wait a moment.");
    }
    if (error.response?.status === 404) {
      throw new Error("Model not found. Try another free model.");
    }

    throw new Error("AI is not responding right now. Please try again.");
  }
};