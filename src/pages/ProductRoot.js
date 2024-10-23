import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductRoot.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

export default function ProductRoot() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    const sortProducts = (productsToSort) => {
      if (sortOption === "priceLowHigh") {
        return [...productsToSort].sort((a, b) => a.price - b.price);
      } else if (sortOption === "priceHighLow") {
        return [...productsToSort].sort((a, b) => b.price - a.price);
      } else if (sortOption === "a-z") {
        return [...productsToSort].sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === "z-a") {
        return [...productsToSort].sort((a, b) => b.name.localeCompare(a.name));
      } else {
        return productsToSort;
      }
    };

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const sortedProducts = sortProducts(storedProducts);
    setProducts(sortedProducts);
  }, [sortOption]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-container">
      <div className="product-root">
        <h1>Discover Your Perfect Ceramics!</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortOption} onChange={handleSort}>
            <option value="default">Default Sorting</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>

        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <div className="add-to-cart">
                <button>
                  <FaShoppingCart />
                </button>
              </div>
              <h3>{product.name}</h3>
              <p>
                {product.userRating}{" "}
                <span className="star">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </span>
              </p>
              {product.discount > 0 && (
                <p>
                  ₹
                  {(
                    product.price -
                    product.price * (product.discount / 100)
                  ).toFixed(2)}
                  <span className="original-price">MRP: ₹{product.price}</span>
                </p>
              )}
              <Link to={`/product/${product.id}`}>
                <button>
                  <FaShoppingCart /> Buy Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
