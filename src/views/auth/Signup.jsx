import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const [password, setPassword] = useState("");
  const [passwordControl, setPasswordControl] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (password !== passwordControl) {
      setErrorMessage("Passwords don't match");
    } else {
      setErrorMessage(undefined);
    }
    // eslint-disable-next-line
  }, [passwordControl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        username: user.username,
        email: user.email,
        password,
      });
      navigate("/login");
    } catch (error) {
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
                Register
              </h1>
              <p className="w-80 text-center text-lg mb-8 font-semibold text-slate-500 tracking-wide cursor-pointer">
                Enter your credentials
              </p>
            </div>
            <div className="space-y-4">
              <input
                placeholder="Username"
                className="block text-lg py-3 px-4 rounded-lg w-full border outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
              <input
                placeholder="Email Addres"
                className="block text-lg py-3 px-4 rounded-lg w-full border outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <input
                placeholder="Enter your password"
                className="block text-lg py-3 px-4 rounded-lg w-full border outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Re-enter your password"
                className="block text-lg py-3 px-4 rounded-lg w-full border outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
                type="password"
                name="passwordControl"
                value={passwordControl}
                onChange={(e) => setPasswordControl(e.target.value)}
              />
            </div>
            <p className="hidden">
              {errorMessage && toast.error(`${errorMessage}`)}
            </p>
            <p className="w-80 text-center text-xs mt-4 mb-8 text-slate-400 tracking-wide cursor-pointer">
              <span className="text-red-500 mr-4 text-lg mt-6">*</span>
              <span className="font-semibold text-black">Password: </span>
              Minimum length is 6 must include capital letters, numbers &
              symbols.
            </p>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
              >
                Login
              </button>
              <p className="mt-4 text-lg">
                Already a member?{" "}
                <Link to="/login">
                  <span className="underline cursor-pointer">Login</span>
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
