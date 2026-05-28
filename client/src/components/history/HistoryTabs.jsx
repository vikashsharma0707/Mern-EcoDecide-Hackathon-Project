// import { useState } from 'react';

// const HistoryTabs = ({ activeTab, setActiveTab }) => {
//   const tabs = [
//     { id: 'all', label: 'All Activity' },
//     { id: 'chat', label: 'AI Chats' },
//     { id: 'activity', label: 'Logged Activities' },
//     { id: 'compare', label: 'Comparisons' },
//   ];

//   return (
//     <div className="flex gap-2 mb-8 border-b border-white/10">
//       {tabs.map(tab => (
//         <button
//           key={tab.id}
//           onClick={() => setActiveTab(tab.id)}
//           className={`px-8 py-3 rounded-t-2xl font-medium transition-all ${
//             activeTab === tab.id 
//               ? 'bg-emerald-500 text-white' 
//               : 'text-gray-400 hover:text-white'
//           }`}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default HistoryTabs;



import { useState } from "react";
import "./HistoryTabs.css";

const HistoryTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "all", label: "All Activity" },
    { id: "chat", label: "AI Chats" },
    { id: "activity", label: "Logged Activities" },
    { id: "compare", label: "Comparisons" },
  ];

  return (
    <div className="history-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`history-tab-btn ${
            activeTab === tab.id ? "history-tab-active" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default HistoryTabs;