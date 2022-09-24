import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";



export default function Products() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/products"
        );
        setProducts(response.data.data);
        setFilteredProducts(response.data.data);
        console.log(products)
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        `${process.env.REACT_APP_API_URL}/cart/checkcart`,
        { productId: products._id },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      toast.success("Products added to the cart");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center md: flex md:flex-row bg-black">
      {/* <img className="user--img" src={user.profilePic} alt={user.email}></img> */}
      {!products && <p>No products found in the DB</p>}
      {products &&
        filteredProducts.map((product) => {
          return (
            <div className="" key={ product.title }>
            <section id="products">
          <div className="flex flex-col bg-black items-center tracking-widest md:w-1/2 md:flex-wrap lg:flex-wrap lg-space-x-8">
            <div class="text-3xl md:text-4xl md:text-center lg:text-4xl md:py-4 lg:text-center font-extrabold mt-8">
              <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {product.title}
              </span>
            </div>
            <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center text-lightGray bg-black mt-10 font-semibold ">
              {product.details}
            </h1>
            {product.images && product.images.map(img => <img className="w-full md:w-1/2 mt-8 lg:w-24 " src={img} alt={product.title} />)}
                </div>
                { user && user.role === 'admin' ? <button onClick={handleSubmit}>edit</button>: ''}
        </section>
            </div>
          );
        })}
    </div>
  );
}
