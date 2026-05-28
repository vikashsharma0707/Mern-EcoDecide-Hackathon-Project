// import { useState } from 'react';
// import Sidebar from '../../components/dashboard/Sidebar';
// import API from '../../services/api';

// const Scanner = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [analysis, setAnalysis] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [productName, setProductName] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleScan = async () => {
//     if (!selectedFile) return alert("Please upload an image");

//     setLoading(true);
//     const formData = new FormData();
//     formData.append('productImage', selectedFile);
//     if (productName) formData.append('productName', productName);

//     try {
//       const { data } = await API.post('/scanner', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setAnalysis(data.analysis);
//     } catch (err) {
//       alert("Failed to analyze product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 to-green-950">
//       <Sidebar />

//       <div className="flex-1 ml-72 p-8">
//         <h1 className="text-5xl font-bold text-white mb-10">Product Scanner 🔍</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Upload Section */}
//           <div className="glass p-8 rounded-3xl">
//             <h2 className="text-2xl text-white mb-6">Upload Product Image</h2>

//             <div className="border-2 border-dashed border-white/30 rounded-3xl p-12 text-center hover:border-emerald-400 transition-all">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="productImage"
//               />
//               <label htmlFor="productImage" className="cursor-pointer">
//                 <div className="text-6xl mb-4">📸</div>
//                 <p className="text-white text-lg">Click to upload product image</p>
//                 <p className="text-gray-400 text-sm mt-2">PNG, JPG up to 5MB</p>
//               </label>
//             </div>

//             {preview && (
//               <div className="mt-6">
//                 <img src={preview} alt="Preview" className="w-full rounded-2xl" />
//               </div>
//             )}

//             <input
//               type="text"
//               placeholder="Product Name (optional)"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               className="w-full mt-6 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white"
//             />

//             <button
//               onClick={handleScan}
//               disabled={loading || !preview}
//               className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 py-4 rounded-2xl text-white font-semibold text-lg disabled:bg-gray-600"
//             >
//               {loading ? "Analyzing with AI..." : "Analyze Sustainability"}
//             </button>
//           </div>

//           {/* Analysis Result */}
//           <div className="glass p-8 rounded-3xl">
//             {analysis ? (
//               <div>
//                 <h2 className="text-2xl text-emerald-400 mb-6">Analysis Result</h2>
//                 <div className="text-center mb-8">
//                   <div className="text-7xl font-bold text-white">{analysis.ecoScore}</div>
//                   <p className="text-emerald-400">Sustainability Score</p>
//                 </div>

//                 <p className="text-white text-lg mb-6">{analysis.summary}</p>

//                 <div className="space-y-6">
//                   <div>
//                     <h4 className="text-emerald-400 mb-2">✅ Strengths</h4>
//                     <ul className="list-disc pl-5 text-gray-300">
//                       {analysis.strengths?.map((s, i) => <li key={i}>{s}</li>)}
//                     </ul>
//                   </div>

//                   <div>
//                     <h4 className="text-red-400 mb-2">⚠️ Weaknesses</h4>
//                     <ul className="list-disc pl-5 text-gray-300">
//                       {analysis.weaknesses?.map((w, i) => <li key={i}>{w}</li>)}
//                     </ul>
//                   </div>

//                   <div>
//                     <h4 className="text-sky-400 mb-2">🌱 Better Alternatives</h4>
//                     <ul className="list-disc pl-5 text-gray-300">
//                       {analysis.alternatives?.map((a, i) => <li key={i}>{a}</li>)}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="h-full flex items-center justify-center text-center">
//                 <div>
//                   <div className="text-6xl mb-4">📷</div>
//                   <p className="text-gray-400">Upload an image to get AI sustainability analysis</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scanner;



import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import API from "../../services/api";
import "./Scanner.css";

const Scanner = () => {
  const [selectedFile, setSelectedFile] =
    useState(null);

  const [preview, setPreview] =
    useState(null);

  const [analysis, setAnalysis] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [productName, setProductName] =
    useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);

      setPreview(
        URL.createObjectURL(file)
      );
    }
  };

  const handleScan = async () => {
    if (!selectedFile) {
      return alert(
        "Please upload image"
      );
    }

    setLoading(true);

    const formData =
      new FormData();

    formData.append(
      "productImage",
      selectedFile
    );

    if (productName) {
      formData.append(
        "productName",
        productName
      );
    }

    try {
      const { data } =
        await API.post(
          "/scanner",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      setAnalysis(data.analysis);
    } catch (err) {
      alert(
        "Failed to analyze product"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scanner-page">
      <Sidebar />

      <div className="scanner-main">
        <div className="scanner-container">
          {/* LEFT */}
          <div className="upload-card">
            <div className="upload-box">
              <input
                type="file"
                accept="image/*"
                id="productImage"
                hidden
                onChange={
                  handleFileChange
                }
              />

              <label
                htmlFor="productImage"
                className="upload-label"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="preview-image"
                  />
                ) : (
                  <>
                    <div className="upload-icon">
                      🧴
                    </div>

                    <p>
                      Drop your product
                      image here or
                      click to upload
                    </p>
                  </>
                )}
              </label>
            </div>

            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) =>
                setProductName(
                  e.target.value
                )
              }
              className="product-input"
            />

            <button
              onClick={handleScan}
              disabled={
                loading || !preview
              }
              className="scan-btn"
            >
              {loading
                ? "Analyzing..."
                : "Analyze Product"}
            </button>
          </div>

          {/* RIGHT */}
          <div className="analysis-card">
            <h1 className="analysis-title">
              AI Analysis Result
            </h1>

            <div className="analysis-divider"></div>

            {analysis ? (
              <>
                <div className="analysis-top">
                  <div className="profile-circle">
                    👤
                  </div>

                  <div>
                    <h2 className="eco-score-text">
                      Eco-Score
                    </h2>

                    <div className="eco-score">
                      <span>
                        {
                          analysis.ecoScore
                        }
                      </span>

                      <small>
                        /10
                      </small>
                    </div>
                  </div>
                </div>

                <div className="analysis-details">
                  <div className="detail-item">
                    <p>
                      Material
                      Score
                    </p>

                    <h3>8.2</h3>
                  </div>

                  <div className="detail-item">
                    <p>
                      Recyclability
                    </p>

                    <h3>70%</h3>
                  </div>

                  <div className="detail-item">
                    <p>
                      Carbon
                      Footprint
                    </p>

                    <h3>
                      120 kg CO2e
                    </h3>
                  </div>
                </div>

                <div className="summary-box">
                  <h4>Summary</h4>

                  <p>
                    {
                      analysis.summary
                    }
                  </p>
                </div>
              </>
            ) : (
              <div className="empty-analysis">
                <div className="empty-icon">
                  📷
                </div>

                <p>
                  Upload image to get
                  AI sustainability
                  analysis
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;