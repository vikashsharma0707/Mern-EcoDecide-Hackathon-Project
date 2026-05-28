// import { useState } from 'react';
// import Sidebar from '../../components/dashboard/Sidebar';
// import API from '../../services/api';
// import ProductInput from '../../components/compare/ProductInput';

// const Compare = () => {
//   const [products, setProducts] = useState(['', '', '']);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleProductChange = (index, value) => {
//     const newProducts = [...products];
//     newProducts[index] = value;
//     setProducts(newProducts);
//   };

//   const handleCompare = async () => {
//     const filledProducts = products.filter(p => p.trim().length > 0);
//     if (filledProducts.length < 2) {
//       return alert("Please enter at least 2 products to compare");
//     }

//     setLoading(true);
//     try {
//       const { data } = await API.post('/compare', { products: filledProducts });
//       setResult(data);
//     } catch (err) {
//       alert("Comparison failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950">
//       <Sidebar />

//       <div className="flex-1 ml-72 p-8">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-5xl font-bold text-white mb-3">Product Comparator 🌱</h1>
//           <p className="text-emerald-400 text-xl mb-10">Compare products and choose the most sustainable option</p>

//           {/* Input Section */}
//           <div className="glass p-8 rounded-3xl mb-10">
//             <h2 className="text-2xl text-white mb-8">Enter Products to Compare</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {products.map((product, index) => (
//                 <ProductInput
//                   key={index}
//                   index={index}
//                   value={product}
//                   onChange={handleProductChange}
//                   placeholder={`Product ${index + 1} (e.g. iPhone 15)`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={handleCompare}
//               disabled={loading}
//               className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 py-5 rounded-3xl text-white font-semibold text-xl transition-all disabled:opacity-70"
//             >
//               {loading ? "AI is Comparing..." : "Compare Sustainability"}
//             </button>
//           </div>

//           {/* Result Section */}
//           {result && (
//             <div className="glass p-10 rounded-3xl">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold text-white">Comparison Result</h2>
//                 {result.winner && (
//                   <div className="bg-emerald-500 text-white px-6 py-2 rounded-2xl font-medium">🏆 {result.winner} Wins</div>
//                 )}
//               </div>

//               <p className="text-emerald-400 text-lg mb-10">{result.summary}</p>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {result.products?.map((product, i) => (
//                   <div
//                     key={i}
//                     className={`p-8 rounded-3xl transition-all ${product.name === result.winner ? 'ring-4 ring-emerald-400 bg-emerald-500/10' : 'glass'}`}
//                   >
//                     <h3 className="text-xl font-bold text-white mb-6">{product.name}</h3>
                    
//                     <div className="text-center mb-8">
//                       <div className="text-6xl font-bold text-emerald-400">{product.score}</div>
//                       <p className="text-gray-400">Sustainability Score</p>
//                     </div>

//                     <div className="space-y-4 text-sm">
//                       <div>
//                         <span className="text-emerald-400">✅ Strengths:</span>
//                         <ul className="list-disc pl-5 text-gray-300 mt-1">
//                           {product.strengths?.map((s, idx) => <li key={idx}>{s}</li>)}
//                         </ul>
//                       </div>
//                       <div>
//                         <span className="text-red-400">⚠️ Weaknesses:</span>
//                         <ul className="list-disc pl-5 text-gray-300 mt-1">
//                           {product.weaknesses?.map((w, idx) => <li key={idx}>{w}</li>)}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Compare;

import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import API from "../../services/api";
import ProductInput from "../../components/compare/ProductInput";
import "./Compare.css";

const Compare = () => {
  const [products, setProducts] = useState(["", "", ""]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleProductChange = (index, value) => {
    const newProducts = [...products];
    newProducts[index] = value;
    setProducts(newProducts);
  };

  const handleCompare = async () => {
    const filledProducts = products.filter((p) => p.trim().length > 0);

    if (filledProducts.length < 2) {
      return alert("Please enter at least 2 products");
    }

    setLoading(true);

    try {
      const { data } = await API.post("/compare", {
        products: filledProducts,
      });

      setResult(data);
    } catch (err) {
      alert("Comparison failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compare-page">
      <Sidebar />

      <div className="compare-main">
        {/* Header */}
        <div className="compare-header">
          <div>
            <h1 className="compare-title">Comparism</h1>
            <p className="compare-subtitle">
              Smart Sustainability Product Comparison
            </p>
          </div>

          <div className="compare-icons">
            <button className="compare-icon-btn">⚙</button>
            <button className="compare-icon-btn">👤</button>
          </div>
        </div>

        {/* Input Section */}
        <div className="compare-input-section">
          <div className="compare-input-grid">
            {products.map((product, index) => (
              <ProductInput
                key={index}
                index={index}
                value={product}
                onChange={handleProductChange}
                placeholder={`Enter Product ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="compare-btn"
            onClick={handleCompare}
            disabled={loading}
          >
            {loading ? "Comparing..." : "Compare Sustainability"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="result-grid">
            {result.products?.map((product, i) => (
              <div
                key={i}
                className={`result-card ${
                  product.name === result.winner ? "winner-card" : ""
                }`}
              >
                {product.name === result.winner && (
                  <div className="winner-badge">Winner</div>
                )}

                <div className="product-image-box">
                  🌱
                </div>

                <h2 className="product-name">{product.name}</h2>

                {/* Score Circle */}
                <div className="score-ring">
                  <div className="score-inner">
                    <h1>{product.score}</h1>
                    <span>Score</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="stats-section">
                  <div className="stat-row">
                    <span>Sustainability</span>
                    <span>92%</span>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>

                  <h1 className="eco-number">
                    {product.score}M
                  </h1>
                </div>

                {/* Radar Fake */}
                <div className="radar-box">
                  <div className="radar-circle"></div>
                </div>

                {/* Strengths */}
                <div className="strength-section">
                  <h4>✅ Strengths</h4>

                  <ul>
                    {product.strengths?.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="weakness-section">
                  <h4>⚠ Weaknesses</h4>

                  <ul>
                    {product.weaknesses?.map((w, idx) => (
                      <li key={idx}>{w}</li>
                    ))}
                  </ul>
                </div>

                {product.name === result.winner && (
                  <button className="winner-btn">
                    Winner
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;