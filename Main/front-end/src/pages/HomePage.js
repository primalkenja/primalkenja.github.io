import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
    return (
    <section className="home-page">
      <div className="main-header">
        <div className="header-buttons-container">
          <div className="login-button">
            <button className="button" onClick={() => navigate("/login")}>Log In</button>
          </div>
          <div className="signup-button">
          <button className="button" onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1><strong>Spartan Insights</strong></h1>
          <h2>Find, rate, and leave reviews for SJSU <strong>Courses</strong> and <strong>Professors</strong></h2>
        </header>
        <input type="text" aria-label="search" placeholder="Search Course or Professor" />
        <div className="content-buttons">
        <button className="button" onClick={() => navigate('/courses')}>View Courses</button>
          <button className="button" onClick={() => navigate('/professors')}>View Professors</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
