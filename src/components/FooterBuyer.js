// src/components/FooterBuyer.js
import React from 'react';
import './styles/FooterBuyer.css'; // Import the CSS file

const FooterBuyer = () => {
  return (
    <footer className="footer-buyer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/buyer/wishlist">Wishlist</a>
          <a href="/buyer/cart">Cart</a>
          <a href="/buyer/account">Account</a>
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
