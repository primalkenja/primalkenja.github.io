import React from "react";
import "./LoginPage.css";


const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Log In</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="text" placeholder="Enter your @sjsu.edu email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
