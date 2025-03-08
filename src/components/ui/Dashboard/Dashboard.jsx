import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Logout function
  const handleLogout = () => {
    // Clear any necessary session/localStorage or authentication data here
    localStorage.removeItem('authToken');  // Example: Remove auth token from localStorage

    // Redirect to the homepage
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} className='logout-btn'>Logout</button>
      
    </div>
  );
};

export default Dashboard;
