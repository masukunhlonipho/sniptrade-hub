// src/pages/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS for About page

const About = () => {
  return (
    <div className="about">
      <h1>About SnipTrade Hub</h1>
      <p>
        Welcome to <strong>SnipTrade Hub</strong> — your go-to platform for seamless online shopping and selling. 
        Our mission is to empower buyers and sellers by creating a simple, secure, and vibrant online marketplace.
      </p>

      <section className="about-details">
        <h2>Our Vision</h2>
        <p>
          We aim to connect communities through e-commerce, enabling everyone to trade and build sustainable businesses 
          with ease and trust.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of products at competitive prices.</li>
          <li>Trusted sellers with verified credentials.</li>
          <li>Safe and secure payment methods.</li>
          <li>Excellent customer support and easy returns.</li>
        </ul>

        <h2>Join Us</h2>
        <p>
          Whether you're looking to buy your next favorite item or start a business as a seller, SnipTrade Hub 
          has you covered!
        </p>
      </section>
    </div>
  );
};

export default About;
