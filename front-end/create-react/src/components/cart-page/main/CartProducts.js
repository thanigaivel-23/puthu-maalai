import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FaStar } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

import watch2 from "../../../assets/img/products/2.jpg";
import watch4 from "../../../assets/img/products/4.jpg";
import watch5 from "../../../assets/img/products/5.jpg";

const CartProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <N />,
    // prevArrow: <P />,
    responsive: [
      {
        breakpoint: 1184,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,

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
    <>
      <Slider className="xl:w-[98%] mb-10 md:mb-14 lg:mb-20" {...settings}>
        <div className="w-[25%] mt-10 flex justify-center flex-col relative border-2">
          <p className="bg-rose-500  text-white  font-medium py-1.5 w-fit px-3  rounded-sm absolute top-5 left-0  opacity-90 md:opacity-100  text-xs md:text-base">
            Unisex
          </p>
          <img
            src={watch2}
            alt=""
            className=" lg:h-72 lg:w-full object-cover "
          />

          {/* product details */}
          <div className="lg:px-3 lg:pt-3 lg:pb-3">
            <h3 className="font-bold text-xs md:text-lg  lg:text-xl pl-1 pt-2">
              WATCH
            </h3>
            <p className=" flex flex-wrap text-xs md:text-base text-gray-500 pl-1">
              product description
            </p>

            {/* ratings */}
            <div className="flex justify-between flex-col lg:flex-row -ml-2 mt-1 pl-1 text-xs md:text-base">
              <div className="flex items-center">
                <FaStar className="text-rose-600  mr-2" /> 5.0 (10 Reviews)
              </div>
              <div className="text-green-500">In Stock</div>
            </div>

            <p className="  mt-1 text-xs md:text-base lg:text-xl font-bold pl-1">
              &#8377;499
            </p>

            {/* cart n wishlist */}
            <div className="mt-3 flex lg:gap-x-3 mb-2 -ml-2">
              <div className="bg-slate-800 font-medium text-white lg:flex w-[85%]  h-fit lg:h-auto justify-center py-2  items-center rounded-md text-center">
                <div>
                  <BiPlus className="text-xl md:text-2xl mr-2 hidden lg:block" />
                </div>
                <div className="text-xs md:text-base">Add To Cart</div>
              </div>

              <div className="border-2 bg-gray-100 font-medium w-[15%] h-fit md:h-auto flex      justify-center md:px-1 md:py-2 items-center rounded-md text-center">
                <AiOutlineHeart className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25%] mt-10 flex justify-center flex-col relative border-2">
          <p className="bg-rose-500  text-white  font-medium py-1.5 w-fit px-3  rounded-sm absolute top-5 left-0  opacity-90 md:opacity-100  text-xs md:text-base">
            Unisex
          </p>
          <img
            src={watch4}
            alt=""
            className=" lg:h-72 lg:w-full object-cover "
          />

          {/* product details */}
          <div className="lg:px-3 lg:pt-3 lg:pb-3">
            <h3 className="font-bold text-xs md:text-lg  lg:text-xl pl-1 pt-2">
              WATCH
            </h3>
            <p className=" flex flex-wrap text-xs md:text-base text-gray-500 pl-1">
              product description
            </p>

            {/* ratings */}
            <div className="flex justify-between flex-col lg:flex-row -ml-2 mt-1 pl-1 text-xs md:text-base">
              <div className="flex items-center">
                <FaStar className="text-rose-600  mr-2" /> 5.0 (10 Reviews)
              </div>
              <div className="text-green-500">In Stock</div>
            </div>

            <p className="  mt-1 text-xs md:text-base lg:text-xl font-bold pl-1">
              &#8377;499
            </p>

            {/* cart n wishlist */}
            <div className="mt-3 flex lg:gap-x-3 mb-2 -ml-2">
              <div className="bg-slate-800 font-medium text-white lg:flex w-[85%]  h-fit lg:h-auto justify-center py-2  items-center rounded-md text-center">
                <div>
                  <BiPlus className="text-xl md:text-2xl mr-2 hidden lg:block" />
                </div>
                <div className="text-xs md:text-base">Add To Cart</div>
              </div>

              <div className="border-2 bg-gray-100 font-medium w-[15%] h-fit md:h-auto flex      justify-center md:px-1 md:py-2 items-center rounded-md text-center">
                <AiOutlineHeart className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25%] mt-10 flex justify-center flex-col relative border-2">
          <p className="bg-rose-500  text-white  font-medium py-1.5 w-fit px-3  rounded-sm absolute top-5 left-0  opacity-90 md:opacity-100  text-xs md:text-base">
            Unisex
          </p>
          <img
            src={watch5}
            alt=""
            className=" lg:h-72 lg:w-full object-cover "
          />

          {/* product details */}
          <div className="lg:px-3 lg:pt-3 lg:pb-3">
            <h3 className="font-bold text-xs md:text-lg  lg:text-xl pl-1 pt-2">
              WATCH
            </h3>
            <p className=" flex flex-wrap text-xs md:text-base text-gray-500 pl-1">
              product description
            </p>

            {/* ratings */}
            <div className="flex justify-between flex-col lg:flex-row -ml-2 mt-1 pl-1 text-xs md:text-base">
              <div className="flex items-center">
                <FaStar className="text-rose-600  mr-2" /> 5.0 (10 Reviews)
              </div>
              <div className="text-green-500">In Stock</div>
            </div>

            <p className="  mt-1 text-xs md:text-base lg:text-xl font-bold pl-1">
              &#8377;499
            </p>

            {/* cart n wishlist */}
            <div className="mt-3 flex lg:gap-x-3 mb-2 -ml-2">
              <div className="bg-slate-800 font-medium text-white lg:flex w-[85%]  h-fit lg:h-auto justify-center py-2  items-center rounded-md text-center">
                <div>
                  <BiPlus className="text-xl md:text-2xl mr-2 hidden lg:block" />
                </div>
                <div className="text-xs md:text-base">Add To Cart</div>
              </div>

              <div className="border-2 bg-gray-100 font-medium w-[15%] h-fit md:h-auto flex      justify-center md:px-1 md:py-2 items-center rounded-md text-center">
                <AiOutlineHeart className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25%] mt-10 flex justify-center flex-col relative border-2">
          <p className="bg-rose-500  text-white  font-medium py-1.5 w-fit px-3  rounded-sm absolute top-5 left-0  opacity-90 md:opacity-100  text-xs md:text-base">
            Unisex
          </p>
          <img
            src={watch2}
            alt=""
            className=" lg:h-72 lg:w-full object-cover "
          />

          {/* product details */}
          <div className="lg:px-3 lg:pt-3 lg:pb-3">
            <h3 className="font-bold text-xs md:text-lg  lg:text-xl pl-1 pt-2">
              WATCH
            </h3>
            <p className=" flex flex-wrap text-xs md:text-base text-gray-500 pl-1">
              product description
            </p>

            {/* ratings */}
            <div className="flex justify-between flex-col lg:flex-row -ml-2 mt-1 pl-1 text-xs md:text-base">
              <div className="flex items-center">
                <FaStar className="text-rose-600  mr-2" /> 5.0 (10 Reviews)
              </div>
              <div className="text-green-500">In Stock</div>
            </div>

            <p className="  mt-1 text-xs md:text-base lg:text-xl font-bold pl-1">
              &#8377;499
            </p>

            {/* cart n wishlist */}
            <div className="mt-3 flex lg:gap-x-3 mb-2 -ml-2">
              <div className="bg-slate-800 font-medium text-white lg:flex w-[85%]  h-fit lg:h-auto justify-center py-2  items-center rounded-md text-center">
                <div>
                  <BiPlus className="text-xl md:text-2xl mr-2 hidden lg:block" />
                </div>
                <div className="text-xs md:text-base">Add To Cart</div>
              </div>

              <div className="border-2 bg-gray-100 font-medium w-[15%] h-fit md:h-auto flex      justify-center md:px-1 md:py-2 items-center rounded-md text-center">
                <AiOutlineHeart className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25%] mt-10 flex justify-center flex-col relative border-2">
          <p className="bg-rose-500  text-white  font-medium py-1.5 w-fit px-3  rounded-sm absolute top-5 left-0  opacity-90 md:opacity-100  text-xs md:text-base">
            Unisex
          </p>
          <img
            src={watch4}
            alt=""
            className=" lg:h-72 lg:w-full object-cover "
          />

          {/* product details */}
          <div className="lg:px-3 lg:pt-3 lg:pb-3">
            <h3 className="font-bold text-xs md:text-lg  lg:text-xl pl-1 pt-2">
              WATCH
            </h3>
            <p className=" flex flex-wrap text-xs md:text-base text-gray-500 pl-1">
              product description
            </p>

            {/* ratings */}
            <div className="flex justify-between flex-col lg:flex-row -ml-2 mt-1 pl-1 text-xs md:text-base">
              <div className="flex items-center">
                <FaStar className="text-rose-600  mr-2" /> 5.0 (10 Reviews)
              </div>
              <div className="text-green-500">In Stock</div>
            </div>

            <p className="  mt-1 text-xs md:text-base lg:text-xl font-bold pl-1">
              &#8377;499
            </p>

            {/* cart n wishlist */}
            <div className="mt-3 flex lg:gap-x-3 mb-2 -ml-2">
              <div className="bg-slate-800 font-medium text-white lg:flex w-[85%]  h-fit lg:h-auto justify-center py-2  items-center rounded-md text-center">
                <div>
                  <BiPlus className="text-xl md:text-2xl mr-2 hidden lg:block" />
                </div>
                <div className="text-xs md:text-base">Add To Cart</div>
              </div>

              <div className="border-2 bg-gray-100 font-medium w-[15%] h-fit md:h-auto flex      justify-center md:px-1 md:py-2 items-center rounded-md text-center">
                <AiOutlineHeart className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* products */}
    </>
  );
};

export default CartProducts;
