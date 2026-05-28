const EcoScoreCard = ({ score = 68 }) => {
  const percentage = Math.min(score, 100);

  return (
    <div className="glass p-8 rounded-3xl text-center">
      <h3 className="text-emerald-400 text-lg mb-2">Your Eco Score</h3>
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#1f2937" strokeWidth="12" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#4ade80"
            strokeWidth="12"
            strokeDasharray={`${percentage * 3.27} 327`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div className="text-7xl font-bold text-white">{percentage}</div>
            <div className="text-emerald-400 -mt-2">/100</div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mt-4">Keep going! You're doing great 🌍</p>
    </div>
  );
};

export default EcoScoreCard;