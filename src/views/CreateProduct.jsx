import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import '../views/createForm.css'

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
      images: productImages,
    };
    try {
      const newProduct = await axios.post(
        "http://localhost:8000/api/v1/products/create",
        productToSend,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      toast.success("Product created successfully!");
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
    <div className="style">
      <h1 className="text-white text-3xl text-bold text-center mt-4" >Create a product</h1>
      <form className="flex flex-col justify-center items-center space-y-4 py-4 mx-4 mt-20" onSubmit={handleSubmit}>
        <input
          className="p-2 rounded-xl text-lg w-96"
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-xl text-lg w-96 h-16"
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-xl text-lg w-96"
          type="number"
          name="price"
          placeholder="Price"
          min='0'
          value={product.price}
          onChange={handleChange}
        />
        <fieldset className="flex justify-center items-center space-x-2">
          <legend className="text-white text-xl font-bold py-4">Select Color</legend>
          <input
            className=""
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
        <label htmlFor="newStock">New Product?
        <input
          type="checkbox"
          name="newStock"
          checked={product.newStock}
          onChange={handleChange}
          id="newStock"
            />
            </label>
           
       
        <label className="text-white text-xl text-center inline" htmlFor="category">Choose a Category for the Product</label>
     
        <select
          id="category"
          value={product.category}
          onChange={handleChange}
          name="category"
        >
          <option className="w-4">-- Choose --</option>
          <option value="Mac">Mac</option>
          <option value="iPhone">Iphone</option>
          <option value="Ipad">Ipad</option>
          <option value="Apple Watch">Apple Watch</option>
          <option value="Apple TV">Apple TV</option>
          <option value="Air Pods">Air Pods</option>
        </select>
        <br />
        <br />
        <input className="border-dashed border-2 border-sky-500 w-fit p-8 mx-auto" type="file" onChange={(e) => handleFileUpload(e)} />
        <br />
        {imgForUser && (
          <ul>
            {imgForUser.map((elem, i) => {
              return <li key={i}>{elem}</li>;
            })}
          </ul>
          )}
          
        <button className=" text-white p-4 rounded-xl mb-4 bg-sky-500 hover:bg-brightRed active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit">Create New Product</button>
      </form>
    </div>
  );
}
