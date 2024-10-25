import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Success.css'; // Import the CSS file

const Success = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/buyer/home'); // Redirect to buyer's home page
  };

  return (
    <div className="success-container">
      <h1 className="success-heading">Payment Successful!</h1>
      <p className="success-message">
        Your order has been placed successfully. Thank you for shopping with us!
      </p>
      <button onClick={handleGoBack} className="success-button">
        Continue Shopping
      </button>
    </div>
  );
};

export default Success;

