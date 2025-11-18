import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Load user on mount if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const data = await authAPI.getMe();
          setUser(data.user);
        } catch (error) {
          console.error('Failed to load user:', error);
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  const signup = async (userData) => {
    try {
      const data = await authAPI.signup(userData);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      return { success: true, data };
    } catch (error) {
      const message = error.response?.data?.message || 'Signup failed';
      return { success: false, error: message };
    }
  };

  const login = async (credentials) => {
    try {
      const data = await authAPI.login(credentials);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      return { success: true, data };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      return { success: false, error: message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    signup,
    login,
    logout,
    isAuthenticated: !!token
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
