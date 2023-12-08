import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import N from "./N";
import P from "./P";
import p1 from "../../../../assets/img/p1.jpeg";
import p2 from "../../../../assets/img/p2.webp";
import p3 from "../../../../assets/img/p3.jpg";
import p4 from "../../../../assets/img/p4.jpeg";
import p5 from "../../../../assets/img/p5.jpeg";
import p6 from "../../../../assets/img/p6.webp";
import p7 from "../../../../assets/img/p7.webp";
import "../../../../input.css";

const Carousel = () => {
  const settings = {
    infinite: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <Slider {...settings}>
      <div className="md:w-72 md:mt-10 shadow-md border p-2 md:p-5 rounded-lg">
        <img
          src={p1}
          alt=""
          className="md:h-50 w-full object-cover rounded-md"
        />
        <p className="bg-rose-500 text-white w-fit px-3 mt-2 rounded-sm text-xs md:text-base">
          20% Discount
        </p>
        <h3 className="font-bold pt-1 text-xs md:text-lg">Sony Camera</h3>
        <p className="text-gray-500 pt-1 text-xs md:text-base">
          product description
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold -ml-2  pt-1 text-xs md:text-base">
            Rs.49,999/-
          </p>
          <button
            type="sumbit"
            className="rounded-lg font-bold bg-gray-300 my-1 px-1 md:px-1 py-1 md:py-2 text-xs md:text-base"
          >
            add to cart
          </button>
        </div>
      </div>

      <div className="md:w-72 md:mt-10 shadow-md border p-2 md:p-5 rounded-lg">
        <img
          src={p2}
          alt=""
          className="md:h-50 w-full object-cover rounded-md"
        />
        <p className="bg-rose-500 text-white w-fit px-3 mt-2 rounded-sm text-xs md:text-base">
          20% Discount
        </p>
        <h3 className="font-bold pt-1 text-xs md:text-lg">Lipstick</h3>
        <p className="text-gray-500 pt-1 text-xs md:text-base">
          product description
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold -ml-2  pt-1 text-xs md:text-base">
            Rs.1,999/-
          </p>
          <button
            type="sumbit"
            className="rounded-lg font-bold bg-gray-300 my-1 px-1 md:px-3 py-1 md:py-2 text-xs md:text-base"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 shadow-md border p-2 md:p-5 rounded-lg">
        <img
          src={p3}
          alt=""
          className="md:h-50 w-full object-cover rounded-md"
        />
        <p className="bg-rose-500 text-white w-fit px-3 mt-2 rounded-sm text-xs md:text-base">
          20% Discount
        </p>
        <h3 className="font-bold pt-1 text-xs md:text-lg">Laptop</h3>
        <p className="text-gray-500 pt-1 text-xs md:text-base">
          product description
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold -ml-2  pt-1 text-xs md:text-base">
            Rs.67,999/-
          </p>
          <button
            type="sumbit"
            className="rounded-lg font-bold bg-gray-300 my-1 px-1 md:px-3 py-1 md:py-2 text-xs md:text-base"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 shadow-md border p-2 md:p-5 rounded-lg">
        <img
          src={p4}
          alt=""
          className="md:h-50 w-full object-cover rounded-md"
        />
        <p className="bg-rose-500 text-white w-fit px-3 mt-2 rounded-sm text-xs md:text-base">
          20% Discount
        </p>
        <h3 className="font-bold pt-1 text-xs md:text-lg">Nail Spolish</h3>
        <p className="text-gray-500 pt-1 text-xs md:text-base">
          product description
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold -ml-2  pt-1 text-xs md:text-base">Rs.239/-</p>
          <button
            type="sumbit"
            className="rounded-lg font-bold bg-gray-300 my-1 px-1 md:px-3 py-1 md:py-2 text-xs md:text-base"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 shadow-md border p-2 md:p-5 rounded-lg">
        <img
          src={p5}
          alt=""
          className="md:h-50 w-full object-cover rounded-md"
        />
        <p className="bg-rose-500 text-white w-fit px-3 mt-2 rounded-sm text-xs md:text-base">
          20% Discount
        </p>
        <h3 className="font-bold pt-1 text-xs md:text-lg">Bells</h3>
        <p className="text-gray-500 pt-1 text-xs md:text-base">
          product description
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold -ml-2  pt-1 text-xs md:text-base">Rs.999/-</p>
          <button
            type="sumbit"
            className="rounded-lg font-bold bg-gray-300 my-1 px-1 md:px-3 py-1 md:py-2 text-xs md:text-base"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 shadow-md border p-2 md:p-5 rounded-lg">
        <img
          src={p6}
          alt=""
          className="md:h-50 w-full object-cover rounded-md"
        />
        <p className="bg-rose-500 text-white w-fit px-3 mt-2 rounded-sm text-xs md:text-base">
          20% Discount
        </p>
        <h3 className="font-bold pt-1 text-xs md:text-lg">Lens</h3>
        <p className="text-gray-500 pt-1 text-xs md:text-base">
          product description
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold -ml-2  pt-1 text-xs md:text-base">
            Rs.19,000/-
          </p>
          <button
            type="sumbit"
            className="rounded-lg font-bold bg-gray-300 my-1 px-1 md:px-3 py-1 md:py-2 text-xs md:text-base"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="md:w-72 md:mt-10 shadow-md border p-2 md:p-5 rounded-lg">
        <img
          src={p7}
          alt=""
          className="md:h-50 w-full object-cover rounded-md"
        />
        <p className="bg-rose-500 text-white w-fit px-3 mt-2 rounded-sm text-xs md:text-base">
          20% Discount
        </p>
        <h3 className="font-bold pt-1 text-xs md:text-lg">Face Cream</h3>
        <p className="text-gray-500 pt-1 text-xs md:text-base">
          product description
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold -ml-2  pt-1 text-xs md:text-base">Rs.99/-</p>
          <button
            type="sumbit"
            className="rounded-lg font-bold bg-gray-300 my-1 px-1 md:px-3 py-1 md:py-2 text-xs md:text-base"
          >
            add to cart
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
