// src/components/FooterBuyer.js
import React from 'react';
import './styles/FooterHome.css'; // Import the CSS file

const FooterBuyer = () => {
  return (
    <footer className="footer-home">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/location">Location</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 SnipTrade Hub. All Rights Reserved.</p>
          <p>Follow us on:</p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBuyer;
