// frontend/src/pages/ActivityPage.js
import React, { useState } from 'react';

const initialActivities = [
  { id: 1, name: 'Read a book', description: 'Finish reading React documentation.' },
  { id: 2, name: 'Workout', description: 'Go for a 30-minute run.' },
];

const ActivityPage = () => {
  const [activities, setActivities] = useState(initialActivities);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setMessage('Please enter both name and description.');
      return;
    }
    const newActivity = {
      id: activities.length + 1,
      name,
      description,
    };
    setActivities([...activities, newActivity]);
    setName('');
    setDescription('');
    setMessage('Activity added!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.name}</strong>: {activity.description}
          </li>
        ))}
      </ul>
      <h2>Add Activity</h2>
      <form onSubmit={handleAddActivity}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default ActivityPage;
