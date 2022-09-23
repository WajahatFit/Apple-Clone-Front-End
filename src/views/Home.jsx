import React from "react";
import { Link } from "react-router-dom";
import iPhone from "../images/iphone14.jpeg";
import aWatch from '../images/AppleWatch-homw.jpeg'
import iPad from '../images/iPadPro.png'
import airpods from '../images/airpods.png'
import macbook from '../images/macbookpro.jpeg'
import macbookAir from '../images/macbookAir.webp'
import m2 from '../images/mac-m2-chip.webp'
import appleCard from '../images/card.jpeg'
import Footer from "../components/Footer";


function Home() {
  return (
    <div className="font-sans">
      <section id='iPhone' className="flex flex-col mx-auto bg-balck">
        <div className="flex flex-col bg-black items-center tracking-widest">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-4">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bigger & Faster
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center text-lightGray bg-black mt-10 font-semibold ">
            iPhone 14 PRO
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8 md:absolute md:bottom-0 relative top-80">
                      <Link to='/iPhone'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/iPhone'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8" src={iPhone} alt="iPhone 14" />
        </div>
          </section>
          <section id='AppleWatch'>
          <div className="flex flex-col bg-lightGrey items-center tracking-widest w-full">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
            ++ Durability 
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Apple Watch Series 8
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8">
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8" src={aWatch} alt="Apple Watch" />
        </div>
          </section>
          <section id='iPad'>
          <div className="flex flex-col bg-black items-center tracking-widest w-full">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            It's Simple. It's Pro.
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            iPad Pro 2022
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8">
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8" src={iPad} alt="iPad" />
        </div>
          </section>
          <section id='AirPods' className="bg-black">
          <div className="flex flex-col bg-black items-center tracking-widest w-full">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Macbook Pro M2. Quick fuse...
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Become Unstoppable with M2
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8">
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8 md:mb-8" src={macbook} alt="macbook" />
        </div>
          </section>
          <section id='multi' className="bg-black flex flex-col items-center md:flex-row">
          <div className="flex flex-col bg-black items-center tracking-widest w-full md:w-1/2">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            AirPods Pro 
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Magic like you never heard.
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8">
                      <Link to='/airpods'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/airpods'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8 md:mb-8" src={airpods} alt="airpods" />
              </div>
              <div className="flex flex-col bg-black items-center tracking-widest w-full md:w-1/2">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            M2 Chip 
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Thin like air, fast as light.
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8">
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8 md:mb-8" src={m2} alt="m2 chip" />
        </div>
          </section>
          <section id='multiSec' className="bg-white flex flex-col items-center md:flex-row">
          <div className="flex flex-col bg-lightWhite items-center tracking-widest w-full md:w-1/2">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Apple Card 
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Make your day to day payments with Apple Card.
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8">
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8 md:mb-8" src={appleCard} alt="card" />
              </div>

              <div className="flex flex-col bg-lightGrey items-center tracking-widest w-full md:w-1/2">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl lg:text-center font-extrabold mt-12">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            AirPods Pro 
                      </span>
          </div>
          <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center m-10 font-semibold ">
            Magic like you never heard.
                  </h1>
                  <div className="flex flex-row justify-center mx-auto space-x-8">
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Buy {">"}</h1></Link>
                      <Link to='/Watch'><h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2">Learn More {">"}</h1></Link>
          </div>
                  <img className="w-full md:w-1/2 mt-8 md:mb-8" src={airpods} alt="airpods" />
        </div>
          </section>
          <Footer />
    </div>
  );
}

export default Home;
