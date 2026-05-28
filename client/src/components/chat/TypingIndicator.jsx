const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-white/10 px-5 py-3 rounded-3xl rounded-tl-none flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
        <span className="text-emerald-400 text-sm">Eco AI is thinking...</span>
      </div>
    </div>
  );
};

export default TypingIndicator;