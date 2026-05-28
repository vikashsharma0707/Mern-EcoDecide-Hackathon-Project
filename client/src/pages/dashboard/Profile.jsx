// import { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import Sidebar from '../../components/dashboard/Sidebar';
// import ProfileHeader from '../../components/profile/ProfileHeader';
// import API from '../../services/api';

// const Profile = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [preferences, setPreferences] = useState({
//     diet: 'flexitarian',
//     transport: 'public',
//     goals: ['Reduce plastic', 'Lower carbon footprint'],
//     budgetRange: 'medium'
//   });
//   const [editing, setEditing] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handlePreferenceChange = (key, value) => {
//     setPreferences(prev => ({ ...prev, [key]: value }));
//   };

//   const savePreferences = async () => {
//     setLoading(true);
//     try {
//       // You can add API call to update user preferences
//       alert("Preferences saved successfully! 🌱");
//       setEditing(false);
//     } catch (err) {
//       alert("Failed to save preferences");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950">
//       <Sidebar />

//       <div className="flex-1 ml-72 p-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl font-bold text-white mb-10">My Profile 👤</h1>

//           <ProfileHeader user={user} />

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
//             <div className="glass p-6 rounded-3xl text-center">
//               <p className="text-gray-400">Total CO₂ Saved</p>
//               <p className="text-5xl font-bold text-emerald-400 mt-3">184 kg</p>
//             </div>
//             <div className="glass p-6 rounded-3xl text-center">
//               <p className="text-gray-400">Activities Logged</p>
//               <p className="text-5xl font-bold text-white mt-3">47</p>
//             </div>
//             <div className="glass p-6 rounded-3xl text-center">
//               <p className="text-gray-400">Current Streak</p>
//               <p className="text-5xl font-bold text-orange-400 mt-3">🔥 12</p>
//             </div>
//           </div>

//           {/* Preferences Section */}
//           <div className="glass p-8 rounded-3xl">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-3xl font-semibold text-white">Your Preferences</h2>
//               <button
//                 onClick={() => setEditing(!editing)}
//                 className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-2xl text-white transition-all"
//               >
//                 {editing ? 'Cancel' : 'Edit'}
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Diet Preference */}
//               <div>
//                 <label className="text-gray-400 block mb-3">Diet Preference</label>
//                 <select
//                   value={preferences.diet}
//                   onChange={(e) => handlePreferenceChange('diet', e.target.value)}
//                   disabled={!editing}
//                   className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white"
//                 >
//                   <option value="vegan">Vegan</option>
//                   <option value="vegetarian">Vegetarian</option>
//                   <option value="flexitarian">Flexitarian</option>
//                   <option value="non-veg">Non-Vegetarian</option>
//                 </select>
//               </div>

//               {/* Transport Preference */}
//               <div>
//                 <label className="text-gray-400 block mb-3">Preferred Transport</label>
//                 <select
//                   value={preferences.transport}
//                   onChange={(e) => handlePreferenceChange('transport', e.target.value)}
//                   disabled={!editing}
//                   className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white"
//                 >
//                   <option value="public">Public Transport</option>
//                   <option value="bike">Bicycle / Walking</option>
//                   <option value="ev">Electric Vehicle</option>
//                   <option value="car">Car</option>
//                 </select>
//               </div>

//               {/* Budget Range */}
//               <div>
//                 <label className="text-gray-400 block mb-3">Budget Range</label>
//                 <select
//                   value={preferences.budgetRange}
//                   onChange={(e) => handlePreferenceChange('budgetRange', e.target.value)}
//                   disabled={!editing}
//                   className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white"
//                 >
//                   <option value="low">Low Budget</option>
//                   <option value="medium">Medium Budget</option>
//                   <option value="high">Premium</option>
//                 </select>
//               </div>

//               {/* Goals */}
//               <div>
//                 <label className="text-gray-400 block mb-3">Main Goals</label>
//                 <div className="flex flex-wrap gap-3">
//                   {preferences.goals.map((goal, i) => (
//                     <div key={i} className="bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-2xl text-sm">
//                       {goal}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {editing && (
//               <button
//                 onClick={savePreferences}
//                 disabled={loading}
//                 className="mt-8 w-full bg-emerald-500 hover:bg-emerald-600 py-4 rounded-2xl text-white font-semibold"
//               >
//                 {loading ? "Saving..." : "Save Preferences"}
//               </button>
//             )}
//           </div>

