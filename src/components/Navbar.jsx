import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../images/project logo.png";
import 'animate.css';


export default function Navbar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);
  return (
    <div className="bg-black bg-opacity-80 w-screen fixed top-0 left-0 z-50">
      <nav className=" animate__fadeInRight container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <NavLink to="/">
              <img src={logo} alt="orange logo" className="w-20" />
            </NavLink>
          </div>
          <ul className="hidden md:flex space-x-12 mt-2">
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "text-white text-xl"
                    : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "text-white text-xl"
                    : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "text-white text-xl"
                    : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                }
                to="/Mac"
              >
                Mac
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "text-white text-xl"
                    : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                }
                to="/watch"
              >
                Watch
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "text-white text-xl"
                    : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                }
                to="/iphone"
              >
                iPhone
              </NavLink>
            </li>
            {user && user.role === "admin" && (
              <li>
                <NavLink
                  className={(element) =>
                    element.isActive
                      ? "text-white text-xl"
                      : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                  }
                  to="/create"
                >
                  Create Product
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  className={(element) =>
                    element.isActive
                      ? "text-white text-xl"
                      : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                  }
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "text-white text-xl"
                    : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "text-white text-xl"
                    : "text-slate-300 text-xl hover:text-darkGrayishBlue"
                }
                to="/profile"
              >
                <button className="">Profile</button>
              
              </NavLink>
            </li>
          </ul>
          <div>
          {isLoggedIn && (
            <button
              className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline text-xl hover:bg-brightRedLight"
              onClick={() => logOutUser()}
            >
              Log out
            </button>
            )}
          {!isLoggedIn && (
            <button>
              <NavLink
                className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline text-lg hover:bg-brightRedLight"
                to="/login"
              >
                Login
              </NavLink>
            </button>
          )}
          </div>
          
        </div>
      </nav>
    </div>
  );
}
