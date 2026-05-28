import User from '../models/User.js';
import { getAIResponse } from '../services/aiService.js';

export const getPersonalizedRecommendations = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { diet, transport, goals, budgetRange } = user.preferences || {};

    const prompt = {
      role: "user",
      content: `Generate 3 personalized daily sustainability tips for this user:
      - Diet Preference: ${diet || "Flexitarian"}
      - Preferred Transport: ${transport || "Public"}
      - Sustainability Goals: ${goals?.join(", ") || "Reduce carbon footprint"}
      - Budget Range: ${budgetRange || "Medium"}

      Make tips practical, actionable, and specific to their lifestyle.
      Return in JSON format:
      {
        "tips": [
          { "title": "", "description": "", "impact": "", "category": "" }
        ]
      }`
    };

    const aiResponse = await getAIResponse([prompt]);

    let result;
    try {
      result = JSON.parse(aiResponse);
    } catch (e) {
      result = {
        tips: [
          {
            title: "Switch to Public Transport",
            description: "Use metro or bus instead of cab for daily commute",
            impact: "Save ~2.5 kg CO₂ per day",
            category: "Transport"
          },
          {
            title: "Try Vegetarian Meal",
            description: "Replace one non-veg meal with local vegetables",
            impact: "Reduce 1.8 kg CO₂",
            category: "Diet"
          }
        ]
      };
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate recommendations" });
  }
};