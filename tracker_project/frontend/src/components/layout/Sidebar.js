// frontend/src/components/layout/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/api-explorer">API Explorer</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
