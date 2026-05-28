// // import { useState, useEffect } from 'react';
// // import Sidebar from '../../components/dashboard/Sidebar';
// // import HistoryTabs from '../../components/history/HistoryTabs';
// // import API from '../../services/api';

// // const History = () => {
// //   const [activeTab, setActiveTab] = useState('all');
// //   const [chatHistory, setChatHistory] = useState([]);
// //   const [activities, setActivities] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetchAllHistory();
// //   }, []);

// //   const fetchAllHistory = async () => {
// //     try {
// //       // Fetch Activities
// //       const activityRes = await API.get('/activities');
// //       setActivities(activityRes.data);

// //       // Fetch Chat History
// //       const chatRes = await API.get('/ai/history');
// //       setChatHistory(chatRes.data);
// //     } catch (err) {
// //       console.error("Failed to load history", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950">
// //       <Sidebar />

// //       <div className="flex-1 ml-72 p-8">
// //         <h1 className="text-5xl font-bold text-white mb-2">Your History 📖</h1>
// //         <p className="text-emerald-400 text-xl mb-10">All your sustainability activities and conversations</p>

// //         <HistoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

// //         <div className="space-y-6">
// //           {/* Chat History */}
// //           {(activeTab === 'all' || activeTab === 'chat') && (
// //             <div>
// //               <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
// //                 💬 AI Chat History
// //               </h2>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {chatHistory.length > 0 ? (
// //                   chatHistory.map((chat, i) => (
// //                     <div key={i} className="glass p-6 rounded-3xl hover:scale-[1.02] transition-all">
// //                       <div className="flex justify-between items-start mb-4">
// //                         <h3 className="font-semibold text-white text-lg">{chat.title}</h3>
// //                         <span className="text-xs text-gray-400">
// //                           {new Date(chat.createdAt).toLocaleDateString()}
// //                         </span>
// //                       </div>
// //                       <p className="text-gray-400 line-clamp-2 text-sm">
// //                         {chat.messages?.[0]?.content || "No messages"}
// //                       </p>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p className="text-gray-400">No chat history yet.</p>
// //                 )}
// //               </div>
// //             </div>
// //           )}

// //           {/* Activity History */}
// //           {(activeTab === 'all' || activeTab === 'activity') && (
// //             <div>
// //               <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
// //                 📌 Activity Log
// //               </h2>
// //               <div className="space-y-4">
// //                 {activities.length > 0 ? (
// //                   activities.map((activity, i) => (
// //                     <div key={i} className="glass p-6 rounded-3xl flex justify-between items-center">
// //                       <div>
// //                         <div className="text-white font-medium">{activity.description}</div>
// //                         <div className="text-emerald-400 text-sm">
// //                           {new Date(activity.date).toLocaleDateString()}
// //                         </div>
// //                       </div>
// //                       <div className="text-right">
// //                         <div className="text-emerald-400 font-bold">+{activity.carbonSaved} kg CO₂</div>
// //                         <div className="text-xs text-gray-400">Saved</div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p className="text-gray-400">No activities logged yet.</p>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default History;




// import { useState, useEffect } from "react";
// import Sidebar from "../../components/dashboard/Sidebar";
// import HistoryTabs from "../../components/history/HistoryTabs";
// import API from "../../services/api";
// import "./History.css";

// const History = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAllHistory();
//   }, []);

//   const fetchAllHistory = async () => {
//     try {
//       const activityRes = await API.get("/activities");
//       setActivities(activityRes.data);

//       const chatRes = await API.get("/ai/history");
//       setChatHistory(chatRes.data);
//     } catch (err) {
//       console.error("Failed to load history", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="history-page">
//       <Sidebar />

//       <div className="history-main">
//         {/* Header */}
//         <div className="history-header">
//           <div>
//             <h1 className="history-title">Your History</h1>
//             <p className="history-subtitle">
//               Sustainability activities & AI conversations
//             </p>
//           </div>

//           <div className="history-badge">
//             🌱 Eco Journey
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="history-tabs-wrapper">
//           <HistoryTabs
//             activeTab={activeTab}
//             setActiveTab={setActiveTab}
//           />
//         </div>

//         {/* Chat History */}
//         {(activeTab === "all" || activeTab === "chat") && (
//           <div className="history-section">
//             <div className="section-header">
//               <h2>💬 AI Chat History</h2>
//             </div>

