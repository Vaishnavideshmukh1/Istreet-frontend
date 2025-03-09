// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard = () => {
//   const navigate = useNavigate(); // Hook to programmatically navigate

//   // Logout function
//   const handleLogout = () => {
//     // Clear any necessary session/localStorage or authentication data here
//     localStorage.removeItem('authToken');  // Example: Remove auth token from localStorage

//     // Redirect to the homepage
//     navigate('/');
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button onClick={handleLogout} className='logout-btn'>Logout</button>
      
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('authToken');  
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
