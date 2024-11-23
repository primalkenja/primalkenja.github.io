import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');  // State for the username
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userData = { username, email, password };

    try {
      setLoading(true);
      setError('');
      const response = await axios.post('http://localhost:5000/api/auth/register', userData);
      
      // Store the token in local storage after successful registration
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/'); // Redirect to the home page after successful registration
      }
    } catch (err) {
      console.error('Error during signup:', err.response ? err.response.data : err.message);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup-page">
      <div className="main-header">
        <div className="header-buttons-container">
          <button className="button primary-button" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1>Sign Up</h1>
        </header>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="text" 
              placeholder="Enter your @sjsu.edu email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="form-actions">
            <div className="action-row">
              <button 
                type="button" 
                className="login-link" 
                onClick={() => navigate('/login')}
              >
                Already signed up?
              </button>
              <button 
                type="submit" 
                className="primary-button" 
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
