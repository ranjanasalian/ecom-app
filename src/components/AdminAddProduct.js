import { useState } from "react";
import "../styles/AdminAddProduct.css";

export default function AdminAddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    size: [],
    gender: "",
    price: "",
    stock: "",
    discount: "",
    discountType: "",
    category: "",
    image: "",
  });

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setProduct({
        ...product,
        size: checked
          ? [...product.size, value]
          : product.size.filter((s) => s !== value),
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  }

  function handleImageUpload(event) {
    const file = event.target.file[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({
        ...product,
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, product])
    );
  }
  return (
    <div className="admin-add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>General Information</h3>
          <label>
            Name Product:
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Description Product:
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>Size:</label>
          <div className="size-options">
            {["XS", "S", "M", "XL", "XXL"].map((size) => (
              <label key={size}>
                <input
                  type="checkbox"
                  name="size"
                  value={size}
                  checked={product.size.includes(size)}
                  onChange={handleInputChange}
                />
                {size}
              </label>
            ))}
          </div>
          <label>Gender:</label>
          <div className="gender-options">
            {["Men", "Woman", "Unisex"].map((gender) => (
              <label key={gender}>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={product.gender === gender}
                  onChange={handleInputChange}
                />
                {gender}
              </label>
            ))}
          </div>
        </div>
        <div className="form-section">
          <h3>Pricing and Stock</h3>
          <label>
            Base Pricing:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Discount:
            <input
              type="number"
              name="discount"
              value={product.discount}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Discount Type:
            <select
              name="discountType"
              value={product.discountType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Discount Type</option>
              <option value="Seasonal Discount">Seasonal Discount</option>
              <option value="New Year Discount">New Year Discount</option>
            </select>
          </label>
        </div>

        <div className="form-section">
          <h3>Category</h3>
          <label>
            Product Category:
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <div className="form-section">
          <h3>Upload Image</h3>
          <input type="file" onChange={handleImageUpload} required />
          {product.image && (
            <img
              src={product.image}
              alt="Product Preview"
              style={{ width: "100px" }}
            />
          )}
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
