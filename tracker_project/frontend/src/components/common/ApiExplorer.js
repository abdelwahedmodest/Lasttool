// frontend/src/components/common/ApiExplorer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiExplorer = () => {
  const [endpoints, setEndpoints] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEndpoints = async () => {
      try {
        setLoading(true);
        
        // Define main endpoints
        const mainEndpoints = {
          admin: '/admin/',
          auth: '/api/auth/',
          tracking: '/api/tracking/',
          projects: '/api/projects/',
          courses: '/api/courses/',
          calendar: '/api/calendar/',
        };
        
        setEndpoints({
          main: mainEndpoints
        });
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load API endpoints');
        setLoading(false);
        console.error('Error fetching API endpoints:', err);
      }
    };
    
    fetchEndpoints();
  }, []);

  if (loading) {
    return <div className="loading">Loading API endpoints...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="api-explorer">
      <h1>API Explorer</h1>
      <div className="endpoint-container">
        <h2>Available Endpoints</h2>
        <ul>
          {Object.entries(endpoints.main || {}).map(([name, url]) => (
            <li key={name}>
              <strong>{name}</strong>: {url}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApiExplorer;
