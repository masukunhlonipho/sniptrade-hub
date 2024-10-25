// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';

const ProtectedRoute = ({ component: Component }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  return user ? <Component /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute; // Ensure this line is present
