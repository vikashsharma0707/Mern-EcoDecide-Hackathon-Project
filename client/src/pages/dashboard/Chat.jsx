// // import { useState, useEffect, useRef } from 'react';
// // import API from '../../services/api';
// // import ChatBubble from '../../components/chat/ChatBubble';
// // import TypingIndicator from '../../components/chat/TypingIndicator';

// // const Chat = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [input, setInput] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [chatId, setChatId] = useState(null);

// //   const messagesEndRef = useRef(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messages]);

// //   const sendMessage = async () => {
// //     if (!input.trim() || loading) return;

// //     const userMessage = input.trim();
// //     setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
// //     setInput('');
// //     setLoading(true);

// //     try {
// //       const { data } = await API.post('/ai/chat', {
// //         message: userMessage,
// //         chatId
// //       });

// //       setChatId(data.chatId);
// //       setMessages(data.messages);
// //     } catch (error) {
// //       alert("Failed to get response");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col h-screen bg-green-950">
// //       {/* Header */}
// //       <div className="bg-black/30 border-b border-white/10 p-4 flex items-center gap-3">
// //         <div className="w-9 h-9 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl">🌱</div>
// //         <div>
// //           <h2 className="text-white font-semibold">Eco AI Assistant</h2>
// //           <p className="text-emerald-400 text-sm">Always here to help you go green</p>
// //         </div>
// //       </div>

// //       {/* Chat Messages */}
// //       <div className="flex-1 overflow-y-auto p-6 space-y-4">
// //         {messages.length === 0 && (
// //           <div className="text-center mt-20">
// //             <div className="text-6xl mb-4">🌍</div>
// //             <h3 className="text-2xl text-white">Ask me anything about sustainability</h3>
// //             <p className="text-gray-400 mt-2">Try: "Best eco phone under 30000?"</p>
// //           </div>
// //         )}

// //         {messages.map((msg, index) => (
// //           <ChatBubble 
// //             key={index} 
// //             message={msg.content} 
// //             isAI={msg.role === 'assistant'} 
// //           />
// //         ))}

// //         {loading && <TypingIndicator />}
// //         <div ref={messagesEndRef} />
// //       </div>

// //       {/* Input Area */}
// //       <div className="p-4 border-t border-white/10 bg-black/30">
// //         <div className="flex gap-3 max-w-4xl mx-auto">
// //           <input
// //             type="text"
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
// //             placeholder="Ask about eco-friendly choices..."
// //             className="flex-1 bg-white/10 border border-white/20 rounded-3xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
// //           />
// //           <button
// //             onClick={sendMessage}
// //             disabled={loading || !input.trim()}
// //             className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 px-8 rounded-3xl text-white font-medium transition-all"
// //           >
// //             Send
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chat;




// import { useState, useEffect, useRef } from "react";
// import "./Chat.css";
// import API from "../../services/api";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [chatId, setChatId] = useState(null);

//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;

//     const userMessage = input.trim();

//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "user",
//         content: userMessage,
//       },
//     ]);

//     setInput("");
//     setLoading(true);

//     try {
//       const { data } = await API.post("/ai/chat", {
//         message: userMessage,
//         chatId,
//       });

//       setChatId(data.chatId);
//       setMessages(data.messages);
//     } catch (error) {
//       alert("Failed to get response");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="chat-page">
//       {/* Background Blur */}
//       <div className="bg-blur blur-1"></div>
//       <div className="bg-blur blur-2"></div>

//       {/* Main Chat Card */}
//       <div className="chat-card">
//         {/* Header */}
//         <div className="chat-header">
//           <div className="chat-logo">🌱</div>

//           <div>
//             <h1 className="chat-title">EcoChat</h1>
//             <p className="chat-subtitle">
//               Smart Eco AI Assistant
//             </p>
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div className="chat-messages">
//           {messages.length === 0 && (
//             <>
//               {/* User */}
//               <div className="chat-label user-label">
//                 Ask
//               </div>

//               <div className="message-box user-message">
//                 How can I reduce my carbon footprint?
//               </div>

//               {/* Bot */}
//               <div className="chat-label bot-label">
//                 Bot
//               </div>

//               <div className="message-box bot-message">
//                 Consider using public transport or
//                 carpooling. Also, reduce energy use at
//                 home.
//               </div>

//               <div className="typing-text">
//                 Typing..
//               </div>
//             </>
//           )}

//           {/* Dynamic Messages */}
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`message-wrapper ${
//                 msg.role === "assistant"
//                   ? "bot-wrapper"
//                   : "user-wrapper"
//               }`}
//             >
//               <div
//                 className={`chat-label ${
//                   msg.role === "assistant"
//                     ? "bot-label"
//                     : "user-label"
//                 }`}
//               >
//                 {msg.role === "assistant"
//                   ? "Bot"
//                   : "You"}
//               </div>

//               <div
//                 className={`message-box ${
//                   msg.role === "assistant"
//                     ? "bot-message"
//                     : "user-message"
//                 }`}
//               >
//                 {msg.content}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="typing-text">
//               Typing..
//             </div>
//           )}

//           <div ref={messagesEndRef}></div>
//         </div>

//         {/* Input */}
//         <div className="chat-input-area">
//           <input
//             type="text"
//             placeholder="Ask eco questions..."
//             value={input}
//             onChange={(e) =>
//               setInput(e.target.value)
//             }
//             onKeyDown={(e) =>
//               e.key === "Enter" && sendMessage()
//             }
//             className="chat-input"
//           />

//           <button
//             onClick={sendMessage}
//             disabled={loading}
//             className="send-btn"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;






import { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import "./Chat.css";
import API from "../../services/api";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatId, setChatId] = useState(null);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const { data } = await API.post("/ai/chat", {
        message: userMessage,
        chatId,
      });

      setChatId(data.chatId);
      setMessages(data.messages);
    } catch (error) {
      alert("Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="chat-content">

        <div className="bg-blur blur-1"></div>
        <div className="bg-blur blur-2"></div>

        <div className="chat-card">

          <div className="chat-header">
            <div className="chat-logo">🌱</div>

            <div>
              <h1 className="chat-title">EcoChat</h1>
              <p className="chat-subtitle">
                Smart Eco AI Assistant
              </p>
            </div>
          </div>

          <div className="chat-messages">

            {messages.length === 0 && (
              <>
                <div className="chat-label user-label">
                  Ask
                </div>

                <div className="message-box user-message">
                  How can I reduce my carbon footprint?
                </div>

                <div className="chat-label bot-label">
                  Bot
                </div>

                <div className="message-box bot-message">
                  Consider using public transport or
                  carpooling. Also, reduce energy use at
                  home.
                </div>
              </>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-wrapper ${
                  msg.role === "assistant"
                    ? "bot-wrapper"
                    : "user-wrapper"
                }`}
              >
                <div
                  className={`chat-label ${
                    msg.role === "assistant"
                      ? "bot-label"
                      : "user-label"
                  }`}
                >
                  {msg.role === "assistant" ? "Bot" : "You"}
                </div>

                <div
                  className={`message-box ${
                    msg.role === "assistant"
                      ? "bot-message"
                      : "user-message"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="typing-text">
                Typing...
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ask eco questions..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="chat-input"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="send-btn"
            >
              Send
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Chat;