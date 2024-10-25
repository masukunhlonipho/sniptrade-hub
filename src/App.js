// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeHeaderFooter from './components/wrappers/HomeHeaderFooter';
import BuyerHeaderFooter from './components/wrappers/BuyerHeaderFooter';
import SellerHeaderFooter from './components/wrappers/SellerHeaderFooter';
import AdminHeaderFooter from './components/wrappers/AdminHeaderFooter';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext'; // Auth context
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import ProtectedRoute from './components/ProtectedRoute'; // Import Protected Route

// Buyer
import BuyerPage from './modules/buyer/Home';
import Cart from './modules/buyer/Cart';
import Wishlist from './modules/buyer/Wishlist';
import BuyerAccount from './modules/buyer/Account';
import Orders from './modules/buyer/Orders';

//Payment
import Checkout from './modules/payment/Checkout';
import Success from './modules/payment/Success';

// Seller
import SellerPage from './modules/seller/Home';

// Admin
import AdminPage from './modules/admin/Home';

// App Component
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomeHeaderFooter component={Home} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<HomeHeaderFooter component={About} />} />
              <Route path="/contact" element={<HomeHeaderFooter component={Contact} />} />
              <Route path="/*" element={<NotFound />} />

              {/* Protected Buyer Routes */}
              <Route
                path="/buyer/home*"
                element={
                  <ProtectedRoute component={() => <BuyerHeaderFooter component={BuyerPage} />} />
                }
              />
              <Route
                path="/buyer/cart*"
                element={
                  <ProtectedRoute component={() => <BuyerHeaderFooter component={Cart} />} />
                }
              />
              <Route
                path="/buyer/wishlist*"
                element={
                  <ProtectedRoute component={() => <BuyerHeaderFooter component={Wishlist} />} />
                }
              />
              <Route
                path="/buyer/account*"
                element={
                  <ProtectedRoute component={() => <BuyerHeaderFooter component={BuyerAccount} />} />
                }
              />
              <Route
                path="/buyer/orders*"
                element={
                  <ProtectedRoute component={() => <BuyerHeaderFooter component={Orders} />} />
                }
              />
              <Route
                path="/payment/checkout*"
                element={
                  <ProtectedRoute component={() => <BuyerHeaderFooter component={Checkout} />} />
                }
              />
                <Route
                path="/payment/success*"
                element={
                  <ProtectedRoute component={() => <BuyerHeaderFooter component={Success} />} />
                }
              />             

              {/* Protected Seller Routes */}
              <Route
                path="/seller/home*"
                element={
                  <ProtectedRoute component={() => <SellerHeaderFooter component={SellerPage} />} />
                }
              />

              {/* Protected Admin Routes */}
              <Route
                path="/admin/home*"
                element={
                  <ProtectedRoute component={() => <AdminHeaderFooter component={AdminPage} />} />
                }
              />
            </Routes>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