//           {/* Account Actions */}
//           <div className="mt-10 flex gap-4">
//             <button
//               onClick={logout}
//               className="flex-1 py-4 border border-red-500/50 text-red-400 hover:bg-red-500/10 rounded-2xl font-medium transition-all"
//             >
//               Logout
//             </button>
//             <button className="flex-1 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-medium transition-all">
//               Change Password
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/dashboard/Sidebar";
import ProfileHeader from "../../components/profile/ProfileHeader";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  const [preferences, setPreferences] = useState({
    diet: "flexitarian",
    transport: "public",
    goals: ["Reduce Plastic", "Lower Carbon Footprint"],
    budgetRange: "medium",
  });

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePreferenceChange = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const savePreferences = async () => {
    setLoading(true);

    try {
      // API Call Here

      setTimeout(() => {
        alert("🌱 Preferences Saved Successfully");
        setEditing(false);
        setLoading(false);
      }, 1000);
    } catch (err) {
      alert("Failed to save preferences");
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <Sidebar />

      <div className="profile-content">
        {/* Page Heading */}
        <h1 className="profile-title">My Profile 👤</h1>
        <p className="profile-subtitle">
          Manage your sustainability journey and preferences
        </p>

        {/* Profile Header */}
        <div className="glass-card">
          <ProfileHeader user={user} />
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-title">Total CO₂ Saved</p>
            <p className="stat-value green">184 kg</p>
          </div>

          <div className="stat-card">
            <p className="stat-title">Activities Logged</p>
            <p className="stat-value white">47</p>
          </div>

          <div className="stat-card">
            <p className="stat-title">Current Streak</p>
            <p className="stat-value orange">🔥 12</p>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="preferences-card">
          <div className="preferences-header">
            <h2>Your Preferences</h2>

            <button
              onClick={() => setEditing(!editing)}
              className="edit-btn"
            >
              {editing ? "Cancel" : "Edit"}
            </button>
          </div>

          <div className="preferences-grid">
            {/* Diet */}
            <div className="field-group">
              <label>Diet Preference</label>

              <select
                value={preferences.diet}
                disabled={!editing}
                onChange={(e) =>
                  handlePreferenceChange("diet", e.target.value)
                }
              >
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="flexitarian">Flexitarian</option>
                <option value="non-veg">Non-Vegetarian</option>
              </select>
            </div>

            {/* Transport */}
            <div className="field-group">
              <label>Preferred Transport</label>

              <select
                value={preferences.transport}
                disabled={!editing}
                onChange={(e) =>
                  handlePreferenceChange("transport", e.target.value)
                }
              >
                <option value="public">
                  Public Transport
                </option>

                <option value="bike">
                  Bicycle / Walking
                </option>

                <option value="ev">
                  Electric Vehicle
                </option>

                <option value="car">Car</option>
              </select>
            </div>

            {/* Budget */}
            <div className="field-group">
              <label>Budget Range</label>

              <select
                value={preferences.budgetRange}
                disabled={!editing}
                onChange={(e) =>
                  handlePreferenceChange(
                    "budgetRange",
                    e.target.value
                  )
                }
              >
                <option value="low">Low Budget</option>
                <option value="medium">
                  Medium Budget
                </option>
                <option value="high">
                  Premium Budget
                </option>
              </select>
            </div>

            {/* Goals */}
            <div className="field-group">
              <label>Eco Goals</label>

              <div className="goals-container">
                {preferences.goals.map((goal, index) => (
                  <div
                    key={index}
                    className="goal-tag"
                  >
                    🌱 {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {editing && (
            <button
              onClick={savePreferences}
              disabled={loading}
              className="save-btn"
            >
              {loading
                ? "Saving..."
                : "Save Preferences"}
            </button>
          )}
        </div>

        {/* Account Actions */}
        <div className="account-actions">
          <button
            onClick={logout}
            className="logout-btn"
          >
            Logout
          </button>

          <button className="password-btn">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;