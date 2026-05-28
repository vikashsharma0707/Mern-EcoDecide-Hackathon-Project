// // // // import { useState, useEffect } from 'react';
// // // // import API from '../../services/api';

// // // // const Dashboard = () => {
// // // //   const [activities, setActivities] = useState([]);
// // // //   const [ecoScore, setEcoScore] = useState(0);

// // // //   useEffect(() => {
// // // //     fetchActivities();
// // // //   }, []);

// // // //   const fetchActivities = async () => {
// // // //     try {
// // // //       const { data } = await API.get('/activities');
// // // //       setActivities(data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const logQuickActivity = async (type, desc, carbon) => {
// // // //     await API.post('/activities', {
// // // //       activityType: type,
// // // //       description: desc,
// // // //       carbonSaved: carbon
// // // //     });
// // // //     fetchActivities();
// // // //   };

// // // //   return (
// // // //     <div className="p-8">
// // // //       <h1 className="text-4xl font-bold text-white mb-8">Your Impact Dashboard 🌱</h1>

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
// // // //         <div className="glass p-8 rounded-3xl text-center">
// // // //           <h3 className="text-emerald-400">Total Eco Score</h3>
// // // //           <p className="text-7xl font-bold text-white mt-4">{ecoScore}</p>
// // // //         </div>
// // // //         <div className="glass p-8 rounded-3xl text-center">
// // // //           <h3 className="text-emerald-400">CO₂ Saved</h3>
// // // //           <p className="text-7xl font-bold text-white mt-4">124 kg</p>
// // // //         </div>
// // // //         <div className="glass p-8 rounded-3xl text-center">
// // // //           <h3 className="text-emerald-400">This Month</h3>
// // // //           <p className="text-5xl font-bold text-white mt-4">18 Activities</p>
// // // //         </div>
// // // //       </div>

// // // //       <button 
// // // //         onClick={() => logQuickActivity('transport', 'Used Metro instead of Car', 2.5)}
// // // //         className="bg-emerald-600 px-6 py-3 rounded-2xl text-white mr-4"
// // // //       >
// // // //         Log Metro Ride
// // // //       </button>
// // // //       <button 
// // // //         onClick={() => logQuickActivity('meal', 'Ate Vegetarian Meal', 1.8)}
// // // //         className="bg-emerald-600 px-6 py-3 rounded-2xl text-white"
// // // //       >
// // // //         Log Veg Meal
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;




// // // import { useState, useEffect } from 'react';
// // // import Sidebar from '../../components/dashboard/Sidebar';
// // // import EcoScoreCard from '../../components/dashboard/EcoScoreCard';
// // // import CarbonChart from '../../charts/CarbonChart';
// // // import API from '../../services/api';

// // // const Dashboard = () => {
// // //   const [activities, setActivities] = useState([]);
// // //   const [ecoScore, setEcoScore] = useState(0);
// // //   const [totalCarbonSaved, setTotalCarbonSaved] = useState(0);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     fetchDashboardData();
// // //   }, []);

// // //   const fetchDashboardData = async () => {
// // //     try {
// // //       const { data } = await API.get('/activities');
// // //       setActivities(data);

// // //       const totalSaved = data.reduce((sum, activity) => sum + (activity.carbonSaved || 0), 0);
// // //       setTotalCarbonSaved(totalSaved);
// // //       setEcoScore(78); // Dynamic bana sakte ho baad mein
// // //     } catch (err) {
// // //       console.error("Failed to fetch activities:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const logQuickActivity = async (type, desc, carbon) => {
// // //     try {
// // //       await API.post('/activities', {
// // //         activityType: type,
// // //         description: desc,
// // //         carbonSaved: carbon
// // //       });
// // //       fetchDashboardData();
// // //       alert(`✅ Logged: ${desc} (+${carbon}kg CO₂ saved)`);
// // //     } catch (err) {
// // //       alert("Failed to log activity");
// // //     }
// // //   };

// // //   const quickActions = [
// // //     { icon: "🚇", label: "Used Metro / Bus", carbon: 2.5, type: "transport", desc: "Used Public Transport instead of Car" },
// // //     { icon: "🥗", label: "Vegetarian Meal", carbon: 1.8, type: "meal", desc: "Ate Vegetarian Meal" },
// // //     { icon: "🧴", label: "Reusable Bottle", carbon: 0.4, type: "reusable", desc: "Used Reusable Bottle" },
// // //   ];

