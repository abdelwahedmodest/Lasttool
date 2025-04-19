// frontend/src/pages/DashboardPage.js
import React from 'react';

const stats = [
  { label: 'Activities', count: 5 },
  { label: 'Projects', count: 2 },
  { label: 'Courses', count: 3 },
];

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! Here is a quick overview:</p>
      <div style={{ display: 'flex', gap: '16px', marginTop: 24 }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, minWidth: 120, textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 'bold' }}>{stat.count}</div>
            <div>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
