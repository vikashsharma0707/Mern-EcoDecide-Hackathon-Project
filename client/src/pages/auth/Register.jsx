// import { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { register } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     setLoading(true);
//     setError('');

//     try {
//       await register({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password
//       });
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950 flex items-center justify-center p-4">
//       <div className="glass w-full max-w-md p-8 rounded-3xl shadow-2xl">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">Join EcoDecide</h1>
//           <p className="text-emerald-400">Create your sustainable journey</p>
//         </div>

//         {error && (
//           <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl mb-6 text-center">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-white font-semibold rounded-2xl transition-all text-lg"
//           >
//             {loading ? 'Creating Account...' : 'Create Account'}
//           </button>
//         </form>

//         <p className="text-center text-gray-400 mt-6">
//           Already have an account?{' '}
//           <Link to="/login" className="text-emerald-400 hover:underline font-medium">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;



import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const { register } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return setError(
        "Passwords do not match"
      );
    }

    setLoading(true);
    setError("");

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      {/* Background Blur */}
      <div className="register-blur blur-left"></div>
      <div className="register-blur blur-right"></div>

      {/* Register Card */}
      <div className="register-card">
        {/* Logo */}
        <div className="register-logo">
          🌱
        </div>

        {/* Heading */}
        <h1 className="register-title">
          Join EcoDecide
        </h1>

        <p className="register-subtitle">
          Create your sustainable
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
          className="register-form"
        >
          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
            />
          </div>

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
              placeholder="Create password"
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

          <div className="input-group">
            <label>
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              value={
                formData.confirmPassword
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword:
                    e.target.value,
                })
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="register-btn"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="login-text">
          Already have an account?

          <Link
            to="/login"
            className="login-link"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;