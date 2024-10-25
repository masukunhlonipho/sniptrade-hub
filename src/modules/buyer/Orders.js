// src/modules/buyer/Orders.js
import React, { useState, useEffect } from 'react';
import '../styles/Orders.css'; // Import styles

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className="orders-container">
      <h1 className="orders-heading">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders-message">You have no orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <p>Order ID: {order.id}</p>
              <p>Total: ${order.total}</p>
              <button className="delete-order-button" onClick={() => handleDeleteOrder(order.id)}>
                Delete Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
