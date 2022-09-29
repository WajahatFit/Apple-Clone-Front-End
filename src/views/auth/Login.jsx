import axios from "axios";
import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../auth/Login.css";

export default function Login() {
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const [showPin, setShowPin] = useState("password");
  const [user, setUser] = useState({
    email: "",
    password: "",
    profilePic: "",
  });
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();

  const handleShowPin = (e) => {
    if (showPin === "password") {
      setShowPin("text");
      return;
    }
    setShowPin("password");
  };

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        user
      );
      toast.success("Welcome back!");
      storeToken(response.data.authToken);
      authenticateUser();
      navigate("/");
    } catch (error) {
      toast.error(`${errorMessage}`);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <div class="context">
        <form
          onSubmit={handleSubmit}
          className="min-h-screen flex justify-center items-center"
        >
          <div className="absolute w-60 h-60 rounded-xl bg-purple-300 hidden md:block"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-purple-300 hidden md:block"></div>
          <div className="py-14 px-14 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Login
              </h1>
              <p className="w-80 text-center text-lg mb-8 font-semibold text-slate-500 tracking-wide">
                Enter your credentials
              </p>
            </div>
            <div className="space-y-4">
              <input
                placeholder="Email Addres"
                className=" block text-2xl py-3 px-4 rounded-lg w-full border outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <input
                placeholder="Password"
                className="block text-2xl py-3 px-4 rounded-lg w-full border outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
                type={showPin}
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <button
                className="cursor-pointer pt-2 rounded-full baseline hover:text-sky-500 mb-4'"
                onClick={handleShowPin}
              >
                {showPin === "password" ? "Show" : "Hide"} password
              </button>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="py-3 w-64 text-2xl text-white bg-black rounded-2xl hover:bg-sky-500"
              >
                Login
              </button>
              <p className="mt-4 text-lg">
                Not a member?{" "}
                <Link to="/signup">
                  <span className="underline cursor-pointer hover:text-sky-500">
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
