const StreakCounter = ({ streak = 7 }) => {
  return (
    <div className="glass p-8 rounded-3xl text-center">
      <div className="text-6xl mb-4">🔥</div>
      <div className="text-5xl font-bold text-orange-400">{streak}</div>
      <p className="text-white text-xl mt-2">Day Streak</p>
      <p className="text-emerald-400 text-sm mt-1">Keep the momentum going!</p>
    </div>
  );
};

export default StreakCounter;