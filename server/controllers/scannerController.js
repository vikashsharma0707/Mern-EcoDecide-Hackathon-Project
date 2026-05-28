// import { getAIResponse } from '../services/aiService.js';

// export const scanProduct = async (req, res) => {
//   try {
//     const { originalname, path } = req.file;
//     const productName = req.body.productName || "Unknown Product";

//     const prompt = {
//       role: "user",
//       content: `Analyze this product for sustainability: ${productName}.
//       Give:
//       - Sustainability Score (out of 100)
//       - Carbon Footprint
//       - Key Pros & Cons
//       - Better eco-friendly alternatives
//       - Recycling/Disposal advice
      
//       Respond in JSON format:
//       {
//         "productName": "",
//         "ecoScore": 0,
//         "carbonFootprint": "",
//         "strengths": [],
//         "weaknesses": [],
//         "alternatives": [],
//         "summary": ""
//       }`
//     };

//     const aiResponse = await getAIResponse([prompt]);

//     let result;
//     try {
//       result = JSON.parse(aiResponse);
//     } catch (e) {
//       result = {
//         productName,
//         ecoScore: 65,
//         carbonFootprint: "Medium",
//         strengths: ["Popular brand"],
//         weaknesses: ["Packaging waste"],
//         alternatives: ["Local sustainable brand"],
//         summary: aiResponse.substring(0, 300)
//       };
//     }

//     res.json({
//       success: true,
//       imageUrl: `/uploads/${originalname}`,
//       analysis: result
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to analyze product" });
//   }
// };


import { getAIResponse } from '../services/aiService.js';
import fs from 'fs';
import path from 'path';

export const scanProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const { originalname, path: filePath } = req.file;
    const productName = req.body.productName || originalname;

    // Ensure uploads folder exists
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const prompt = {
      role: "user",
      content: `Analyze this product image for sustainability: ${productName}. 
      Give detailed eco analysis with score, strengths, weaknesses and alternatives.`
    };

    const aiResponse = await getAIResponse([prompt]);

    let result;
    try {
      result = JSON.parse(aiResponse);
    } catch (e) {
      result = {
        productName,
        ecoScore: 65,
        carbonFootprint: "Medium",
        strengths: ["Popular brand"],
        weaknesses: ["May contain plastic packaging"],
        alternatives: ["Look for eco-friendly local brands"],
        summary: aiResponse.substring(0, 400)
      };
    }

    res.json({
      success: true,
      imageUrl: `/uploads/${originalname}`,
      analysis: result
    });

  } catch (error) {
    console.error("Scanner Error:", error.message);
    res.status(500).json({ message: "Failed to analyze image. Please try again." });
  }
};