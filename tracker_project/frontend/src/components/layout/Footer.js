// frontend/src/components/layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Activity Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
