import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { productId } = useParams();
  const { AddtoCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  // Fetch product from local storage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const product = storedProducts.find(
      (item, index) => index.toString() === productId
    );
    setProduct(product);
  }, [productId]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  function handleAddToCart() {
    AddtoCart(product);
  }

  return (
    <div className="product-details">
      <div className="product-details__image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details__info">
        <h2>{product.name}</h2>
        <div className="product-details__prices">
          <span className="original-price">₹{product.price}</span>
          <span className="sale-price">
            ₹
            {(product.price - (product.price * product.discount) / 100).toFixed(
              2
            )}
          </span>
          <span className="free-shipping">Free Shipping</span>
        </div>
        <p>{product.description}</p>

        <div className="product-details__cart">
          <label>Quantity:</label>
          <input type="number" defaultValue="1" min="1" />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <p className="categories">Category: {product.category}</p>
        <p>Available Sizes: {product.size.join(", ")}</p>
        <p>Gender: {product.gender}</p>

        <div className="product-details__guarantees">
          <p>Free shipping on orders over ₹4000!</p>
          <ul>
            <li>No-Risk Money Back Guarantee!</li>
            <li>No Hassle Refunds</li>
            <li>Secure Payments</li>
          </ul>
        </div>

        <div className="product-details__checkout">
          <h4>Guaranteed Safe Checkout</h4>
          <img src="/path-to-payment-icons" alt="Payment methods" />
        </div>
      </div>
    </div>
  );
}
