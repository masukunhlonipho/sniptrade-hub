// src/modules/admin/Home.js
import React from 'react';
import '../styles/AdminHome.css'; // Optional: Add specific styles for the admin home page

const AdminHome = () => {
  return (
    <div className="admin-home">
      <header className="admin-home-header">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Manage your marketplace efficiently!</p>
      </header>

      <div className="admin-home-content">
        <h3>Admin Actions</h3>
        <div className="action-buttons">
          <button className="action-button">Manage Products</button>
          <button className="action-button">Manage Sellers</button>
          <button className="action-button">View Orders</button>
          <button className="action-button">View Users</button>
          <button className="action-button">Site Settings</button>
        </div>

        <div className="info-section">
          <h4>Admin Tips:</h4>
          <ul>
            <li>Regularly update product listings.</li>
            <li>Monitor seller performance and feedback.</li>
            <li>Ensure timely order fulfillment.</li>
            <li>Keep track of site analytics for improvements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
