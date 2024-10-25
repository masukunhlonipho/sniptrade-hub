// src/context/WishlistContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Wishlist Context
const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlistItems = localStorage.getItem('wishlistItems');
    return savedWishlistItems ? JSON.parse(savedWishlistItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Check if the product is already in the wishlist
      if (!prevItems.find((item) => item.id === product.id)) {
        return [...prevItems, product]; // Add item if it does not exist
      }
      return prevItems; // Return existing items if it already exists
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearWishlist = () => setWishlistItems([]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
