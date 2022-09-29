import React from "react";
import difference from "../images/undraw_contrast_re_hc7k.svg";

export default function Section1() {
  return (
    <div className="bg-gradient-to-b from-slate-300">
      <section className=" p-4">
        <div className="container flex flex-col px-20 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Orange Store?
              <img
                src={difference}
                alt="difference"
                className="mx-auto my-5 w-2/4 md:w-3/5 md:pt-5"
              ></img>
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Orange Store isn't just a store it's more than that. We offer you
              the best deals for Apple products on every wednesday. Follow The
              Steps to get the Discount.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Signup on Orange Store
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Signup on Orange Store
                </h3>
                <p className="text-darkGrayishBlue">
                  Enter Your Email, User Name and Password to get registered
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Discover Huge Range Of Apple Products at Our Orange Store
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Discover Huge Range Of Apple Products at Our Orange Store
                </h3>
                <p className="text-darkGrayishBlue">
                  Make Sure That Every Time You Sign In At Orange Store Save
                  Your Email And Password Into The Browser Or Wherever You like.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Add Your Products to the Cart and Checkout
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Add Your Products to the Cart and Checkout
                </h3>
                <p className="text-darkGrayishBlue">
                  It's Really Important For You To Know That Our Prices are very
                  Competitive and Our Clients Buy Huge Stock as we have
                  Professionals of the Retail Sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
