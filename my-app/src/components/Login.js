import React, { useState } from 'react';
import './Login.css';
import suzaLogo from './suza_logo.jpg';
import axios from 'axios';

function Login() {
  const [regno, setRegno] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: regno,   // Assuming registration number is used as username
        password: password
      });

      console.log('Login successful');
      // You can handle the response here, e.g., store tokens in localStorage, redirect to dashboard
      // For example, localStorage.setItem('accessToken', response.data.access);

      // Perform navigation programmatically
      window.location.href = '/dashboard';  // This navigates to the Dashboard route
    } catch (error) {
      console.error('Login error:', error.response);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <img src={suzaLogo} alt="SUZA Logo" className="logo" />
      <h2>Examination Portal Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Registration Number:</label>
          <input
            type="text"
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
