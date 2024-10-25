// src/pages/HomePage.js
import React from 'react';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>OOPS THERE IS NOTHING HERE!</h1>
      <h1>404 - PAGE NOT FOUND</h1>
      <p>THE PAGE YOU ARE LOOKING FOR DOESN"T EXIST</p>
      <p>WEBSITE IS STILL UNDER DEVELOPMENT</p>
      {/* Add additional content like featured products or promotions here */}
    </div>
  );
};

export default NotFound;