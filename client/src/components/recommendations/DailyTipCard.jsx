// const DailyTipCard = ({ tip }) => {
//   return (
//     <div className="glass p-6 rounded-3xl hover:scale-[1.02] transition-all border border-white/10">
//       <div className="flex justify-between items-start mb-4">
//         <h3 className="text-xl font-semibold text-white">{tip.title}</h3>
//         <span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
//           {tip.category}
//         </span>
//       </div>
      
//       <p className="text-gray-300 leading-relaxed mb-6">{tip.description}</p>
      
//       <div className="text-emerald-400 font-medium text-sm flex items-center gap-2">
//         🌍 {tip.impact}
//       </div>
//     </div>
//   );
// };

// export default DailyTipCard;


import "./DailyTipCard.css";

const DailyTipCard = ({ tip }) => {
  return (
    <div className="tip-card">
      <div className="tip-card-header">
        <h3 className="tip-title">{tip.title}</h3>

        <span className="tip-category">
          {tip.category}
        </span>
      </div>

      <p className="tip-description">
        {tip.description}
      </p>

      <div className="tip-impact">
        🌍 {tip.impact}
      </div>
    </div>
  );
};

export default DailyTipCard;