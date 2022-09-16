import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function ProductCard({ product }) {
    const { user } = useContext(AuthContext);
  return (
    <div>
      {user.role === "admin" ? (
        <Link to={"/edit/" + product._id}>Edit</Link>) : ("")}
      {product.newStock ? "    ||    NEW" : ""}
      <title>{product.title}</title>
      <p>{product.description}</p>
      <img src={product.images} alt={product.title} />
      <p>{product.price}$</p>
      <button>Buy Now</button>
    </div>
  );
}
