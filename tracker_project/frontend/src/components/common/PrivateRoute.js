
// frontend/src/components/common/PrivateRoute.js
import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

