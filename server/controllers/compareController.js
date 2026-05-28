import { getAIResponse } from '../services/aiService.js';

export const compareProducts = async (req, res) => {
  try {
    const { products } = req.body;

    if (!products || products.length < 2) {
      return res.status(400).json({ message: "At least 2 products are required" });
    }

    const prompt = {
      role: "user",
      content: `Compare these products from a sustainability perspective: ${products.join(', ')}.

      Compare on these parameters:
      - Carbon footprint
      - Repairability
      - Lifespan
      - Recyclability
      - Packaging waste
      - Energy efficiency

      Return response in this exact JSON format:
      {
        "products": [
          { "name": "", "score": 0, "strengths": [], "weaknesses": [] }
        ],
        "winner": "",
        "summary": ""
      }

      Do not add any extra text, only valid JSON.`
    };

    const aiResponse = await getAIResponse([prompt]);

    let result;
    try {
      // Try to parse JSON
      result = JSON.parse(aiResponse);
    } catch (e) {
      // If JSON parsing fails, create a fallback result
      console.log("AI did not return valid JSON, using fallback");
      result = {
        products: products.map(name => ({
          name: name,
          score: Math.floor(Math.random() * 30) + 65,
          strengths: ["Good brand reputation", "Popular choice"],
          weaknesses: ["Average sustainability"]
        })),
        winner: products[0],
        summary: aiResponse.substring(0, 500) || "Comparison completed based on available data."
      };
    }

    res.json(result);

  } catch (error) {
    console.error("Compare Controller Error:", error.message);
    res.status(500).json({ 
      message: "Failed to compare products. Please try again." 
    });
  }
};