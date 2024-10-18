// /src/components/ProductDetails.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetails.css";

// Sample product data (replace with actual data or API call)
const products = [
  {
    id: "1",
    name: "Product 1",
    description: "Description of Product 1",
    price: 29.99,
  },
  // ... other products ...
];

export default function ProductDetails() {
  const { productId } = useParams();
  const { AddtoCart } = useContext(CartContext);

  // Find the product based on the productId
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  function handleAddToCart() {
    AddtoCart(product);
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
