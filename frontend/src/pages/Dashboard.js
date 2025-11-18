import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">ConnectHub</div>
          <div className="navbar-user">
            <div className="user-info">
              <div className="user-name">{user?.name}</div>
              <div className="user-email">@{user?.username}</div>
            </div>
            <button className="btn-logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome to ConnectHub, {user?.name}! 🎉</h2>
          <p>
            Your authentication is working perfectly! You are now logged in and can access protected routes.
          </p>
          <p style={{ marginTop: '15px' }}>
            <strong>Your Profile:</strong>
          </p>
          <p>Email: {user?.email}</p>
          <p>Username: @{user?.username}</p>
          <p>Role: {user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
