import React from "react";
import "../styles/HomePage.css";
import HomeImg from "../assets/images/3cups.jpeg";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="welcome-section">
        <div className="text-content">
          <h5>WELCOME TO CERAMIC SHOP</h5>
          <h1>
            Elevate Your Space with <br />
            Ceramic Elegance.
          </h1>
          <h3>Starting from just Rs.299</h3>
          <button className="shop-btn">
            <NavLink to="/product"> Shop Now</NavLink>
          </button>
        </div>
        <div className="image-section">
          <img src={HomeImg} alt="Ceramic Product" className="feature-image" />
        </div>
      </div>
    </div>
  );
}
