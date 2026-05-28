// import { useState, useEffect } from 'react';
// import Sidebar from '../../components/dashboard/Sidebar';
// import DailyTipCard from '../../components/recommendations/DailyTipCard';
// import API from '../../services/api';

// const PersonalizedRecommendations = () => {
//   const [tips, setTips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchRecommendations();
//   }, []);

//   const fetchRecommendations = async () => {
//     try {
//       const { data } = await API.get('/recommendations');
//       setTips(data.tips || []);
//     } catch (err) {
//       console.error(err);
//       // Fallback tips
//       setTips([
//         { title: "Use Reusable Bottle", description: "Carry your own bottle instead of buying plastic ones", impact: "Save 0.5kg plastic/week", category: "Daily Habit" },
//         { title: "Walk Short Distances", description: "Try walking for distances under 2km", impact: "Improve health + reduce emissions", category: "Transport" }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950">
//       <Sidebar />

//       <div className="flex-1 ml-72 p-8">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-5xl font-bold text-white mb-3">Your Personalized Tips 🌱</h1>
//           <p className="text-emerald-400 text-xl mb-10">Tailored for your diet, travel habits & goals</p>

//           {loading ? (
//             <p className="text-gray-400 text-center py-20">Generating personalized tips...</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {tips.map((tip, index) => (
//                 <DailyTipCard key={index} tip={tip} />
//               ))}
//             </div>
//           )}

//           <button
//             onClick={fetchRecommendations}
//             className="mt-10 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl text-white transition-all"
//           >
//             Refresh Recommendations
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalizedRecommendations;


import { useState, useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import DailyTipCard from "../../components/recommendations/DailyTipCard";
import API from "../../services/api";
import "./PersonalizedRecommendations.css";

const PersonalizedRecommendations = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    setLoading(true);

    try {
      const { data } = await API.get("/recommendations");

      setTips(
        data.tips || [
          {
            title: "Use Reusable Bottle",
            description:
              "Carry your own bottle instead of buying plastic bottles every day.",
            impact: "Save 0.5kg plastic/week",
            category: "Daily Habit",
          },
        ]
      );
    } catch (err) {
      console.error("Failed to load recommendations:", err);

      // Fallback Data
      setTips([
        {
          title: "Use Reusable Bottle",
          description:
            "Carry your own bottle instead of buying plastic ones daily.",
          impact: "Save 0.5kg plastic/week",
          category: "Daily Habit",
        },
        {
          title: "Walk Short Distances",
          description:
            "Try walking for distances under 2 km instead of using a vehicle.",
          impact: "Reduce CO₂ emissions",
          category: "Transport",
        },
        {
          title: "Vegetarian Meal Once Daily",
          description:
            "Replacing one meat-based meal with a vegetarian meal can significantly lower your carbon footprint.",
          impact: "Save 2kg CO₂/week",
          category: "Diet",
        },
        {
          title: "Switch Off Unused Devices",
          description:
            "Turn off lights, fans, chargers and electronics when not in use.",
          impact: "Reduce electricity usage",
          category: "Energy",
        },
        {
          title: "Use Public Transport",
          description:
            "Choose metro, bus or shared rides whenever possible.",
          impact: "Up to 70% lower emissions",
          category: "Transport",
        },
        {
          title: "Recycle Household Waste",
          description:
            "Separate dry and wet waste for better recycling efficiency.",
          impact: "Less landfill waste",
          category: "Recycling",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendations-page">
      <Sidebar />

      <div className="recommendations-main">
        <div className="recommendations-header">
          <h1 className="recommendations-title">
            AI Personalized Recommendations 🌱
          </h1>

          <p className="recommendations-subtitle">
            Tailored for your diet, travel habits & sustainability goals
          </p>
        </div>

        {loading ? (
          <div className="loading-box">
            <h2>🤖 Generating Personalized Tips...</h2>
          </div>
        ) : (
          <>
            <div className="tips-grid">
              {tips.map((tip, index) => (
                <DailyTipCard key={index} tip={tip} />
              ))}
            </div>

            <button
              onClick={fetchRecommendations}
              className="refresh-btn"
            >
              🔄 Refresh Recommendations
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;