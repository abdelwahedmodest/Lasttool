// frontend/src/pages/ProfilePage.js
import React, { useState } from 'react';

const initialProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'A passionate learner.',
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setMessage('Profile saved (dummy)!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSave}>
        <label>Name:</label>
        <input name="name" value={profile.name} onChange={handleChange} />
        <label>Email:</label>
        <input name="email" value={profile.email} onChange={handleChange} />
        <label>Bio:</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default ProfilePage;
