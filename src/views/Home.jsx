import React from "react";
import { Link } from "react-router-dom";
import iPhone from "../images/iphone14.jpeg";
import aWatch from "../images/AppleWatch-homw.jpeg";
import iPad from "../images/iPadPro.png";
import airpods from "../images/airpods.png";
import macbook from "../images/macbookpro.jpeg";
import m2 from "../images/mac-m2-chip.webp";
import appleCard from "../images/card.jpeg";
import logo from "../images/orange-svgrepo-com.svg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="font-sans">
      <section id="iPhone" className="flex flex-col mx-auto bg-balck">
        <div className="flex flex-col bg-black items-center tracking-widest md:p-4 p-6 space-y-6">
          <div className="text-5xl text-center md:text-6xl md:text-center lg:text-8xl md:py-4 lg:text-center font-extrabold mt-8 p-4">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bigger & Faster
            </span>
            <p className="text-red-600 text-sm uppercase mt-6">new</p>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center text-lightGray bg-black m-6 font-semibold ">
            iPhone 14 PRO
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8 p-4 ">
            <Link to="/iPhone">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Buy {">"}
              </h1>
            </Link>
            <Link to="/iPhone">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Learn More {">"}
              </h1>
            </Link>
          </div>
          <img className="w-full md:w-1/2 mt-8" src={iPhone} alt="iPhone 14" />
        </div>
      </section>
      <section id="AppleWatch">
        <div className="flex flex-col bg-lightGrey items-center tracking-widest w-full space-y-4">
          <div className="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              ++ Durability
            </span>
          </div>
          <p className="text-red-600 text-sm uppercase">new</p>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Apple Watch Series 8
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8">
            <Link to="/watch">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Buy {">"}
              </h1>
            </Link>
            <Link to="/watch">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Learn More {">"}
              </h1>
            </Link>
          </div>
          <img
            className="w-full md:w-1/2 mt-8"
            src={aWatch}
            alt="Apple Watch"
          />
        </div>
      </section>
      <section id="iPad">
        <div className="flex flex-col bg-black items-center tracking-widest w-full">
          <div className="text-5xl text-center md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              It's Simple. It's Pro.
            </span>
            <p className="text-red-600 text-sm uppercase mt-6">new</p>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-6 font-semibold ">
            iPad Pro 2022
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8">
            <Link to="/iPad">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Buy {">"}
              </h1>
            </Link>
            <Link to="/iPad">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Learn More {">"}
              </h1>
            </Link>
          </div>
          <img className="w-full md:w-1/2 mt-8" src={iPad} alt="iPad" />
        </div>
      </section>
      <section id="AirPods" className="bg-black">
        <div className="flex flex-col bg-black items-center tracking-widest w-full">
          <div className="text-5xl text-center md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Macbook Pro M2.
            </span>
            <p className="text-red-600 text-sm uppercase mt-4">new</p>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-6 font-semibold ">
            Become Unstoppable with M2
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8">
            <Link to="/mac">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Buy {">"}
              </h1>
            </Link>
            <Link to="/mac">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Learn More {">"}
              </h1>
            </Link>
          </div>
          <img
            className="w-full md:w-1/2 mt-8 md:mb-8"
            src={macbook}
            alt="macbook"
          />
        </div>
      </section>
      <section
        id="multi"
        className="bg-black flex flex-col items-center md:flex-row"
      >
        <div className="flex flex-col bg-black items-center tracking-widest w-full md:w-1/2">
          <div className="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              AirPods Pro
            </span>
            <p className="text-red-600 text-sm uppercase mt-4">new</p>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-6 font-semibold ">
            Magic like you never heard.
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8">
            <Link to="/airpods">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Buy {">"}
              </h1>
            </Link>
            <Link to="/airpods">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Learn More {">"}
              </h1>
            </Link>
          </div>
          <img
            className="w-full md:w-1/2 mt-8 md:mb-8"
            src={airpods}
            alt="airpods"
          />
        </div>
        <div className="flex flex-col bg-black items-center tracking-widest w-full md:w-1/2">
          <div className="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              M2 Chip
            </span>
            <p className="text-red-600 text-sm uppercase mt-4">new</p>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-6 font-semibold ">
            Thin like air, fast as light.
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8">
            <Link to="/Watch">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Buy {">"}
              </h1>
            </Link>
            <Link to="/Watch">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Learn More {">"}
              </h1>
            </Link>
          </div>
          <img
            className="w-full md:w-1/2 mt-8 md:mb-8"
            src={m2}
            alt="m2 chip"
          />
        </div>
      </section>
      <section
        id="multiSec"
        className="bg-white flex flex-col items-center md:flex-row bg-lightWhite"
      >
        <div className="flex flex-col bg-lightWhite items-center tracking-widest h-full w-full md:w-1/2">
          <div className="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              Apple Card
            </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Make your day to day payments with Apple Card.
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8">
            <Link to="/Watch">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Buy {">"}
              </h1>
            </Link>
            <Link to="/Watch">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Learn More {">"}
              </h1>
            </Link>
          </div>
          <img
            className="w-full md:w-1/2 mt-8 md:mb-8"
            src={appleCard}
            alt="card"
          />
        </div>

        <div className="flex flex-col bg-lightWhite items-center tracking-widest h-full w-full md:w-1/2">
          <div className="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-600">
              Orangee Store
            </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Upcoming Sale on 24 Feb
          </h1>
          <div className="flex flex-row justify-center mx-auto space-x-8">
            <Link to="/about">
              <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">
                Our mission {">"}
              </h1>
            </Link>
          </div>
          <img
            className="w-full md:w-2/6 mt-8 md:mb-8"
            src={logo}
            alt="airpods"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
