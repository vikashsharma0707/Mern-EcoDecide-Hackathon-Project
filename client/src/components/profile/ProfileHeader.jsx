




// import "./ProfileHeader.css";

// const ProfileHeader = ({ user }) => {
//   return (
//     <div className="profile-header-card">
//       {/* Left Side */}
//       <div className="profile-user-section">
//         <div className="profile-avatar">
//           {user?.name?.charAt(0)?.toUpperCase() || "👤"}
//         </div>

//         <div>
//           <h2 className="profile-name">
//             {user?.name || "Vikash Sharma"}
//           </h2>

//           <p className="profile-email">
//             {user?.email || "vikash@gmail.com"}
//           </p>

//           <div className="profile-badge">
//             🌱 Sustainability Enthusiast
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="profile-stats">
//         <div className="profile-stat-box">
//           <span className="profile-stat-number">
//             {user?.ecoScore || 72}
//           </span>

//           <span className="profile-stat-label">
//             Eco Score
//           </span>
//         </div>

//         <div className="divider"></div>

//         <div className="profile-stat-box">
//           <span className="profile-level">
//             Level 8
//           </span>

//           <span className="profile-stat-label">
//             Eco Warrior
//           </span>
//         </div>

//         <div className="divider"></div>

//         <div className="profile-stat-box">
//           <span className="profile-stat-number">
//             184kg
//           </span>

//           <span className="profile-stat-label">
//             CO₂ Saved
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./ProfileHeader.css"

const ProfileHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-header-card">
      {/* Left Side - User Info */}
      <div className="profile-user-section">
        <div className="profile-avatar">
          {user?.name ? user.name.charAt(0).toUpperCase() : "👤"}
        </div>

        <div>
          <h2 className="profile-name">
            {user?.name || "User Name"}
          </h2>

          <p className="profile-email">
            {user?.email || "user@example.com"}
          </p>

          <div className="profile-badge">
            🌱 Sustainability Enthusiast
          </div>
        </div>
      </div>

      {/* Right Side - Stats */}
      <div className="profile-stats">
        <div className="profile-stat-box">
          <span className="profile-stat-number">
            {user?.ecoScore || 72}
          </span>
          <span className="profile-stat-label">Eco Score</span>
        </div>

        <div className="divider"></div>

        <div className="profile-stat-box">
          <span className="profile-level">Level 8</span>
          <span className="profile-stat-label">Eco Warrior</span>
        </div>

        <div className="divider"></div>

        <div className="profile-stat-box">
          <span className="profile-stat-number">
            184<span className="text-sm">kg</span>
          </span>
          <span className="profile-stat-label">CO₂ Saved</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;