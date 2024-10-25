// src/pages/Home.js
import React from 'react';
import '../styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div> {/* Overlay for background */}
        <div className="hero-content">
          <h1>Welcome to SnipTrade Hub</h1>
          <p>Your Marketplace, Your Community</p>
          <button
            className="hero-button"
            onClick={() => (window.location.href = '/login')}
          >
            Shop Now
          </button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Wide Selection</h3>
            <p>Explore a diverse range of products across multiple categories.</p>
          </div>
          <div className="feature">
            <h3>Easy Navigation</h3>
            <p>Our user-friendly interface makes shopping a breeze.</p>
          </div>
          <div className="feature">
            <h3>Secure Payments</h3>
            <p>Your transactions are safe and secure with us.</p>
          </div>
          <div className="feature">
            <h3>Community Support</h3>
            <p>Join our vibrant community of buyers and sellers.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"SnipTrade Hub has transformed my online shopping experience!"</p>
          <p>- Happy Customer</p>
        </div>
        <div className="testimonial">
          <p>"I found everything I needed and more. Highly recommend!"</p>
          <p>- Satisfied User</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Our Community Today!</h2>
        <button className="cta-button" onClick={() => window.location.href = '/register'}>
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;
