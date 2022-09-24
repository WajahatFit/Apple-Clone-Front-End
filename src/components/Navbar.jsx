import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../images/project logo.png";

export default function Navbar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="relative container mx-auto">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={logo} alt="orange logo" className="w-40" />
          </div>
          <ul className="hidden md:flex space-x-12">
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "selected text-2xl"
                    : "hover:text-darkGrayishBlue text-xl"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink
                  className={(element) =>
                    element.isActive
                      ? "selected text-2xl"
                      : "hover:text-darkGrayishBlue text-xl"
                  }
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  className={(element) =>
                    element.isActive
                      ? "selected text-2xl"
                      : "hover:text-darkGrayishBlue text-xl"
                  }
                  to="/create"
                >
                  Create Product
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className={(element) =>
                  element.isActive
                    ? "selected text-2xl"
                    : "hover:text-darkGrayishBlue text-xl"
                }
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
            <li
              className="hover:text-darkGrayishBlue text-xl"
              onClick={() => navigate(-1)}
            >
              Go back
            </li>
          </ul>
          {isLoggedIn && (
            <button
              className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              onClick={() => logOutUser()}
            >
              Log out
            </button>
          )}
          {!isLoggedIn && (
            <button>
              <NavLink
                className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                to="/login"
              >
                Login
              </NavLink>
            </button>
          )}
        </div>
      </nav>
      <svg
        className="ms:block fixed top-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,256L40,250.7C80,245,160,235,240,245.3C320,256,400,288,480,277.3C560,267,640,213,720,202.7C800,192,880,224,960,245.3C1040,267,1120,277,1200,277.3C1280,277,1360,267,1400,261.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
