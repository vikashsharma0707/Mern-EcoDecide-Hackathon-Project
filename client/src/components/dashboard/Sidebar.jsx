


// import { NavLink } from "react-router-dom";
// import {
//   FaHome,
//   FaRobot,
//   FaBalanceScale,
//   FaCamera,
//   FaHistory,
//   FaUser,
//   FaCar,
//   FaLightbulb,
//   FaCog 
// } from "react-icons/fa";

// import "./Sidebar.css";

// const Sidebar = () => {
//   const navItems = [
//     {
//       to: "/dashboard",
//       icon: <FaHome />,
//       label: "Dashboard",
//     },
//     {
//       to: "/chat",
//       icon: <FaRobot />,
//       label: "AI Assistant",
//     },
//     {
//       to: "/compare",
//       icon: <FaBalanceScale />,
//       label: "Product Compare",
//     },
//     {
//       to: "/scanner",
//       icon: <FaCamera />,
//       label: "Product Scanner",
//     },
//     {
//       to: "/history",
//       icon: <FaHistory />,
//       label: "History",
//     },
//     {
//       to: "/profile",
//       icon: <FaUser />,
//       label: "Profile",
//     },

//     { to: "/commute", icon: <FaCar />, label: "Smart Commute" },

//     { to: "/recommendations", icon: <FaLightbulb />, label: "Daily Tips" },

//     { to: "/settings", icon: <FaCog />, label: "Settings" },
//   ];

//   return (
//     <div className="sidebar">
//       {/* Logo */}
//       <div className="sidebar-top">
//         <div className="sidebar-logo">
//           🌱
//         </div>

//         <div>
//           <h1 className="sidebar-title">
//             EcoDecide
//           </h1>

//           <p className="sidebar-subtitle">
//             Live Green
//           </p>
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="sidebar-menu">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.to}
//             to={item.to}
//             className={({ isActive }) =>
//               isActive
//                 ? "sidebar-link active"
//                 : "sidebar-link"
//             }
//           >
//             <div className="sidebar-icon">
//               {item.icon}
//             </div>

//             <span>{item.label}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Bottom */}
//       <div className="sidebar-bottom">
//         <div className="bottom-settings">
//           ⚙ Settings
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaBalanceScale,
  FaCamera,
  FaHistory,
  FaUser,
  FaCar,
  FaLightbulb,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  const navItems = [
    {
      to: "/dashboard",
      icon: <FaHome />,
      label: "Dashboard",
    },
    {
      to: "/chat",
      icon: <FaRobot />,
      label: "AI Assistant",
    },
    {
      to: "/compare",
      icon: <FaBalanceScale />,
      label: "Product Compare",
    },
    {
      to: "/scanner",
      icon: <FaCamera />,
      label: "Product Scanner",
    },
    {
      to: "/history",
      icon: <FaHistory />,
      label: "History",
    },
    {
      to: "/profile",
      icon: <FaUser />,
      label: "Profile",
    },
    {
      to: "/commute",
      icon: <FaCar />,
      label: "Smart Commute",
    },
    {
      to: "/recommendations",
      icon: <FaLightbulb />,
      label: "Daily Tips",
    },
    {
      to: "/settings",
      icon: <FaCog />,
      label: "Settings",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <aside className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-top">
        <div className="sidebar-logo">🌱</div>

        <div className="sidebar-brand">
          <h1 className="sidebar-title">EcoDecide</h1>
          <p className="sidebar-subtitle">
            Sustainable Living Assistant
          </p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-menu">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <div className="sidebar-icon">
              {item.icon}
            </div>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;