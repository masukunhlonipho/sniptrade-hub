// src/modules/buyer/Cart.js
import React from 'react';
import { useCart } from '../../context/CartContext'; // Import useCart hook
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css'; // Import styles

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useCart(); // Access cart items and addToCart function
  const navigate = useNavigate();

  console.log('Cart Items in Cart:', cartItems); // Debugging log

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/payment/checkout'); // Redirect to checkout
    } else {
      alert('Your cart is empty.');
    }
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping now!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button 
                  className="increase-button" // Added class name for increase button
                  onClick={() => addToCart(item)} // Increase quantity
                >
                  Increase
                </button>
                <button 
                  className="decrease-button" // Added class name for decrease button
                  onClick={() => {
                    if (item.quantity > 1) {
                      removeFromCart(item.id); // Remove the item
                      addToCart({ ...item, quantity: item.quantity - 1 }); // Add back with decreased quantity
                    } else {
                      removeFromCart(item.id); // Remove item if quantity is 1
                    }
                  }}
                >
                  Decrease
                </button>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ${calculateTotalPrice()}</h2>
            <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
