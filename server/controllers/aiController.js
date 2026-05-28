// import Chat from '../models/Chat.js';
// import { getAIResponse } from '../services/aiService.js';

// export const sendMessage = async (req, res) => {
//   try {
//     const { message, chatId } = req.body;
//     const userId = req.user.id;

//     if (!message?.trim()) {
//       return res.status(400).json({ message: "Message is required" });
//     }

//     let chat = chatId 
//       ? await Chat.findOne({ _id: chatId, userId })
//       : null;

//     if (!chat) {
//       chat = await Chat.create({
//         userId,
//         messages: [],
//         title: message.substring(0, 60)
//       });
//     }

//     // Add user message
//     chat.messages.push({ role: 'user', content: message });
//     await chat.save();

//     // Get AI response
//     const aiResponse = await getAIResponse(chat.messages);

//     // Add AI message
//     chat.messages.push({ role: 'assistant', content: aiResponse });
//     await chat.save();

//     res.json({
//       chatId: chat._id,
//       messages: chat.messages,
//       aiResponse
//     });

//   } catch (error) {
//     console.error("Chat Error:", error.message);
//     res.status(500).json({ 
//       message: error.message || "Failed to get AI response" 
//     });
//   }
// };

// // Get Chat History
// export const getChatHistory = async (req, res) => {
//   try {
//     const chats = await Chat.find({ userId: req.user.id })
//       .sort({ createdAt: -1 })
//       .select('title createdAt _id')
//       .limit(20);

//     res.json(chats);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

import Chat from '../models/Chat.js';
import { getAIResponse } from '../services/aiService.js';
import { searchKnowledgeBase } from '../services/ragService.js';

export const sendMessage = async (req, res) => {
  try {
    const { message, chatId } = req.body;
    const userId = req.user.id;

    if (!message?.trim()) {
      return res.status(400).json({ message: "Message is required" });
    }

    let chat = chatId 
      ? await Chat.findOne({ _id: chatId, userId })
      : null;

    if (!chat) {
      chat = await Chat.create({
        userId,
        messages: [],
        title: message.substring(0, 60)
      });
    }

    // Add user message
    chat.messages.push({ role: 'user', content: message });
    await chat.save();

    // === RAG: Get relevant context ===
    const ragContext = searchKnowledgeBase(message);

    // Enhanced AI Prompt with RAG
    const enhancedMessages = [
      {
        role: "system",
        content: `You are EcoDecide, a sustainability expert.
        Use the following knowledge to give accurate answers:\n${ragContext || "No specific data found."}
        If no relevant data, answer normally but honestly.`
      },
      ...chat.messages
    ];

    const aiResponse = await getAIResponse(enhancedMessages);

    // Add AI response
    chat.messages.push({ role: 'assistant', content: aiResponse });
    await chat.save();

    res.json({
      chatId: chat._id,
      messages: chat.messages,
      aiResponse,
      usedRag: !!ragContext
    });

  } catch (error) {
    console.error("Chat Error:", error.message);
    res.status(500).json({ message: error.message || "Failed to get AI response" });
  }
};


export const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .select('title createdAt _id')
      .limit(20);

    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};