// // //   return (
// // //     <div className="flex min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950">
// // //       <Sidebar />

// // //       <div className="flex-1 ml-72 p-8 overflow-auto">
// // //         {/* Header */}
// // //         <div className="flex justify-between items-center mb-12">
// // //           <div>
// // //             <h1 className="text-5xl font-bold text-white tracking-tight">Welcome back, Vikash! 👋</h1>
// // //             <p className="text-emerald-400 text-xl mt-2">Here's your sustainability impact this week</p>
// // //           </div>
// // //           <div className="text-right">
// // //             <p className="text-gray-400 text-sm uppercase tracking-widest">Total CO₂ Saved</p>
// // //             <p className="text-5xl font-bold text-emerald-400">{totalCarbonSaved.toFixed(1)} kg</p>
// // //           </div>
// // //         </div>

// // //         {/* Stats Grid */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
// // //           <EcoScoreCard score={ecoScore} />

// // //           {/* Week Summary Card */}
// // //           <div className="glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all">
// // //             <h3 className="text-emerald-400 text-lg mb-6 flex items-center gap-2">
// // //               📊 This Week Summary
// // //             </h3>
// // //             <div className="space-y-8">
// // //               <div className="flex justify-between items-center">
// // //                 <span className="text-gray-300">Activities Logged</span>
// // //                 <span className="text-4xl font-bold text-white">{activities.length}</span>
// // //               </div>
// // //               <div className="flex justify-between items-center">
// // //                 <span className="text-gray-300">Water Saved</span>
// // //                 <span className="text-4xl font-bold text-sky-400">~420 L</span>
// // //               </div>
// // //               <div className="flex justify-between items-center">
// // //                 <span className="text-gray-300">Current Streak</span>
// // //                 <span className="text-4xl font-bold text-orange-400">🔥 7 days</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Impact Message */}
// // //           <div className="glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-center items-center text-center">
// // //             <div className="text-7xl mb-6">🌍</div>
// // //             <h3 className="text-2xl font-semibold text-white mb-2">You're making</h3>
// // //             <p className="text-emerald-400 text-2xl font-medium">a real difference!</p>
// // //             <p className="text-gray-400 mt-4 text-sm">Keep going strong</p>
// // //           </div>
// // //         </div>

// // //         {/* Carbon Savings Chart */}
// // //         <div className="mb-10">
// // //           <CarbonChart />
// // //         </div>

// // //         {/* Quick Actions */}
// // //         <div className="glass p-8 rounded-3xl border border-white/10">
// // //           <h3 className="text-white text-2xl mb-8 flex items-center gap-3">
// // //             ⚡ Quick Log Activity
// // //           </h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //             {quickActions.map((action, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => logQuickActivity(action.type, action.desc, action.carbon)}
// // //                 className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-white/10 hover:border-emerald-400 transition-all duration-300 hover:scale-[1.03] flex flex-col items-center gap-5 shadow-lg hover:shadow-xl"
// // //               >
// // //                 <div className="text-6xl transition-transform group-hover:scale-125 duration-300">
// // //                   {action.icon}
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="font-semibold text-lg text-white mb-1">{action.label}</div>
// // //                   <div className="text-emerald-400 font-medium">+{action.carbon} kg CO₂</div>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// // import { useState, useEffect } from "react";
// // import "./Dashboard.css";
// // import CarbonChart from "../../charts/CarbonChart";
// // import API from "../../services/api";

// // const Dashboard = () => {
// //   const [activities, setActivities] = useState([]);
// //   const [ecoScore, setEcoScore] = useState(85);
// //   const [totalCarbonSaved, setTotalCarbonSaved] = useState(0);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetchDashboardData();
// //   }, []);

// //   const fetchDashboardData = async () => {
// //     try {
// //       const { data } = await API.get("/activities");

// //       setActivities(data);

// //       const totalSaved = data.reduce(
// //         (sum, activity) => sum + (activity.carbonSaved || 0),
// //         0
// //       );

// //       setTotalCarbonSaved(totalSaved);
// //       setEcoScore(85);
// //     } catch (err) {
// //       console.error("Failed to fetch activities:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const logQuickActivity = async (type, desc, carbon) => {
// //     try {
// //       await API.post("/activities", {
// //         activityType: type,
// //         description: desc,
// //         carbonSaved: carbon,
// //       });

// //       fetchDashboardData();

// //       alert(`✅ Logged: ${desc} (+${carbon}kg CO₂ saved)`);
// //     } catch (err) {
// //       alert("Failed to log activity");
// //     }
// //   };

// //   const quickActions = [
// //     {
// //       icon: "🚇",
// //       label: "Used Metro / Bus",
// //       carbon: 2.5,
// //       type: "transport",
// //       desc: "Used Public Transport instead of Car",
// //     },
// //     {
// //       icon: "🥗",
// //       label: "Vegetarian Meal",
// //       carbon: 1.8,
// //       type: "meal",
// //       desc: "Ate Vegetarian Meal",
// //     },
// //     {
// //       icon: "🧴",
// //       label: "Reusable Bottle",
// //       carbon: 0.4,
// //       type: "reusable",
// //       desc: "Used Reusable Bottle",
// //     },
// //   ];

// //   return (
// //     <div className="dashboard-wrapper">
// //       {/* Sidebar */}
// //       <div className="sidebar-custom">
// //         <div>
// //           <div className="logo-box">🌱</div>

// //           <div className="sidebar-menu">
// //             <div className="sidebar-item active">Dashboard</div>
// //             <div className="sidebar-item">Carbon Tracker</div>
// //             <div className="sidebar-item">Eco Tips</div>
// //             <div className="sidebar-item">Community</div>
// //           </div>
// //         </div>

// //         <div className="sidebar-item">Settings</div>
// //       </div>

// //       {/* Main Dashboard */}
// //       <div className="dashboard-main">
// //         {/* Header */}
// //         <div className="dashboard-header">
// //           <div>
// //             <h1 className="dashboard-title">Dashboard</h1>
// //             <p className="dashboard-subtitle">
// //               Welcome back, Vikash 👋
// //             </p>
// //           </div>

// //           <div className="header-right">
// //             <button className="icon-btn">🔔</button>
// //             <button className="icon-btn">↗</button>

// //             <button className="quick-btn">Quick Actions</button>
// //           </div>
// //         </div>

// //         {/* Top Grid */}
// //         <div className="top-grid">
// //           {/* Eco Score */}
// //           <div className="dashboard-card eco-card">
// //             <div className="eco-header">
// //               <h2 className="card-title">Eco Score</h2>

// //               <div className="eco-icon">🌿</div>
// //             </div>

// //             <div className="score-circle">
// //               <div className="score-content">
// //                 <h1 className="score-number">{ecoScore}</h1>

// //                 <div className="score-emoji">🌱</div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Chart */}
// //           <div className="dashboard-card chart-card">
// //             <div className="chart-header">
// //               <h2 className="card-title">
// //                 Weekly Carbon Savings
// //               </h2>

// //               <button className="chart-btn">
// //                 Some allow
// //               </button>
// //             </div>

// //             <div className="chart-container">
// //               <CarbonChart />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Grid */}
// //         <div className="bottom-grid">
// //           {/* Total Savings */}
// //           <div className="dashboard-card bottom-card">
// //             <h2 className="card-title">Total Savings</h2>

// //             <p className="card-subtitle">Trees Planted</p>

// //             <h1 className="big-number">
// //               {totalCarbonSaved.toFixed(1)}kg
// //             </h1>

// //             <p className="small-number">CO₂ Saved</p>

// //             <div className="bottom-icon-box">🌳</div>
// //           </div>

// //           {/* Trees Planted */}
// //           <div className="dashboard-card bottom-card">
// //             <h2 className="card-title">Water Saved</h2>

// //             <p className="card-subtitle">
// //               Environmental Impact
// //             </p>

// //             <h1 className="big-number">420L</h1>

// //             <p className="small-number">Saved</p>

// //             <div className="bottom-icon-box">💧</div>
// //           </div>

// //           {/* Quick Actions */}
// //           <div className="dashboard-card bottom-card">
// //             <h2 className="card-title">Quick Actions</h2>

// //             <div className="action-buttons">
// //               {quickActions.map((action, index) => (
// //                 <button
// //                   key={index}
// //                   className="action-btn"
// //                   onClick={() =>
// //                     logQuickActivity(
// //                       action.type,
// //                       action.desc,
// //                       action.carbon
// //                     )
// //                   }
// //                 >
// //                   <span className="action-icon">
// //                     {action.icon}
// //                   </span>

// //                   <div>
// //                     <div>{action.label}</div>

// //                     <small>
// //                       +{action.carbon}kg CO₂
// //                     </small>
// //                   </div>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Week Summary */}
// //         <div className="summary-section">
// //           <div className="summary-card">
// //             <h3>📊 Activities Logged</h3>
// //             <p>{activities.length}</p>
// //           </div>

// //           <div className="summary-card">
// //             <h3>🔥 Current Streak</h3>
// //             <p>7 Days</p>
// //           </div>

// //           <div className="summary-card">
// //             <h3>🌍 Eco Impact</h3>
// //             <p>Excellent</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;



// import { useState, useEffect } from "react";
// import Sidebar from '../../components/dashboard/Sidebar';
// // import "./Dashboard.css";
// import CarbonChart from "../../charts/CarbonChart";
// import API from "../../services/api";

// const Dashboard = () => {
//   const [activities, setActivities] = useState([]);
//   const [ecoScore, setEcoScore] = useState(85);
//   const [totalCarbonSaved, setTotalCarbonSaved] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const { data } = await API.get("/activities");
//       setActivities(data);

//       const totalSaved = data.reduce(
//         (sum, activity) => sum + (activity.carbonSaved || 0),
//         0
//       );

//       setTotalCarbonSaved(totalSaved);
//       setEcoScore(85);
//     } catch (err) {
//       console.error("Failed to fetch activities:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logQuickActivity = async (type, desc, carbon) => {
//     try {
//       await API.post("/activities", {
//         activityType: type,
//         description: desc,
//         carbonSaved: carbon,
//       });
//       fetchDashboardData();
//       alert(`✅ Logged: ${desc} (+${carbon}kg CO₂ saved)`);
//     } catch (err) {
//       alert("Failed to log activity");
//     }
//   };

//   const quickActions = [
//     { icon: "🚇", label: "Used Metro / Bus", carbon: 2.5, type: "transport", desc: "Used Public Transport instead of Car" },
//     { icon: "🥗", label: "Vegetarian Meal", carbon: 1.8, type: "meal", desc: "Ate Vegetarian Meal" },
//     { icon: "🧴", label: "Reusable Bottle", carbon: 0.4, type: "reusable", desc: "Used Reusable Bottle" },
//   ];

//   return (
//     <div className="dashboard-wrapper">
//       {/* ←←← Yeh Sidebar Component Use Ho Raha Hai */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="dashboard-main">
//         {/* Header */}
//         <div className="dashboard-header">
//           <div>
//             <h1 className="dashboard-title">Dashboard</h1>
//             <p className="dashboard-subtitle">Welcome back, Vikash 👋</p>
//           </div>

//           <div className="header-right">
//             <button className="icon-btn">🔔</button>
//             <button className="icon-btn">↗</button>
//             <button className="quick-btn">Quick Actions</button>
//           </div>
//         </div>

//         {/* Top Grid */}
//         <div className="top-grid">
//           <div className="dashboard-card eco-card">
//             <div className="eco-header">
//               <h2 className="card-title">Your Eco Score</h2>
//               <div className="eco-icon">🌿</div>
//             </div>
//             <div className="score-circle">
//               <div className="score-content">
//                 <h1 className="score-number">{ecoScore}</h1>
//                 <p className="score-label">/ 100</p>
//               </div>
//             </div>
//           </div>

//           <div className="dashboard-card chart-card">
//             <div className="chart-header">
//               <h2 className="card-title">Weekly Carbon Savings</h2>
//             </div>
//             <div className="chart-container">
//               <CarbonChart />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Grid */}
//         <div className="bottom-grid">
//           <div className="dashboard-card bottom-card">
//             <h2 className="card-title">Total CO₂ Saved</h2>
//             <h1 className="big-number">{totalCarbonSaved.toFixed(1)} kg</h1>
//             <div className="bottom-icon-box">🌍</div>
//           </div>

//           <div className="dashboard-card bottom-card">
//             <h2 className="card-title">Water Saved</h2>
//             <h1 className="big-number">420 L</h1>
//             <div className="bottom-icon-box">💧</div>
//           </div>

//           <div className="dashboard-card bottom-card quick-actions-card">
//             <h2 className="card-title">Quick Log Activity</h2>
//             <div className="action-buttons">
//               {quickActions.map((action, index) => (
//                 <button
//                   key={index}
//                   className="action-btn"
//                   onClick={() => logQuickActivity(action.type, action.desc, action.carbon)}
//                 >
//                   <span className="action-icon">{action.icon}</span>
//                   <div className="action-text">
//                     <div>{action.label}</div>
//                     <small>+{action.carbon} kg CO₂</small>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import { useState, useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import CarbonChart from "../../charts/CarbonChart";
import API from "../../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [activities, setActivities] =
    useState([]);

  const [ecoScore, setEcoScore] =
    useState(85);

  const [
    totalCarbonSaved,
    setTotalCarbonSaved,
  ] = useState(0);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData =
    async () => {
      try {
        const { data } =
          await API.get("/activities");

        setActivities(data);

        const totalSaved =
          data.reduce(
            (sum, activity) =>
              sum +
              (activity.carbonSaved ||
                0),
            0
          );

        setTotalCarbonSaved(
          totalSaved
        );

        setEcoScore(85);
      } catch (err) {
        console.error(
          "Failed to fetch activities:",
          err
        );
      } finally {
        setLoading(false);
      }
    };

  const logQuickActivity =
    async (
      type,
      desc,
      carbon
    ) => {
      try {
        await API.post(
          "/activities",
          {
            activityType: type,
            description: desc,
            carbonSaved: carbon,
          }
        );

        fetchDashboardData();

        alert(
          `✅ Logged: ${desc} (+${carbon}kg CO₂ saved)`
        );
      } catch (err) {
        alert(
          "Failed to log activity"
        );
      }
    };

  const quickActions = [
    {
      icon: "🚇",
      label: "Used Metro / Bus",
      carbon: 2.5,
      type: "transport",
      desc:
        "Used Public Transport instead of Car",
    },

    {
      icon: "🥗",
      label: "Vegetarian Meal",
      carbon: 1.8,
      type: "meal",
      desc:
        "Ate Vegetarian Meal",
    },

    {
      icon: "🧴",
      label: "Reusable Bottle",
      carbon: 0.4,
      type: "reusable",
      desc:
        "Used Reusable Bottle",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="dashboard-main">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">
              Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Welcome back👋
            </p>
          </div>

          <div className="header-right">
            <button className="icon-btn">
              🔔
            </button>

            <button className="icon-btn">
              ↗
            </button>

            <button className="quick-btn">
              Quick Actions
            </button>
          </div>
        </div>

        {/* Top Grid */}
        <div className="top-grid">
          {/* Eco Score */}
          <div className="dashboard-card eco-card">
            <div className="eco-header">
              <h2 className="card-title">
                Eco Score
              </h2>

              <div className="eco-icon">
                🌿
              </div>
            </div>

            <div className="score-circle">
              <div className="score-content">
                <h1 className="score-number">
                  {ecoScore}
                </h1>

                <p className="score-label">
                  /100
                </p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="dashboard-card chart-card">
            <div className="chart-header">
              <h2 className="card-title">
                Weekly Carbon
                Savings
              </h2>
            </div>

            <div className="chart-container">
              <CarbonChart />
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="bottom-grid">
          {/* Total Saved */}
          <div className="dashboard-card bottom-card">
            <h2 className="card-title">
              Total CO₂ Saved
            </h2>

            <h1 className="big-number">
              {totalCarbonSaved.toFixed(
                1
              )}{" "}
              kg
            </h1>

            <div className="bottom-icon-box">
              🌍
            </div>
          </div>

          {/* Water */}
          <div className="dashboard-card bottom-card">
            <h2 className="card-title">
              Water Saved
            </h2>

            <h1 className="big-number">
              420 L
            </h1>

            <div className="bottom-icon-box">
              💧
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card quick-actions-card">
            <h2 className="card-title">
              Quick Log Activity
            </h2>

            <div className="action-buttons">
              {quickActions.map(
                (
                  action,
                  index
                ) => (
                  <button
                    key={index}
                    className="action-btn"
                    onClick={() =>
                      logQuickActivity(
                        action.type,
                        action.desc,
                        action.carbon
                      )
                    }
                  >
                    <span className="action-icon">
                      {
                        action.icon
                      }
                    </span>

                    <div className="action-text">
                      <div>
                        {
                          action.label
                        }
                      </div>

                      <small>
                        +
                        {
                          action.carbon
                        }{" "}
                        kg CO₂
                      </small>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;