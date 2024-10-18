import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductRoot.css";

// Sample product data (replace with actual data or API call)
const products = [
  {
    id: "1",
    name: "Product 1",
    price: 29.99,
  },
  {
    id: "2",
    name: "Product 2",
    price: 49.99,
  },
];

export default function ProductRoot() {
  return (
    <div className="product-root">
      <h1>Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