//             <div className="chat-history-grid">
//               {chatHistory.length > 0 ? (
//                 chatHistory.map((chat, i) => (
//                   <div key={i} className="history-card">
//                     <div className="history-card-top">
//                       <h3>{chat.title}</h3>

//                       <span>
//                         {new Date(chat.createdAt).toLocaleDateString()}
//                       </span>
//                     </div>

//                     <p className="history-message">
//                       {chat.messages?.[0]?.content ||
//                         "No messages found"}
//                     </p>

//                     <div className="history-card-bottom">
//                       <div className="history-tag">
//                         Eco AI
//                       </div>

//                       <button className="view-btn">
//                         View
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="empty-box">
//                   <div className="empty-icon">💬</div>
//                   <p>No chat history found</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Activity History */}
//         {(activeTab === "all" || activeTab === "activity") && (
//           <div className="history-section">
//             <div className="section-header">
//               <h2>📌 Activity Log</h2>
//             </div>

//             <div className="activity-list">
//               {activities.length > 0 ? (
//                 activities.map((activity, i) => (
//                   <div key={i} className="activity-card">
//                     <div className="activity-left">
//                       <div className="activity-icon">
//                         🌿
//                       </div>

//                       <div>
//                         <h3>{activity.description}</h3>

//                         <p>
//                           {new Date(
//                             activity.date
//                           ).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="activity-right">
//                       <h2>
//                         +{activity.carbonSaved} kg
//                       </h2>

//                       <span>CO₂ Saved</span>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="empty-box">
//                   <div className="empty-icon">📌</div>
//                   <p>No activities found</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default History;



import { useState, useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import HistoryTabs from "../../components/history/HistoryTabs";
import API from "../../services/api";
import "./History.css"

const History = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [chatHistory, setChatHistory] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllHistory();
  }, []);

  const fetchAllHistory = async () => {
    try {
      setLoading(true);

      // Fetch Activities
      const activityRes = await API.get("/activities");
      setActivities(activityRes.data || []);

      // Fetch Chat History
      const chatRes = await API.get("/ai/history");
      setChatHistory(chatRes.data || []);
    } catch (err) {
      console.error("Failed to load history", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="history-page">
      <Sidebar />

      <div className="history-main">
        {/* Header */}
        <div className="history-header">
          <div>
            <h1 className="history-title">Your History</h1>
            <p className="history-subtitle">
              Sustainability activities & AI conversations
            </p>
          </div>

          <div className="history-badge">
            🌱 Eco Journey
          </div>
        </div>

        {/* Tabs */}
        <div className="history-tabs-wrapper">
          <HistoryTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Chat History */}
        {(activeTab === "all" || activeTab === "chat") && (
          <div className="history-section">
            <div className="section-header">
              <h2>💬 AI Chat History</h2>
            </div>

            <div className="chat-history-grid">
              {loading ? (
                <p className="text-gray-400">Loading chat history...</p>
              ) : chatHistory.length > 0 ? (
                chatHistory.map((chat, i) => (
                  <div key={i} className="history-card">
                    <div className="history-card-top">
                      <h3>{chat.title || "New Conversation"}</h3>
                      <span>
                        {new Date(chat.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="history-message">
                      {chat.messages?.[0]?.content || "No messages found"}
                    </p>

                    <div className="history-card-bottom">
                      <div className="history-tag">
                        Eco AI
                      </div>

                      <button className="view-btn">
                        View
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-box">
                  <div className="empty-icon">💬</div>
                  <p>No chat history found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Activity History */}
        {(activeTab === "all" || activeTab === "activity") && (
          <div className="history-section">
            <div className="section-header">
              <h2>📌 Activity Log</h2>
            </div>

            <div className="activity-list">
              {loading ? (
                <p className="text-gray-400">Loading activities...</p>
              ) : activities.length > 0 ? (
                activities.map((activity, i) => (
                  <div key={i} className="activity-card">
                    <div className="activity-left">
                      <div className="activity-icon">
                        🌿
                      </div>

                      <div>
                        <h3>{activity.description}</h3>
                        <p>
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="activity-right">
                      <h2>
                        +{activity.carbonSaved} kg
                      </h2>
                      <span>CO₂ Saved</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-box">
                  <div className="empty-icon">📌</div>
                  <p>No activities found</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;