import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

export default function Products() {
  const [filtered, setFiltered] = useState(null);
  const storedToken = localStorage.getItem("authToken");
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/products`
        );

        setFiltered(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
    // eslint-disable-next-line
  }, []);
  const addToCart = async (productId) => {
    try {
      axios.post(
        `${process.env.REACT_APP_API_URL}/cart/checkcart`,
        { productId },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      toast.success("Products added to the cart");
    } catch (err) {
      console.error(err);
      toast.error("Unable to add products");
    }
  };

  return (
    <div className="capitalize flex flex-col sm:flex sm:flex-row sm:justify-around sm:items-start sm:flex-wrap bg-black sm:w-full p-4">
      {/* <img className="user--img" src={user.profilePic} alt={user.email}></img> */}
      {!filtered && <p>No products found in the DB</p>}
      {filtered &&
        filtered
          .filter((product) => product.category === "Air Pods")
          .map((product) => {
            return (
              <div className="" key={product.title}>
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
                      {isLoggedIn && isLoggedIn ? (
                        <button
                          onClick={() => addToCart(product._id)}
                          className="text-sky-500 text-2xl hover:underline hover:underline-offset-2"
                        >
                          add to Cart {">"}
                        </button>
                      ) : (
                        <Link to="/login">
                          <button className="text-sky-600 text-xl hover:underline hover:underline-offset-2">
                            Login to add products in cart{" >"}
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
    </div>
  );
}
