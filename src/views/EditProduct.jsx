import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditProject() {
  //const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [button, setButton] = useState(false);

  const handleButton = () => {
    setButton((prevState) => {
      prevState = !prevState;
    });
  };

  useEffect(() => {
    console.log("render com", id);
    const getData = async () => {
      try {
        const product = await axios.get(
          `http://localhost:8000/api/v1/products/${id}`
        );
        setProduct(product.data.data);
        console.log(product);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  const handleChange = (e) => {
    setProduct((prev) => {
      const { type, name, value, checked } = e.target;
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/v1/products/${id}`, product);
      // navigate(`/products/${newProduct.data.data._id}`)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div onClick={handleButton}>
        {button ? <span>Edit</span> : <span>Delete</span>}
      </div>
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
        {/* <input type="radio" name="color" placeholder="Color" value={product.color} onChange={handleChange} id='color'/> */}
        <fieldset>
          <legend>Available products Colors</legend>
          <input
            type="radio"
            id="Blue"
            name="color"
            value="Blue"
            onchange={handleChange}
            checked={product.color === "Blue"}
          />
          <label htmlFor="Blue">Blue</label>
          <input
            type="radio"
            id="Black"
            name="color"
            value="Black"
            onchange={handleChange}
            checked={product.color === "Black"}
          />
          <label htmlFor="Black">Black</label>
          <input
            type="radio"
            id="Red"
            name="color"
            value="Red"
            onchange={handleChange}
            checked={product.color === "Red"}
          />
          <label htmlFor="Red">Red</label>
          <input
            type="radio"
            id="Orange"
            name="color"
            value="Orange"
            onchange={handleChange}
            checked={product.color === "Orange"}
          />
          <label htmlFor="Black">Orange</label>
          <input
            type="radio"
            id="Purple"
            name="color"
            value="Purple"
            onchange={handleChange}
            checked={product.color === "Purple"}
          />
          <label htmlFor="Purple">Purple</label>
        </fieldset>
        <label htmlFor="newStock">New Product?</label>
        <input
          type="checkbox"
          name="newStock"
          checked={product.newStock}
          onChange={handleChange}
          id="newStock"
        />
        <label htmlFor="category">Choose a Category for the Product</label>
        <select
          id="category"
          value={product.category}
          onChange={handleChange}
          name="category"
        >
          <option value="Mac">--Choose a Category--</option>
          <option value="Mac">Mac</option>
          <option value="Iphone">Iphone</option>
          <option value="Ipad">Ipad</option>
          <option value="Apple Watch">Apple Watch</option>
          <option value="Apple TV">Apple TV</option>
          <option value="Air Pods">Air Pods</option>
        </select>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
