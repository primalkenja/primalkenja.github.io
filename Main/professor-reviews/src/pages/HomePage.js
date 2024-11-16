import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <section className="main-page">
      <div className="main-header">
        <div className="header-buttons-container">
          <div className="header-buttons">
            <button>Log In</button>
            <button>Sign Up</button>
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
          <button>View Courses</button>
          <button>View Professors</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
