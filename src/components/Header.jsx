import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/project logo.png";

export default function Header({
  handleCheaper,
  handleSearch,
  handleMoreExpensive,
  handleSort,
  searchProduct,
  showLinks,
}) {
  return (
    <div className="font-sans bg-white mx-auto bg-red-500 h-fit rounded-xl w-screen flex items-center  justify-around mt-14">
      <div className="flex flex-row items-center justify-center mt-0">
        <img className="w-1/3 mx-auto" src={logo} alt="orangee logo" />
        <h1 className="text-5xl w-full text-center text-lightWhite">
          discover products{" "}
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center space-x-8">
        <div className="flex items-center justify-around space-x-4">
          <FontAwesomeIcon className=" text-3xl" icon={faMagnifyingGlass} />
          <input
            className="w-96 p-4 bg-lightGrey rounded-xl"
            type="text"
            value={searchProduct}
            placeholder="What are you looking for?"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-xl space-y-4 text-white">
          <button
            className="transition-all bg-sky-500 p-4 rounded-full text-white"
            onClick={handleSort}
          >
            {" "}
            Sort by Price{" "}
            {!showLinks ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </button>
          <div
            className={!showLinks ? "hidden" : "flex flex-col"}
            id={showLinks ? "hidden" : "flex flex-col"}
          >
            <button
              className="hover:underline hover:underline-3 hover:text-sky-400 hover:text-2xl hover:ease-in duration-300"
              onClick={handleCheaper}
            >
              Low to High
            </button>
            <button
              className="hover:underline hover:underline-3 hover:text-sky-400 hover:text-2xl hover:ease-in duration-300"
              onClick={handleMoreExpensive}
            >
              High to Low
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
