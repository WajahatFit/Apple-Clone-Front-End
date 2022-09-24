import React, { useState, useEffect } from "react";
import axios from "axios";
import cartImg from "../images/undraw_empty_cart_co35.svg";
import { Link } from "react-router-dom";

export default function Cart() {
  const storedToken = localStorage.getItem("authToken");
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/cart`,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        );
        setCart(response.data.data[0].products);
      } catch (error) {
        // Check in
      }
    };
    getCart();
    // eslint-disable-next-line
  }, []);
  const handleDelete = async (productId) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/cart/delete/` + productId,
        {},
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      setCart(response.data.data.products);
      console.log(cart);
    } catch (error) {
      // Check in
    }
  };
  return (
    <div className="font-sans h-full bg-black">
      {cart && cart.length === 0 && (
        <div className="flex flex-col justify-center items-center space-y-8">
          <img
            className="w-full p-4 md:w-2/6"
            src={cartImg}
            alt="Empty Cart svg"
          />
          <p className="text-2xl md:text-4xl">Empty Cart</p>
          <Link to="/products">
            <button className="text-sky-600 rounded-full p-4 text-lightWhite text-xl font-bold hover:underline hover:underline-offset-2 md:text-3xl" >Discover Products{' >'}</button>
          </Link>
        </div>
      )}
      {cart &&
        cart.map((item) => {
          console.log(item);
          return (
            <div
              key={item._id}
              className="flex flex-col justify-center items-center"
            >
              <div className="container flex flex-row items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 m-6 rounded-lg">
                <div className="flex flex-col items-center space-y-6 p-6 w-1/2">
                  {item.newStock ? (
                    <h2 className="text-white text-2xl">
                      {" "}
                      <span className="text-white text-3xl">New</span>{" "}
                      {item.title}
                    </h2>
                  ) : (
                    <h1 className="text-2xl">{item.title}</h1>
                  )}
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-4xl">{item.price}$</p>
                </div>
                <div className="flex flex-col space-y-6 p-6 w-1/2">
                  <h1 className="text-black text-xl">
                    Product Id:{" "}
                    <span className="text-gray-600 text-lg">{item._id}</span>
                  </h1>
                </div>
                <div className="flex items-center">
                  <Link to="/">
                    <button className="bg-brightRed p-4 rounded-full text-white m-4">
                      Checkout
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-brightRed p-4 rounded-full text-white m-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
