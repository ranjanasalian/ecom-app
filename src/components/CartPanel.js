// /src/components/CartPanel.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/CartPanel.css";

export default function CartPanel() {
  const { cartItem, toggleCart } = useContext(CartContext); // Access context values.

  function handleClickToggle() {
    toggleCart();
  }

  return (
    <div className="cart-panel">
      <button className="close-btn" onClick={handleClickToggle}>
        &times;
      </button>
      <h2>Your Cart</h2>
      {cartItem.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItem.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <div className="cart-actions">
            <Link to="/viewcart" onClick={toggleCart}>
              <button>View Cart</button>
            </Link>
            <Link to="/checkout" onClick={toggleCart}>
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
