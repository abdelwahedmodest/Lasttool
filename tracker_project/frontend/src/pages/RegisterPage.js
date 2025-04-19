// frontend/src/pages/RegisterPage.js
import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { register, loading, error } = useContext(AuthContext);
  const [registerSuccess, setRegisterSuccess] = useState(null); // null, true, or false

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setMessage('Please fill all fields.');
      setRegisterSuccess(false);
      return;
    }
    const result = await register({ username, email, password });
    if (result.success) {
      setMessage('Registration successful! You can now log in.');
      setUsername('');
      setEmail('');
      setPassword('');
      setRegisterSuccess(true);
    } else {
      setMessage(result.error || 'Registration failed');
      setRegisterSuccess(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {message && (
  <p style={{ color: registerSuccess ? 'green' : 'red' }}>{message}</p>
)}
{error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegisterPage;
