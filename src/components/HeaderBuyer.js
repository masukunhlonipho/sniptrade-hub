// src/components/HeaderBuyer.js
import React from 'react';
import { signOut } from 'firebase/auth'; // Import signOut from Firebase
import { auth } from '../firebase'; // Import Firebase configuration
import './styles/HeaderBuyer.css'; // Import the CSS file for the buyer header

const HeaderBuyer = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      console.log('User signed out successfully');
      window.location.href = '/'; // Redirect after logout
    } catch (error) {
      console.error('Logout error:', error.message);
      alert('Error signing out. Please try again.');
    }
  };

  return (
    <header className="header-buyer">
      <div className="logo-container">
        <img 
          src="https://res.cloudinary.com/dlvap4nng/image/upload/v1728943230/logo_zzphoy.png" 
          alt="SnipTrade Hub Logo" 
          className="logo" 
        />
        <h1 className="site-name">SnipTrade Hub</h1>
      </div>
      <nav className="nav-menu">
        <a href="/buyer/home">Dashboard</a>
        <a href="/buyer/products">Products</a>
        <a href="/buyer/wishlist">Wishlist</a>
        <a href="/buyer/cart">Cart</a>
        <a href="/buyer/orders">Orders</a>
        <a href="/buyer/account">Account</a>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
};

export default HeaderBuyer;
