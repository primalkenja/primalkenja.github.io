import React, { useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const title = document.querySelector('.home-page header h1');
    let lastX = 0;
    let lastY = 0;
    let animationFrameId = null;
    const easeAmount = 0.08;
    
    const handleMouseMove = (e) => {
      if (title) {
        const rect = title.getBoundingClientRect();
        const titleCenterX = rect.left + rect.width / 2;
        const titleCenterY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - titleCenterX;
        const deltaY = e.clientY - titleCenterY;
        
        // Calculate distance from cursor to title center
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight);
        
        // Normalize the offset based on distance
        const minOffset = 8;
        const maxOffset = 12;
        const normalizedOffset = minOffset + (distance / maxDistance) * (maxOffset - minOffset);
        
        // Prevent division by zero
        const safeDistance = Math.max(distance, 0.1);
        
        // Apply normalized offset
        const targetX = -(deltaX / safeDistance) * normalizedOffset;
        const targetY = -(deltaY / safeDistance) * normalizedOffset;
        
        // Smooth animation loop
        const updateShadow = () => {
          lastX += (targetX - lastX) * easeAmount;
          lastY += (targetY - lastY) * easeAmount;
          
          // Check if shadow is "stuck" (very small movement)
          const movement = Math.abs(targetX - lastX) + Math.abs(targetY - lastY);
          if (movement < 0.01) {
            lastX = targetX;
            lastY = targetY;
          }
          
          // Bound checking to prevent extreme values
          lastX = Math.min(Math.max(lastX, -maxOffset), maxOffset);
          lastY = Math.min(Math.max(lastY, -maxOffset), maxOffset);
          
          title.style.textShadow = `${lastX}px ${lastY}px 0 var(--school-gold)`;
          animationFrameId = requestAnimationFrame(updateShadow);
        };
        
        // Cancel any existing animation frame before starting new one
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        updateShadow();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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