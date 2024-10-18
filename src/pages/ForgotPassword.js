import React, { useState } from "react";
import "../styles/ForgotPassword.css";

export default function ForgotPassword() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }

  function handleReset(event) {
    event.preventDefault();
    // Handle password reset logic
    alert("Password reset successful!");
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Change Password</h2>
        <form onSubmit={handleReset}>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={credentials.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="**********"
              value={credentials.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I accept the Terms and Conditions</label>
          </div> */}
          <button type="submit" className="reset-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
