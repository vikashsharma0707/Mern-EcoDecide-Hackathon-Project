import { getAIResponse } from '../services/aiService.js';

export const optimizeCommute = async (req, res) => {
  try {
    const { distance, city, transportMode } = req.body;

    const prompt = {
      role: "user",
      content: `User wants to travel ${distance} km in ${city || "Indian city"}.
      Suggest best commute options considering carbon emission, time, cost and health.
      Compare: Car, Metro/Bus, Electric Bike, Bike, Walking, EV Car.
      Return in JSON format:
      {
        "options": [
          { "mode": "", "carbon": 0, "time": "", "cost": "", "ecoScore": 0, "recommendation": "" }
        ],
        "bestOption": "",
        "totalCarbonSaved": 0,
        "summary": ""
      }`
    };

    const aiResponse = await getAIResponse([prompt]);
    
    let result;
    try {
      result = JSON.parse(aiResponse);
    } catch (e) {
      result = {
        options: [
          { mode: "Metro", carbon: 0.8, time: "25 min", cost: "₹30", ecoScore: 92, recommendation: "Best overall" },
          { mode: "EV Bike", carbon: 0.3, time: "35 min", cost: "₹50", ecoScore: 95, recommendation: "Most eco-friendly" }
        ],
        bestOption: "Metro",
        totalCarbonSaved: 4.2,
        summary: "Metro is the best sustainable choice for this distance."
      };
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to optimize commute" });
  }
};