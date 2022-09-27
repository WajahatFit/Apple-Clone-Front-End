import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import "animate.css";

export default function Products() {
  const [products, setProducts] = useState(null);


  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/products`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="capitalize flex flex-col sm:flex sm:flex-row sm:justify-around sm:items-start sm:flex-wrap bg-black sm:w-full p-4">
      {/* <img className="user--img" src={user.profilePic} alt={user.email}></img> */}
      {!products && <p>No products found in the DB</p>}
      {products &&
        products.map((product) => {
          return (
            <div className="animate__fadeIn" key={product.title}>
              <Link to={"/products/" + product._id}>
                <div className="flex-1 flex flex-col items-center justify-center space-x-4 space-y-4 p-4">
                  <span className="text-3xl text-center md:text-5xl md:text-center lg:text-6xl md:py-4 lg:text-center font-extrabold mt-8  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    {product.title}
                  </span>
                  <p className="md:text-xl md:text-center lg:text-2xl lg:text-center text-center text-lightGray bg-black">
                    €{product.price} only
                  </p>
                  <h1 className=" md:text-xl md:text-center lg:text-2xl lg:text-center text-center text-lightGray bg-black">
                    {product.description}
                  </h1>
                  <div className="sm:w-60">
                    <img
                      className="w-full"
                      src={product.images[0]}
                      alt={product.title}
                    />
                  </div>
                  <div>
                    <Link to={"/products/" + product._id}>
                        <button className="text-sky-600 text-xl hover:underline hover:underline-offset-2">
                          Login to add products in cart{" >"}
                        </button>
                      </Link>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
