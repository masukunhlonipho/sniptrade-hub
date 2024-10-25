// src/components/HeaderHome.js
import React from 'react';
import './styles/HeaderHome.css'; // Import the CSS file

const HeaderHome = () => {
  return (
    <header className="header-home">
      <div className="logo-container">
        <img src="https://res.cloudinary.com/dlvap4nng/image/upload/v1728943230/logo_zzphoy.png" alt="SnipTrade Hub Logo" className="logo" />
        <h1 className="site-name">SnipTrade Hub</h1>
      </div>
      <nav className="nav-menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/contact">Contact</a>
        <a href="/location">Location</a>
      </nav>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
        />
        <button className="search-button">Search</button>
        
      </div>
    </header>
  );
};

export default HeaderHome;
