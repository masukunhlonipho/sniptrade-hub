import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from '../firebase'; // Firebase configuration
import '../styles/Auth.css'; // Shared CSS for login and register
import Loader from '../components/Loader'; // Import the Loader component
import { useAuth } from '../context/AuthContext'; // Import your Auth context

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading
  const navigate = useNavigate(); // Hook to navigate between routes
  const { user, loading: authLoading } = useAuth(); // Get user and loading state from context

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Set loading to true when the login process starts

    try {
      await setPersistence(auth, browserLocalPersistence); // Ensure login state persists
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in user:', email);
    } catch (err) {
      console.error('Login error:', err.message);
      setError('Failed to login. Please check your email or password.');
    } finally {
      setLoading(false); // Reset loading state after login attempt
    }
  };

  // Use effect to redirect based on user role
  React.useEffect(() => {
    if (user && !authLoading) {
      if (user.role === 'admin') {
        navigate('/admin/home');
      } else if (user.role === 'seller') {
        navigate('/seller/home');
      } else if (user.role === 'buyer') {
        navigate('/buyer/home');
      }
    }
  }, [user, authLoading, navigate]);

  return (
    <div className="auth-container">
      <h2>Login to SnipTrade Hub</h2>
      {error && <p className="error-message">{error}</p>}
      {loading ? ( // Conditionally render the loader
        <Loader />
      ) : (
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">Login</button>
        </form>
      )}
      <p className="switch-page">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default LoginPage;
