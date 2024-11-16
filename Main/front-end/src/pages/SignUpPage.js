import React from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="text" placeholder="Enter your @sjsu.edu email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="email" placeholder="Confirm Password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
