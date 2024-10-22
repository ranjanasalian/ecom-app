import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext.js";
import CartPanel from "./CartPanel.js";
import "../styles/MainNavigation.css";
import { auth } from "../firebase/firebaseConfig"; // import auth for user data
import { signOut, onAuthStateChanged } from "firebase/auth"; // for logging out and checking auth state

export default function MainNavigation() {
  const navigate = useNavigate();
  const { cartItem, toggleCart, isCartOpen } = useContext(CartContext);
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // track login state

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  function handleClick() {
    toggleCart();
  }

  function handleLogin() {
    navigate("/login");
  }

  function handleLogout() {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); // Reset login state
        navigate("/"); // Navigate to home page on logout
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
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
            {isLoggedIn ? (
              <button className="login-signupbtn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="login-signupbtn" onClick={handleLogin}>
                Login/Signup
              </button>
            )}
          </div>
        </div>
      </nav>
      {isCartOpen && <CartPanel />}
    </header>
  );
}
