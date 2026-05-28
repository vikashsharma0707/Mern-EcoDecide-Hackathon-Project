// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950 overflow-hidden">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-8 py-6">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl">
//             🌱
//           </div>
//           <h1 className="text-3xl font-bold text-white">EcoDecide</h1>
//         </div>

//         <div className="flex items-center gap-6">
//           <Link
//             to="/login"
//             className="text-white hover:text-emerald-400 transition-colors font-medium"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2.5 rounded-2xl text-white font-semibold transition-all"
//           >
//             Get Started
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
//             Make Every Decision<br />
//             <span className="text-emerald-400">Sustainably</span>
//           </h1>

//           <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
//             Your personal AI-powered sustainability assistant. Track carbon, compare products, 
//             get eco-friendly recommendations, and reduce your impact daily.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/register"
//               className="bg-emerald-500 hover:bg-emerald-600 px-10 py-4 rounded-2xl text-lg font-semibold text-white transition-all hover:scale-105"
//             >
//               Start Your Green Journey
//             </Link>
            
//             <Link
//               to="/login"
//               className="border border-white/50 hover:border-white px-10 py-4 rounded-2xl text-lg font-semibold text-white transition-all hover:scale-105"
//             >
//               Login
//             </Link>
//           </div>
//         </motion.div>

//         {/* Features Preview */}
//         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
//           {[
//             { icon: "🤖", title: "AI Chat Assistant", desc: "Ask anything about sustainable living" },
//             { icon: "📊", title: "Carbon Tracker", desc: "Track your daily eco impact" },
//             { icon: "🔍", title: "Smart Product Compare", desc: "Find the greenest options" }
//           ].map((feature, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 + i * 0.1 }}
//               className="glass p-8 rounded-3xl text-left hover:scale-105 transition-all"
//             >
//               <div className="text-5xl mb-4">{feature.icon}</div>
//               <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
//               <p className="text-gray-400">{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Chat Assistant",
      desc: "Ask anything about sustainable living",
    },
    {
      icon: "📊",
      title: "Carbon Tracker",
      desc: "Track your daily eco impact",
    },
    {
      icon: "🔍",
      title: "Smart Product Compare",
      desc: "Find the greenest options",
    },
  ];

  return (
    <div className="home-page">
      {/* Background Blur */}
      <div className="home-blur blur-left"></div>
      <div className="home-blur blur-right"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-icon">🌱</div>

          <h1 className="logo-text">
            EcoDecide
          </h1>
        </div>

        <div className="nav-buttons">
          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-section">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h1 className="hero-title">
            Make Every Decision
            <br />

            <span>Sustainably</span>
          </h1>

          <p className="hero-text">
            Your personal AI-powered
            sustainability assistant.
            Track carbon, compare
            products, get eco-friendly
            recommendations, and reduce
            your impact daily.
          </p>

          <div className="hero-buttons">
            <Link
              to="/register"
              className="hero-start-btn"
            >
              Start Your Green Journey
            </Link>

            <Link
              to="/login"
              className="hero-login-btn"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Features */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2 + index * 0.2,
              }}
              className="feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3 className="feature-title">
                {feature.title}
              </h3>

              <p className="feature-desc">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;