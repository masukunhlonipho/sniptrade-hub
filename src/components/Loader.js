// src/components/Loader.js
import React from 'react';
import './styles/Loader.css'; // Import CSS for the spinner

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
