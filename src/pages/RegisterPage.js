import { NavLink, useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import LoginImg from "../assets/images/ModakVase.jpeg";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 4) {
      alert("Username must have more than 4 characters!");
    }

    if (password !== confirmPassword) {
      alert("Password Does not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Registered Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-image">
          <img src={LoginImg} alt="Background" className="signup-background" />
        </div>
        <div className="signup-form-container">
          <h3>
            NovaNest <strong>Awaits . . .</strong>
          </h3>
          <p>Sign Up To Elevate Your Space!!!</p>

          <form onSubmit={handleSubmit}>
            <div className="signup-input-group">
              <label htmlFor="username" className="signup-lable-name">
                <i className="fas fa-envelope"></i>
                UserName
              </label>
              <input
                type="text"
                name="username"
                className="signup-input-value"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="email" className="signup-lable-name">
                <i className="fas fa-envelope"></i>
                Email
              </label>
              <input
                type="email"
                name="email"
                className="signup-input-value"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="password" className="signup-lable-name">
                <i className="fas fa-lock"></i>
                Password
              </label>
              <input
                type="password"
                name="password"
                className="signup-input-value"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="confirmpassword" className="signup-lable-name">
                <i className="fas fa-lock"></i>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm password"
                className="signup-input-value"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="signup-button" type="submit">
              Sign Up
            </button>
          </form>
          <p className="alreadysignup">
            Already have an account?<NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
