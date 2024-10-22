import { useState, useEffect } from "react";
import "../styles/AdminDashBoard.css"; // Create a new CSS file for the product list
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleEdit = (index) => {
    console.log("Edit product", index);
  };

  return (
    <div className="admin-dashboard">
      <h2>Product List</h2>
      <div className="product-table">
        <div className="product-header">
          <span>Name</span>
          <span>Description</span>
          <span>Size</span>
          <span>Gender</span>
          <span>Base Pricing</span>
          <span>Stock</span>
          <span>Discount</span>
          <span>Discount Type</span>
          <span>Category</span>
          <span>Image</span>
        </div>
        {products.length === 0 ? (
          <div className="product-row">
            <span colSpan="11" style={{ textAlign: "center" }}>
              No Products Available
            </span>
          </div>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-row">
              <span>{product.name}</span>
              <span className="product-description">{product.description}</span>
              <span>{product.size.join(", ")}</span>
              <span>{product.gender}</span>
              <span>₹{product.price}</span>
              <span>{product.stock}</span>
              <span>{product.discount}%</span>
              <span>{product.discountType}</span>
              <span>{product.category}</span>
              <span>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "25px", height: "25px", borderRadius: "4px" }}
                />
              </span>
              <span className="actions">
                <button onClick={() => handleEdit(index)}>
                  <CiEdit />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <MdDelete />
                </button>
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
