// frontend/src/components/layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo">
          Activity Tracker
        </Link>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
