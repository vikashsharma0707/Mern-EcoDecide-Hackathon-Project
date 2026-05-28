const ChatBubble = ({ message, isAI }) => {
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] px-5 py-3 rounded-3xl ${
        isAI 
          ? 'bg-white/10 text-white rounded-tl-none' 
          : 'bg-emerald-500 text-white rounded-tr-none'
      }`}>
        <p className="leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;