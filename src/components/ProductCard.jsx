import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import axios from "axios";

export default function ProductCard({ product }) {
    const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem('authToken');
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const addToCart = axios.post(`${process.env.REACT_APP_API_URL}/cart/checkcart`, { productId: product._id }, { headers: { Authorization: `Bearer ${storedToken}` } });
            console.log(addToCart)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="">
           
            <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>  <p className=' text-md text-darkGrayishBlue'>{product.newStock ? "New" : ""}</p>
            {user.role === "admin" ? (
                <button className='text-sky-400'><Link to={"/edit/" + product._id}>Edit</Link></button>) : ("")}</div>
                <img class="p-8 rounded-t-lg" src={product.images[0]} alt={ product.title} />
    <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <form onSubmit={handleSubmit}><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button></form>
        </div>
    </div>
</div>
      </div>


  );
}
