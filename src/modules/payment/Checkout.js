// src/modules/payment/Checkout.js
import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleApprove = async (orderId) => {
    setLoading(true); // Start loading
    console.log('Order approved with ID:', orderId);

    // After successful payment
    const newOrder = {
    id: Date.now(), // Use timestamp as a unique ID
    total: calculateTotalPrice(),
    date: new Date().toISOString(), // Store date in ISO format
    // Add any other order details you want to store
    };

    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    storedOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(storedOrders));
    
    clearCart(); // Clear the cart after successful payment
    navigate('/payment/success'); // Navigate to success page
    setLoading(false); // Stop loading
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Checkout</h1>
      <div className="checkout-summary">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>{item.name} (x{item.quantity})</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h2>Total: ${calculateTotalPrice()}</h2>
      </div>

      {loading ? (
        <p className="loading-message">Processing your payment, please wait...</p>
      ) : (
        <div className="paypal-button-container">
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: calculateTotalPrice() },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order.capture();
              handleApprove(order.id); // Handle approval
            }}
            onError={(err) => {
              console.error('PayPal Checkout Error:', err);
              setLoading(false); // Stop loading on error
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
