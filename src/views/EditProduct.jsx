import React, { useState, useEffect } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import axios from "axios";
import create from '../images/undraw_up_to_date_re_nqid.svg'
import toast from 'react-hot-toast';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const storedToken = localStorage.getItem('authToken');

  useEffect(() => {
    const getData = async () => {
      try {
        const product = await axios.get(
          `${process.env.REACT_APP_API_URL}/products/${id}`
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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/products/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } });
      toast.success('Product deleted successfully')
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="style">
      <h1 className="text-black text-3xl text-bold text-center mt-4 mb-6 font-extrabold" >Edit product</h1>
      <img src={ create} alt='create' className="w-40 mx-auto" />
      {product && <form onSubmit={handleSubmit}>
        <input
                  required
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
        {/* <input type="radio" name="color" placeholder="Color" value={product.color} onChange={handleChange} id='color'/> */}
        <div className="flex flex-row justify-center items-center">
        <fieldset className="space-x-2">
          <legend className="relative left-4 text-black text-xl font-semibold py-4 text-center" >Available products Colors</legend>
          <input
            type="radio"
            id="Blue"
            name="color"
            value="Blue"
            onChange={handleChange}
            checked={product.color === "Blue"}
          />
          <label htmlFor="Blue"></label>
          <input
            type="radio"
            id="Black"
            name="color"
            value="Black"
            onChange={handleChange}
            checked={product.color === "Black"}
          />
          <label htmlFor="Black"></label>
          <input
            type="radio"
            id="Red"
            name="color"
            value="Red"
            onChange={handleChange}
            checked={product.color === "Red"}
          />
          <label htmlFor="Red"></label>
          <input
            type="radio"
            id="Orange"
            name="color"
            value="Orange"
            onChange={handleChange}
            checked={product.color === "Orange"}
          />
          <label htmlFor="Black"></label>
          <input
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
        <label className='text-lg text-sky-500' htmlFor="newStock">New Product?</label>
          <input
            className="form-checkbox h-5 w-5 text-red-600"
          type="checkbox"
          name="newStock"
          checked={product.newStock}
          onChange={handleChange}
          id="newStock"
        />
        </div>

        <label className="flex flex-row m-4 " htmlFor="category">Choose a Category for the Product</label>
        <select
          id="category"
          value={product.category}
          onChange={handleChange}
          name="category"
        >
          <option className=".list">--Choose a Category--</option>
          <option value="Mac">Mac</option>
          <option value="Iphone">Iphone</option>
          <option value="Ipad">Ipad</option>
          <option value="Apple Watch">Apple Watch</option>
          <option value="Apple TV">Apple TV</option>
          <option value="Air Pods">Air Pods</option>
        </select>

        <button className=" text-white p-4 rounded-xl mb-4 bg-indigo-500 hover:bg-brightRed active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 drop-shadow-lg" type="submit">Save</button>
        <button className="text-white p-4 rounded-xl mb-4 bg-indigo-500 hover:bg-brightRed active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 drop-shadow-lg" onClick={handleDelete}>Delete product</button>

      </form>
      }
    </div>
  );
}
