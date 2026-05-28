// import { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       await login(formData.email, formData.password);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950 flex items-center justify-center p-4">
//       <div className="glass w-full max-w-md p-8 rounded-3xl shadow-2xl">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">EcoDecide</h1>
//           <p className="text-emerald-400">Login to continue</p>
//         </div>

//         {error && (
//           <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl mb-6 text-center">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-white font-semibold rounded-2xl transition-all text-lg"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="text-center text-gray-400 mt-6">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-emerald-400 hover:underline font-medium">
//             Register Now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await login(
        formData.email,
        formData.password
      );

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Background Blur */}
      <div className="login-blur blur-left"></div>
      <div className="login-blur blur-right"></div>

      {/* Login Card */}
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          🌱
        </div>

        {/* Heading */}
        <h1 className="login-title">
          EcoDecide
        </h1>

        <p className="login-subtitle">
          Login to continue your green
          journey
        </p>

        {/* Error */}
        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password:
                    e.target.value,
                })
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="login-btn"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="register-text">
          Don't have an account?

          <Link
            to="/register"
            className="register-link"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;