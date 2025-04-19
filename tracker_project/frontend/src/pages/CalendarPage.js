// frontend/src/pages/CalendarPage.js
import React from 'react';

// To use a real calendar, install a library like react-calendar or fullcalendar-react
// and replace the static grid below.

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = Array.from({ length: 30 }, (_, i) => i + 1);

const CalendarPage = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', maxWidth: 350 }}>
        {days.map((day) => (
          <div key={day} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
        ))}
        {dates.map((date) => (
          <div key={date} style={{ border: '1px solid #ccc', height: 40, textAlign: 'center', lineHeight: '40px' }}>{date}</div>
        ))}
      </div>
      <p style={{ marginTop: 16 }}><em>To enable a real calendar, install a calendar library and replace this grid.</em></p>
    </div>
  );
};

export default CalendarPage;
