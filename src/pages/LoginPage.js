import { NavLink, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import LoginImg from "../assets/images/ModakVase.jpeg";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email Id and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email === "admin@gmail.com" && password === "admin0987") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError("Invalid email Id or password.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-image">
          <img src={LoginImg} alt="Background" className="login-background" />
        </div>
        <div className="login-form-container">
          <h3>
            NovaNest <strong>Awaits . . .</strong>
          </h3>
          <p>Login To Elevate Your Space!!!</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email" className="lable-name">
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
            <div className="input-group">
              <label htmlFor="password" className="lable-name">
                <i className="fas fa-lock"></i>
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input-value"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <p className="newcustomer">
            <NavLink to="/register">
              Signup if you're new to this website
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
