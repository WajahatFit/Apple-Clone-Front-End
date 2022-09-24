import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import '../views/createForm.css'
import create from '../images/undraw_up_to_date_re_nqid.svg'

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
        `${process.env.REACT_APP_API_URL}/products/create`,
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
      setProductImages((prev) => [...prev, response.data.fileUrl]);
      setImgForUser((prev) => [...prev, e.target.files[0].name]);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="style">
      <h1 className="text-black text-3xl text-bold text-center mt-4 mb-6 font-extrabold" >Create a product</h1>
      <img src={ create} alt='create' className="w-40 mx-auto" />
      <form className="flex flex-col justify-center items-center mx-4 mt-20" onSubmit={handleSubmit}>
        <input
          className="bg-s"
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          required
          className="bg-s"
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          required
          className="bg-s"
          type="number"
          name="price"
          placeholder="Price"
          min='0'
          value={product.price}
          onChange={handleChange}
        />
        <div className="flex flex-row justify-center items-center">
        <fieldset className="space-x-2">
          <legend className="relative left-4 text-black text-xl font-semibold py-4 text-center">Select a color</legend>
          <input
            required
            
            className="radio"
            type="radio"
            id="Blue"
            name="color"
            value="Blue"
            onChange={handleChange}
            checked={product.color === "Blue"}
          />
          <label htmlFor="Blue"></label>
          <input
            required
            type="radio"
            id="Black"
            name="color"
            value="Black"
            onChange={handleChange}
            checked={product.color === "Black"}
          />
          <label htmlFor="Black"></label>
          <input
            required
            type="radio"
            id="Red"
            name="color"
            value="Red"
            onChange={handleChange}
            checked={product.color === "Red"}
          />
          <label htmlFor="Red"></label>
          <input
            required
            type="radio"
            id="Orange"
            name="color"
            value="Orange"
            onChange={handleChange}
            checked={product.color === "Orange"}
          />
          <label htmlFor="Orange"></label>
          <input
            required
            type="radio"
            id="Purple"
            name="color"
            value="Purple"
            onChange={handleChange}
            checked={product.color === "Purple"}
          />

          <label htmlFor="Purple"></label>
          </fieldset>
          </div>
        <div className="flex flex-row space-x-4 mt-8">
        <label className='text-lg text-sky-500' htmlFor="newStock"> <span className="inline">New Product?</span></label>
          <input
          className="form-checkbox h-5 w-5 text-red-600"
          required
          type="checkbox"
          name="newStock"
          checked={product.newStock}
          onChange={handleChange}
          id="newStock"
            />
        </div>
        
            
           
       
        <label className="flex flex-row m-4 " htmlFor="category">Choose a Category for the Product </label>
     
        <select
          id="category"
          value={product.category}
          onChange={handleChange}
          name="category"
        >
          <option className=".list">-- Choose --</option>
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
          
        <button className=" text-white p-4 rounded-xl mb-4 bg-indigo-500 hover:bg-brightRed active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 drop-shadow-lg" type="submit">Create New Product</button>
      </form>
    </div>
  );
}
