import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import p1 from "../../../../assets/img/p1.jpeg";
import p2 from "../../../../assets/img/p2.webp";
import p3 from "../../../../assets/img/p3.jpg";
import p4 from "../../../../assets/img/p4.jpeg";
import p5 from "../../../../assets/img/p5.jpeg";
import p6 from "../../../../assets/img/p6.webp";
import p7 from "../../../../assets/img/p7.webp";

import N from "./N";
import P from "./P";
import "../../../../input.css";

const SecondCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <N />,
    prevArrow: <P />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="mb-10" {...settings}>
      <div className="md:w-72 md:mt-10 flex justify-center flex-col p-2 md:p-5 relative  md:static">
        <p className="bg-rose-500 text-white  w-fit px-3 mb-2 rounded-sm absolute top-5 md:static opacity-90 md:opacity-100  text-xs md:text-base">
          Women
        </p>
        <img src={p1} alt="" className="h-50 w-full object-cover rounded-md" />

        <h3 className="font-bold mt-2 text-center  text-xs md:text-lg">
          Sony Camera
        </h3>
        <p className=" text-center text-gray-500 text-xs mt-1 md:text-base">
          product description
        </p>

        <p className=" text-center mt-1 font-bold text-xs md:text-base">
          Rs. 49,999/-
        </p>
        <div className="flex justify-center">
          <button
            type="sumbit"
            className=" mt-2  font-bold border-2 border-gray-200 text-xs md:text-base px-2 py-1 md:px-3 md:py-2"
          >
            add to cart
          </button>
        </div>
      </div>

      <div className="md:w-72 md:mt-10 flex justify-center flex-col p-2 md:p-5 relative md:static">
        <p className="bg-rose-500 text-white  w-fit px-3 mb-2 rounded-sm absolute top-5 md:static opacity-90 md:opacity-100  text-xs md:text-base">
          Women
        </p>
        <img src={p2} alt="" className="h-50 w-full object-cover rounded-md" />

        <h3 className="font-bold mt-2 text-center  text-xs md:text-lg">
          Lipstick
        </h3>
        <p className=" text-center text-gray-500 text-xs mt-1 md:text-base">
          product description
        </p>

        <p className=" text-center mt-1 font-bold text-xs md:text-base">
          Rs. 1,999/-
        </p>
        <div className="flex justify-center">
          <button
            type="sumbit"
            className=" mt-2  font-bold border-2 border-gray-200 text-xs md:text-base px-2 py-1 md:px-3 md:py-2"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 flex justify-center flex-col p-2 md:p-5 relative md:static">
        <p className="bg-rose-500 text-white  w-fit px-3 mb-2 rounded-sm absolute top-5 md:static opacity-90 md:opacity-100  text-xs md:text-base">
          Women
        </p>
        <img src={p3} alt="" className="h-50 w-full object-cover rounded-md" />

        <h3 className="font-bold mt-2 text-center  text-xs md:text-lg">
          Laptop
        </h3>
        <p className=" text-center text-gray-500 text-xs mt-1 md:text-base">
          product description
        </p>

        <p className=" text-center mt-1 font-bold text-xs md:text-base">
          Rs. 67,999/-
        </p>
        <div className="flex justify-center">
          <button
            type="sumbit"
            className=" mt-2  font-bold border-2 border-gray-200 text-xs md:text-base px-2 py-1 md:px-3 md:py-2"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 flex justify-center flex-col p-2 md:p-5 relative md:static">
        <p className="bg-rose-500 text-white  w-fit px-3 mb-2 rounded-sm absolute top-5 md:static opacity-90 md:opacity-100  text-xs md:text-base">
          Women
        </p>
        <img src={p4} alt="" className="h-50 w-full object-cover rounded-md" />

        <h3 className="font-bold mt-2 text-center  text-xs md:text-lg">
          Nail Spolish
        </h3>
        <p className=" text-center text-gray-500 text-xs mt-1 md:text-base">
          product description
        </p>

        <p className=" text-center mt-1 font-bold text-xs md:text-base">
          Rs. 239/-
        </p>
        <div className="flex justify-center">
          <button
            type="sumbit"
            className=" mt-2  font-bold border-2 border-gray-200 text-xs md:text-base px-2 py-1 md:px-3 md:py-2"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 flex justify-center flex-col p-2 md:p-5 relative md:static">
        <p className="bg-rose-500 text-white  w-fit px-3 mb-2 rounded-sm absolute top-5 md:static opacity-90 md:opacity-100  text-xs md:text-base">
          Women
        </p>
        <img src={p5} alt="" className="h-50 w-full object-cover rounded-md" />

        <h3 className="font-bold mt-2 text-center  text-xs md:text-lg">
          Bells
        </h3>
        <p className=" text-center text-gray-500 text-xs mt-1 md:text-base">
          product description
        </p>

        <p className=" text-center mt-1 font-bold text-xs md:text-base">
          Rs. 999/-
        </p>
        <div className="flex justify-center">
          <button
            type="sumbit"
            className=" mt-2  font-bold border-2 border-gray-200 text-xs md:text-base px-2 py-1 md:px-3 md:py-2"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 flex justify-center flex-col p-2 md:p-5 relative md:static">
        <p className="bg-rose-500 text-white  w-fit px-3 mb-2 rounded-sm absolute top-5 md:static opacity-90 md:opacity-100  text-xs md:text-base">
          Women
        </p>
        <img src={p6} alt="" className="h-50 w-full object-cover rounded-md" />

        <h3 className="font-bold mt-2 text-center  text-xs md:text-lg">Lens</h3>
        <p className=" text-center text-gray-500 text-xs mt-1 md:text-base">
          product description
        </p>

        <p className=" text-center mt-1 font-bold text-xs md:text-base">
          Rs. 19,000/-
        </p>
        <div className="flex justify-center">
          <button
            type="sumbit"
            className=" mt-2  font-bold border-2 border-gray-200 text-xs md:text-base px-2 py-1 md:px-3 md:py-2"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 flex justify-center flex-col p-2 md:p-5 relative md:static">
        <p className="bg-rose-500 text-white  w-fit px-3 mb-2 rounded-sm absolute top-5 md:static opacity-90 md:opacity-100  text-xs md:text-base">
          Women
        </p>
        <img src={p7} alt="" className="h-50 w-full object-cover rounded-md" />

        <h3 className="font-bold mt-2 text-center  text-xs md:text-lg">
          Face Cream
        </h3>
        <p className=" text-center text-gray-500 text-xs mt-1 md:text-base">
          product description
        </p>

        <p className=" text-center mt-1 font-bold text-xs md:text-base">
          Rs. 99/-
        </p>
        <div className="flex justify-center">
          <button
            type="sumbit"
            className=" mt-2  font-bold border-2 border-gray-200 text-xs md:text-base px-2 py-1 md:px-3 md:py-2"
          >
            add to cart
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default SecondCarousel;
