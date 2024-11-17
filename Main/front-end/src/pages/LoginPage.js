import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // back end people need to help me out here skull emojis
  };

  return (
    <section className="login-page">
      <div className="main-header">
        <div className="header-buttons-container">
          <button className="button primary-button" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1>Log In</h1>
        </header>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" placeholder="Enter your @sjsu.edu email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-actions">
            <div className="action-row">
              <button 
                type="button" 
                className="signup-link" 
                onClick={() => navigate('/signup')}
              >
                Not signed up?
              </button>
              <button type="submit" className="primary-button">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;