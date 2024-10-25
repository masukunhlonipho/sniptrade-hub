// src/modules/seller/Home.js
import React from 'react';
import '../styles/SellerHome.css'; // Optional: Add specific styles for the seller page

const Home = () => {
  return (
    <div className="seller-page">
      <header className="seller-header">
        <h2>Welcome to Your Seller Dashboard</h2>
        <p>Your one-stop solution to manage your products and orders!</p>
      </header>

      <div className="seller-content">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-button">Add New Product</button>
          <button className="action-button">View Your Products</button>
          <button className="action-button">View Orders</button>
        </div>

        <div className="info-section">
          <h4>Tips for Success:</h4>
          <ul>
            <li>Keep your product listings updated.</li>
            <li>Respond to customer inquiries promptly.</li>
            <li>Monitor your sales and adjust prices as needed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
