// import { useState } from 'react';
// import Sidebar from '../../components/dashboard/Sidebar';
// import ToggleSwitch from '../../components/settings/ToggleSwitch';

// const Settings = () => {
//   const [settings, setSettings] = useState({
//     darkMode: true,
//     notifications: true,
//     emailAlerts: true,
//     weeklyReport: true,
//     publicProfile: false,
//     dataSharing: true
//   });

//   const handleToggle = (key) => {
//     setSettings(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   const saveSettings = () => {
//     alert("✅ Settings saved successfully!");
//     // API call add kar sakte hain baad mein
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950">
//       <Sidebar />

//       <div className="flex-1 ml-72 p-8">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-5xl font-bold text-white mb-10">Settings ⚙️</h1>

//           {/* Account Settings */}
//           <div className="glass p-8 rounded-3xl mb-8">
//             <h2 className="text-2xl font-semibold text-white mb-6">Account Settings</h2>
            
//             <div className="space-y-2">
//               <ToggleSwitch 
//                 label="Dark Mode" 
//                 value={settings.darkMode} 
//                 onChange={() => handleToggle('darkMode')} 
//               />
//               <ToggleSwitch 
//                 label="Push Notifications" 
//                 value={settings.notifications} 
//                 onChange={() => handleToggle('notifications')} 
//               />
//               <ToggleSwitch 
//                 label="Email Alerts" 
//                 value={settings.emailAlerts} 
//                 onChange={() => handleToggle('emailAlerts')} 
//               />
//               <ToggleSwitch 
//                 label="Weekly Impact Report" 
//                 value={settings.weeklyReport} 
//                 onChange={() => handleToggle('weeklyReport')} 
//               />
//             </div>
//           </div>

//           {/* Privacy Settings */}
//           <div className="glass p-8 rounded-3xl mb-8">
//             <h2 className="text-2xl font-semibold text-white mb-6">Privacy & Security</h2>
            
//             <div className="space-y-2">
//               <ToggleSwitch 
//                 label="Make Profile Public" 
//                 value={settings.publicProfile} 
//                 onChange={() => handleToggle('publicProfile')} 
//               />
//               <ToggleSwitch 
//                 label="Share Anonymous Data for Research" 
//                 value={settings.dataSharing} 
//                 onChange={() => handleToggle('dataSharing')} 
//               />
//             </div>
//           </div>

//           {/* App Preferences */}
//           <div className="glass p-8 rounded-3xl">
//             <h2 className="text-2xl font-semibold text-white mb-6">App Preferences</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-gray-400 block mb-3">Default Unit</label>
//                 <select className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white">
//                   <option>Metric (kg, km)</option>
//                   <option>Imperial</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-gray-400 block mb-3">Language</label>
//                 <select className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white">
//                   <option>English</option>
//                   <option>Hinglish</option>
//                   <option>Hindi</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Save Button */}
//           <button
//             onClick={saveSettings}
//             className="mt-10 w-full bg-emerald-500 hover:bg-emerald-600 py-5 rounded-3xl text-white font-semibold text-xl transition-all"
//           >
//             Save All Settings
//           </button>

//           {/* Danger Zone */}
//           <div className="mt-12 p-6 border border-red-500/30 rounded-3xl">
//             <h3 className="text-red-400 font-semibold mb-4">Danger Zone</h3>
//             <button className="text-red-400 hover:text-red-500 transition-colors">
//               Delete My Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;


import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import ToggleSwitch from "../../components/settings/ToggleSwitch";
import "./Settings.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    emailAlerts: true,
    weeklyReport: true,
    publicProfile: false,
    dataSharing: true,
    language: "English",
    unit: "Metric (kg, km)",
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveSettings = () => {
    console.log("Settings:", settings);

    alert("✅ Settings saved successfully!");
  };

  const deleteAccount = () => {
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete your account?"
    );

    if (confirmDelete) {
      alert("Account deletion request submitted.");
    }
  };

  return (
    <div className="settings-page">
      <Sidebar />

      <div className="settings-content">
        {/* Header */}
        <div className="settings-header">
          <h1 className="settings-title">
            ⚙️ Settings
          </h1>

          <p className="settings-subtitle">
            Manage your EcoDecide account preferences
          </p>
        </div>

        {/* Account Settings */}
        <div className="glass settings-card">
          <h2 className="section-title">
            Account Settings
          </h2>

          <div className="toggle-list">
            <ToggleSwitch
              label="🌙 Dark Mode"
              value={settings.darkMode}
              onChange={() =>
                handleToggle("darkMode")
              }
            />

            <ToggleSwitch
              label="🔔 Push Notifications"
              value={settings.notifications}
              onChange={() =>
                handleToggle("notifications")
              }
            />

            <ToggleSwitch
              label="📧 Email Alerts"
              value={settings.emailAlerts}
              onChange={() =>
                handleToggle("emailAlerts")
              }
            />

            <ToggleSwitch
              label="📊 Weekly Impact Report"
              value={settings.weeklyReport}
              onChange={() =>
                handleToggle("weeklyReport")
              }
            />
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="glass settings-card">
          <h2 className="section-title">
            Privacy & Security
          </h2>

          <div className="toggle-list">
            <ToggleSwitch
              label="🌍 Make Profile Public"
              value={settings.publicProfile}
              onChange={() =>
                handleToggle("publicProfile")
              }
            />

            <ToggleSwitch
              label="📈 Share Anonymous Data"
              value={settings.dataSharing}
              onChange={() =>
                handleToggle("dataSharing")
              }
            />
          </div>
        </div>

        {/* App Preferences */}
        <div className="glass settings-card">
          <h2 className="section-title">
            App Preferences
          </h2>

          <div className="preferences-grid">
            <div className="input-group">
              <label>
                Default Unit
              </label>

              <select
                name="unit"
                value={settings.unit}
                onChange={handleSelectChange}
                className="settings-select"
              >
                <option>
                  Metric (kg, km)
                </option>

                <option>
                  Imperial (lbs, miles)
                </option>
              </select>
            </div>

            <div className="input-group">
              <label>
                Language
              </label>

              <select
                name="language"
                value={settings.language}
                onChange={handleSelectChange}
                className="settings-select"
              >
                <option>
                  English
                </option>

                <option>
                  Hindi
                </option>

                <option>
                  Hinglish
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={saveSettings}
          className="save-btn"
        >
          💾 Save All Settings
        </button>

        {/* Danger Zone */}
        <div className="danger-zone">
          <h3 className="danger-title">
            ⚠️ Danger Zone
          </h3>

          <p className="danger-text">
            Once you delete your account,
            there is no going back.
          </p>

          <button
            className="delete-btn"
            onClick={deleteAccount}
          >
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;