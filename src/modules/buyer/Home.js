// src/modules/buyer/Home.js
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; // Import useCart hook
import { useWishlist } from '../../context/WishlistContext'; // Import wishlist hook
import '../styles/BuyerHome.css'; // Import styles
import productAImage from '../../assets/ProductA.jpg';
import productBImage from '../../assets/ProductB.jpg';
import productCImage from '../../assets/ProductC.jpg';
import productDImage from '../../assets/ProductD.jpg';
import productEImage from '../../assets/ProductE.jpg';
import productFImage from '../../assets/ProductF.jpg';
import productGImage from '../../assets/ProductG.jpg';

const BuyerHome = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, cartItems } = useCart(); // Access cart items via context
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      const mockProducts = [
        { id: 1, name: 'Boots', price: 10.99, image: productAImage, description: 'Winter boots' },
        { id: 2, name: 'Tshirt', price: 15.99, image: productBImage, description: 'Summer T-shirt' },
        { id: 3, name: 'Jean', price: 7.99, image: productCImage, description: 'Blue jeans' },
        { id: 4, name: 'Hat', price: 89.99, image: productDImage, description: 'Fedora hat' },
        { id: 5, name: 'Belt', price: 50.00, image: productEImage, description: 'Cozy jacket' },
        { id: 6, name: 'Croptop', price: 60.00, image: productFImage, description: 'Running shoes' },
        { id: 7, name: 'Socks', price: 30.00, image: productGImage, description: 'Travel backpack' },
      ];
      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  // Log cartItems whenever they change
  useEffect(() => {
    console.log('Updated Cart Items:', cartItems);
  }, [cartItems]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="buyer-home">
      <header className="buyer-home-header">
        <h1>Welcome to Your Buyer Dashboard!</h1>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </header>

      <section className="product-list">
        <h2>Available Products</h2>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
                <button
                  className="buy-button"
                  onClick={() => {
                    addToCart(product); // Add product to cart
                    console.log('Cart after addition:', cartItems); // Log cart items after adding
                    alert(`${product.name} has been added to your cart!`);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="wishlist-button"
                  onClick={() => {
                    addToWishlist(product); // Add product to wishlist
                    alert(`${product.name} has been added to your wishlist!`);
                  }}
                >
                  Add to Wishlist
                </button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BuyerHome;
