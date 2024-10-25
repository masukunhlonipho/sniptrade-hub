// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from '../firebase'; // Firebase configuration
import '../styles/Auth.css'; // Shared CSS

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyers'); // Default role is 'buyers'
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    try {
      console.log('Attempting to create user...');
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', user);
  
      // Add user details to Firestore
      await addDoc(collection(firestore, role), {
        email: user.email,
        username,
        timestamp: serverTimestamp(),
      });
  
      console.log(`User registered as ${role}:`, { email: user.email, username });
      setSuccess('Account created successfully! Please log in.');
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error('Registration error:', err);
      setError(`Registration failed: ${err.message}`);
    }
  };
  
  return (
    <div className="auth-container">
      <h2>Create an Account on SnipTrade Hub</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="role-select"
        >
          <option value="buyers">Buyer</option>
          <option value="sellers">Seller</option>
        </select>

        <button type="submit" className="auth-button">
          Register
        </button>
      </form>
      <p className="switch-page">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
