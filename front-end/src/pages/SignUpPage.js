import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // back end people need to help me out here skull emojis
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
            <label>Email:</label>
            <input type="text" placeholder="Enter your @sjsu.edu email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="form-actions">
            <div className="action-row">
              <button 
                type="button" 
                className="login-link" 
                onClick={() => navigate('/login')}
              >
                Already signed up?
              </button>
              <button type="submit" className="primary-button">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;