// import { useState } from 'react';
// import Sidebar from '../../components/dashboard/Sidebar';
// import API from '../../services/api';

// const CommuteOptimizer = () => {
//   const [distance, setDistance] = useState('');
//   const [city, setCity] = useState('Pimpri');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleOptimize = async () => {
//     if (!distance) return alert("Please enter distance");

//     setLoading(true);
//     try {
//       const { data } = await API.post('/commute/optimize', { distance, city });
//       setResult(data);
//     } catch (err) {
//       alert("Failed to get results");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950">
//       <Sidebar />

//       <div className="flex-1 ml-72 p-8">
//         <h1 className="text-5xl font-bold text-white mb-3">Smart Commute Optimizer 🚲</h1>
//         <p className="text-emerald-400 text-xl mb-10">Find the most sustainable way to reach your destination</p>

//         <div className="glass p-8 rounded-3xl max-w-2xl">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="text-gray-400 block mb-2">Distance (in km)</label>
//               <input
//                 type="number"
//                 value={distance}
//                 onChange={(e) => setDistance(e.target.value)}
//                 placeholder="10"
//                 className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white text-xl"
//               />
//             </div>
//             <div>
//               <label className="text-gray-400 block mb-2">City</label>
//               <input
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white"
//               />
//             </div>
//           </div>

//           <button
//             onClick={handleOptimize}
//             disabled={loading}
//             className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 py-5 rounded-3xl text-white font-semibold text-xl"
//           >
//             {loading ? "Finding Best Options..." : "Find Sustainable Options"}
//           </button>
//         </div>

//         {result && (
//           <div className="mt-10">
//             <h2 className="text-2xl text-white mb-6">Recommended Options</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {result.options?.map((option, i) => (
//                 <div key={i} className={`glass p-8 rounded-3xl ${option.mode === result.bestOption ? 'ring-4 ring-emerald-400' : ''}`}>
//                   <div className="flex justify-between">
//                     <h3 className="text-2xl font-bold text-white">{option.mode}</h3>
//                     {option.mode === result.bestOption && <span className="text-emerald-400">🏆 Best</span>}
//                   </div>
//                   <div className="mt-6 space-y-3 text-lg">
//                     <p><span className="text-gray-400">Carbon:</span> <span className="text-emerald-400">{option.carbon} kg</span></p>
//                     <p><span className="text-gray-400">Time:</span> {option.time}</p>
//                     <p><span className="text-gray-400">Cost:</span> {option.cost}</p>
//                   </div>
//                   <p className="mt-6 text-gray-300">{option.recommendation}</p>
//                 </div>
//               ))}
//             </div>
//             <p className="mt-8 text-emerald-400 text-center text-lg">{result.summary}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommuteOptimizer;



import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import API from "../../services/api";
import "./CommuteOptimizer.css";

const CommuteOptimizer = () => {
  const [distance, setDistance] = useState("");
  const [city, setCity] = useState("Pimpri");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    if (!distance) return alert("Please enter distance");

    setLoading(true);

    try {
      const { data } = await API.post("/commute/optimize", {
        distance,
        city,
      });

      setResult(data);
    } catch (err) {
      alert("Failed to get results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="commute-page">
      <Sidebar />

      <div className="commute-main">
        <h1 className="commute-heading">
          Smart Commute Optimizer 🚲
        </h1>

        <p className="commute-subheading">
          Find the most sustainable way to reach your destination
        </p>

        {/* FORM CARD */}

        <div className="commute-card">
          <div className="commute-grid">
            <div className="input-group">
              <label>Distance (in km)</label>

              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="10"
                className="commute-input"
              />
            </div>

            <div className="input-group">
              <label>City</label>

              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="commute-input"
              />
            </div>
          </div>

          <button
            onClick={handleOptimize}
            disabled={loading}
            className="optimize-btn"
          >
            {loading
              ? "Finding Best Options..."
              : "Find Sustainable Options"}
          </button>
        </div>

        {/* RESULT */}

        {result && (
          <div className="result-wrapper">
            <h2 className="result-title">
              Recommended Options
            </h2>

            <div className="result-grid">
              {result.options?.map((option, i) => (
                <div
                  key={i}
                  className={`option-card ${
                    option.mode === result.bestOption
                      ? "best-card"
                      : ""
                  }`}
                >
                  {option.mode === result.bestOption && (
                    <div className="best-badge">
                      🏆 BEST
                    </div>
                  )}

                  <h3 className="option-mode">
                    {option.mode}
                  </h3>

                  <div className="option-details">
                    <div className="option-row">
                      <span className="option-label">
                        Carbon
                      </span>

                      <span className="option-value green-value">
                        {option.carbon} kg
                      </span>
                    </div>

                    <div className="option-row">
                      <span className="option-label">
                        Time
                      </span>

                      <span className="option-value">
                        {option.time}
                      </span>
                    </div>

                    <div className="option-row">
                      <span className="option-label">
                        Cost
                      </span>

                      <span className="option-value">
                        {option.cost}
                      </span>
                    </div>
                  </div>

                  <p className="option-recommendation">
                    {option.recommendation}
                  </p>
                </div>
              ))}
            </div>

            <p className="result-summary">
              {result.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommuteOptimizer;