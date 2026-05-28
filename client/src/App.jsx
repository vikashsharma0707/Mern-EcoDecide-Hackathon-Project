// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';
// import Home from './pages/Home';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import Chat from './pages/dashboard/Chat';
// import Compare from './pages/dashboard/Compare';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route 
//           path="/dashboard" 
//           element={
//             <PrivateRoute>
//               <Chat />   {/* Default dashboard shows Chat for now */}
//             </PrivateRoute>
//           } 
//         />

//         <Route 
//           path="/chat" 
//           element={
//             <PrivateRoute>
//               <Chat />
//             </PrivateRoute>
//           } 
//         />
//         <Route path="/compare" element={<PrivateRoute><Compare/></PrivateRoute>} />

//         {/* Future Routes (you can add later) */}
//         {/* 
        
//         <Route path="/scanner" element={<PrivateRoute><Scanner /></PrivateRoute>} />
//         <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
//         */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Chat from './pages/dashboard/Chat';
import Compare from './pages/dashboard/Compare';
import Scanner from './pages/dashboard/Scanner';
import History from './pages/dashboard/History';
import CommuteOptimizer from './pages/dashboard/CommuteOptimizer';
import PersonalizedRecommendations from './pages/dashboard/PersonalizedRecommendations';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/chat" 
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/compare" 
          element={
            <PrivateRoute>
              <Compare />
            </PrivateRoute>
          } 
        />
        <Route path="/scanner" element={<PrivateRoute><Scanner/></PrivateRoute>} />
        <Route path="/history" element={
  <PrivateRoute>
    <History/>
  </PrivateRoute>
} />

<Route path="/commute" element={<PrivateRoute><CommuteOptimizer/></PrivateRoute>} />
<Route path="/recommendations" element={
  <PrivateRoute>
    <PersonalizedRecommendations/>
  </PrivateRoute>
} />


<Route path="/profile" element={
  <PrivateRoute>
    <Profile/>
  </PrivateRoute>
} />

<Route path="/settings" element={
  <PrivateRoute>
    <Settings/>
  </PrivateRoute>
} />

        {/* Future Routes - Uncomment when ready */}
        {/* 
        <Route path="/scanner" element={<PrivateRoute><Scanner /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        */}
      </Routes>
    </Router>
  );
}

export default App;