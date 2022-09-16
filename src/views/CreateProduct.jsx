import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProduct() {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    color: "",
    newStock: "",
    category: "",
  });
  const [productImages, setProductImages] = useState([]);
  const [imgForUser, setImgForUser] = useState([]);

  const handleChange = (e) => {
    setProduct((prev) => {
      const { name, value, type, checked } = e.target;
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productToSend = {
      title: product.title,
      description: product.description,
      price: product.price,
      color: product.color,
      newStock: product.newStock,
      category: product.category,
      productImages: productImages,
    };
    try {
      console.log("I am about to create a prod", productToSend)
      const newProduct = await axios.post(
        "http://localhost:8000/api/v1/products",
        productToSend,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      console.log(newProduct);
      navigate(`/products/${newProduct.data.data._id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("productImageUrl", e.target.files[0]);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/products/upload`,
        uploadData
      );
      console.log(response.data.fileUrl);
      setProductImages((prev) => [...prev, response.data.fileUrl]);
      setImgForUser((prev) => [...prev, e.target.files[0].name]);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <fieldset>
          <legend>Available products Colors</legend>
          <input
            type="radio"
            id="Blue"
            name="color"
            value="Blue"
            onChange={handleChange}
            checked={product.color === "Blue"}
          />
          <label htmlFor="Blue">Blue</label>
          <input
            type="radio"
            id="Black"
            name="color"
            value="Black"
            onChange={handleChange}
            checked={product.color === "Black"}
          />
          <label htmlFor="Black">Black</label>
          <input
            type="radio"
            id="Red"
            name="color"
            value="Red"
            onChange={handleChange}
            checked={product.color === "Red"}
          />
          <label htmlFor="Red">Red</label>
          <input
            type="radio"
            id="Orange"
            name="color"
            value="Orange"
            onChange={handleChange}
            checked={product.color === "Orange"}
          />
          <label htmlFor="Orange">Orange</label>
          <input
            type="radio"
            id="Purple"
            name="color"
            value="Purple"
            onChange={handleChange}
            checked={product.color === "Purple"}
          />
          <label htmlFor="Purple">Purple</label>
        </fieldset>
        <br />
        <br />
        <label htmlFor="newStock">New Product?</label>
        <input
          type="checkbox"
          name="newStock"
          checked={product.newStock}
          onChange={handleChange}
          id="newStock"
        />
        <br />
        <br />
        <label htmlFor="category">Choose a Category for the Product</label>
        <br />
        <select
          id="category"
          value={product.category}
          onChange={handleChange}
          name="category"
        >
          <option>-- Choose --</option>
          <option value="Mac">Mac</option>
          <option value="Iphone">Iphone</option>
          <option value="Ipad">Ipad</option>
          <option value="Apple Watch">Apple Watch</option>
          <option value="Apple TV">Apple TV</option>
          <option value="Air Pods">Air Pods</option>
        </select>
        <br />
        <br />
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <br />
        {imgForUser && (
          <ul>
            {imgForUser.map((elem, i) => {
              return <li key={i}>{elem}</li>;
            })}
          </ul>
        )}
        <button type="submit">Create New Product</button>
      </form>
    </div>
  );
}
