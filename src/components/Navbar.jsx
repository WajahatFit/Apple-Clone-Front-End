import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={(element) => (element.isActive ? "selected" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink
              className={(element) => (element.isActive ? "selected" : "")}
              to="/signup"
            >
              Sign up
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink
              className={(element) => (element.isActive ? "selected" : "")}
              to="/login"
            >
              Login
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink
              className={(element) => (element.isActive ? "selected" : "")}
              to="/private"
            >
              Private view
            </NavLink>
          </li>
        )}
        
        <li>
          <NavLink
            className={(element) => (element.isActive ? "selected" : "")}
            to="/create"
          >
            Create Product
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <button onClick={() => logOutUser()}>Log out</button>
          </li>
        )}
        <li>
          <button onClick={() => navigate(-1)}>Go back</button>
        </li>
      </ul>
    </div>
  );
}
