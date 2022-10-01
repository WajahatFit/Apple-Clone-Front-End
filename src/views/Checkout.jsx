import React from "react";
import { Link } from "react-router-dom";
import card from "../images/undraw_credit_card_payments_re_qboh.svg";
import wave from "../images/wave (1).svg";

export default function Checkout() {
  return (
    <div className=" bg-black font-sans flex flex-col items-center justify-around h-full md:flex-row uppercase p-12">
      <div className="w-1/2 bg-black rounded-3xl">
        <img
          className="w-full mx-auto my-4 lg:w-3/4"
          src={card}
          alt="credit card"
        />
        <img className="absolute top-0 md:-top-40 lg:-top-0 left-0" src={wave} alt="wave" />
      </div>
      <div className="w-1/2 flex flex-col rounded-3xl">
        <div className="flex flex-col justify-center items-center space-y-4 text-white text-3xl">
          <h2 className="pb-8">Enter your details</h2>
        </div>
        <div></div>

        <form className="flex flex-col p-8 space-x-4 space-y-6 items-center md:items-start">
          <label className="text-xl md:2xl text-lightWhite ml-4">
            User name
          </label>
          <input
            className="rounded-2xl p-4 md:px-4 border md:w-full m-4 text-sm md:text-xl"
            required
            type="text"
            placeholder="user name"
            name="username"
          />
          <label className="text-xl md:2xl text-lightWhite ml-4">Email</label>
          <input
            className="rounded-2xl p-4 md:px-4 border md:w-full m-4 text-sm md:text-xl"
            required
            type="email"
            name="email"
            placeholder="email"
          />
          <label className="text-xl md:2xl text-lightWhite ml-4">
            Credit card number
          </label>
          <input
            className="rounded-2xl p-4 md:px-4 border md:w-full m-4 text-sm md:text-xl"
            required
            id="ccn"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
          />
          <Link to="/success">
            <button
              className=" bg-sky-500 p-2 w-full md:p-6 mx-auto  text-sm md:text-4xl text-white rounded-xl hover:bg-green-700 hover:rounded-full hover:text-4xl hover:scale-125 hover:transition"
              type="submit"
            >
              PAY
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
