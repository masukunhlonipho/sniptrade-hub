// src/modules/buyer/Wishlist.js
import React from 'react';
import { useWishlist } from '../../context/WishlistContext'; // Import useWishlist hook
import { useCart } from '../../context/CartContext'; // Import useCart hook
import '../styles/Wishlist.css'; // Import styles

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist(); // Access wishlist items
  const { addToCart } = useCart(); // Access addToCart function from cart context

  const handleAddToCart = (item) => {
    addToCart(item); // Add item to cart
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty. Start adding items!</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button 
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(item)} // Call addToCart when clicked
                >
                  Add to Cart
                </button>
                <button
                  className="remove-button"
                  onClick={() => removeFromWishlist(item.id)}
                  style={{ marginLeft: '10px' }} // Added inline margin for space
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
