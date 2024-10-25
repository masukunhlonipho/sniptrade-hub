import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import the Auth context
import './styles/HeaderSeller.css'; // Common styles for header and footer

const HeaderSeller = () => {
  const { logout } = useAuth(); // Access the logout function from the Auth context

  const handleLogout = async () => {
    await logout(); // Call the logout function when the user clicks the logout button
    // You can also redirect the user to the login page after logout
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <header className="header-seller">
      <h1>SnipTrade Hub - Seller</h1>
      <nav className="nav-seller">
        <a href="/seller/home">Dashboard</a>
        <a href="/seller/products">Products</a>
        <a href="/seller/orders">Orders</a>
        <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
      </nav>
    </header>
  );
};

export default HeaderSeller;
