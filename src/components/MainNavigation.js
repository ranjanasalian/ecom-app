import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import CartPanel from "./CartPanel.js";
import "../styles/MainNavigation.css";

export default function MainNavigation() {
  const navigate = useNavigate();
  const { cartItem, toggleCart, isCartOpen } = useContext(CartContext);
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);

  function handleClick() {
    toggleCart();
  }

  function handleLogin() {
    navigate("/login");
  }

  return (
    <header className="header">
      <nav className="container">
        <h2 className="logo-name">NovaNest</h2>
        <div className="navbar">
          <ul className="nav-links">
            <li className="nav-items">
              <NavLink to="/" className="nav-control">
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/about" className="nav-control">
                About
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/product" className="nav-control">
                Shop
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/contact" className="nav-control">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-containers">
          <div className="cart" id="nav-toggle" onClick={handleClick}>
            <FaShoppingCart />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
          <div>
            <button className="login-signupbtn" onClick={handleLogin}>
              Login/Signup
            </button>
          </div>
        </div>
      </nav>
      {isCartOpen && <CartPanel />} {/* Fixed the conditional rendering */}
    </header>
  );
}
