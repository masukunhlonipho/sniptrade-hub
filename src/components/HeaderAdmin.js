// src/components/HeaderAdmin.js
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import AuthContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/HeaderAdmin.css'

const HeaderAdmin = () => {
  const { logout } = useAuth(); // Access the logout function from context
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleLogout = async () => {
    await logout(); // Call the logout function
    navigate('/'); // Redirect to the login page after logout
  };

  return (
    <header>
      <h1>SnipTrade Hub - Admin</h1>
      <nav>
        <a href="/admin/dashboard">Dashboard</a>
        <a href="/admin/users">Users</a>
        <a href="/admin/reports">Reports</a>
        <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
      </nav>
    </header>
  );
};

export default HeaderAdmin;
