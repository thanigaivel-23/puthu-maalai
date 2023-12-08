import React from "react";
import gift from "../../../assets/img/gift.jpg";
import makeup from "../../../assets/img/makeup.avif";

const FifthBanner = () => {
  return (
    <div className="flex  justify-center items-center">
      <ul className=" w-5/6  flex flex-col lg:flex-row gap-7 ">
        <li
          style={{
            backgroundImage: `url(${makeup})`,
          }}
          className=" lg:w-5/6 h-36 md:h-64 lg:h-72 bg-cover shadow-2xl"
        >
          <div className="pl-8 md:pl-20">
            <h3 className="font-bold test-xl md:text-4xl   pt-7 md:pt-16">New Brands</h3>
            <p className="pt-1  md:pt-3 text-xs md:text-base font-semibold">Branded Makeup Products</p>

            <button
              type="sumbit"
              className="mt-2 md:mt-4 bg-purple-950 text-xs md:text-base text-white px-3 py-1 md:py-2 rounded-lg text-center self-start"
            >
              Shop Now
            </button>
          </div>
        </li>

        <li
          style={{
            backgroundImage: `url(${gift})`,
          }}
          className=" lg:w-5/6 h-36 md:h-64 lg:h-72 bg-cover shadow-2xl"
        >
          <div className="pl-8 md:pl-20">
            <h3 className="font-bold test-xl md:text-4xl pt-7 md:pt-16">GET 500</h3>
            <h3 className="font-bold test-xl md:text-4xl  ">Shopping Free</h3>
            <p className="pt-1  md:pt-3 text-xs md:text-base font-semibold ">*Order above 2000/-</p>
            <p className="pt-1  md:pt-3 text-xs md:text-base font-semibold ">Get exclusive offer </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FifthBanner;
