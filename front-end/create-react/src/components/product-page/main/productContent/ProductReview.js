import React from "react";
import reviewImg from "../../../../assets/img/products/rating.png";
import f1 from "../../../../assets/img/f1.jpg";
import { FaStar } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProductReview = ({reviews}) => {
  return (
    <>
      <div className="px-5 md:px-10 lg:px-0">
        <div className=" ">
          <img className="border-t-2 mt-10 pt-9" src={reviewImg} alt="" />
        </div>

        {/* 1 - comment */}
        <div className="border-b-2 pb-5 mt-6 ">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-1">
              <div>
                <img src={f1} className="rounded-full w-9 h-9" alt="" />
              </div>
              <div className="ml-2">
                <h2 className="font-bold text-sm md:text-xl">Jane Cooper</h2>
                <div className="flex items-center gap-x-1 text-rose-500 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="text-black ml-1 text-xs md:text-sm font-bold">
                    2 mins ago
                  </p>
                </div>
              </div>
            </div>
            <div className="text-xl  md:mt-3">
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicm dolor sit amet
            consectetur adipisicm dolor sit amet consectetur adipisicing elit.
          </div>
        </div>

        {/* 2 - comment */}
        <div className="border-b-2 pb-5 mt-6 ">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-1">
              <div>
                <img src={f1} className="rounded-full w-9 h-9" alt="" />
              </div>
              <div className="ml-2">
                <h2 className="font-bold text-sm md:text-xl">Jane Cooper</h2>
                <div className="flex items-center gap-x-1 text-rose-500 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="text-black ml-1 text-xs md:text-sm font-bold">
                    2 mins ago
                  </p>
                </div>
              </div>
            </div>
            <div className="text-xl  md:mt-3">
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur aconsectetur adipisicing elit.
          </div>
        </div>

        {/* 3 - comment */}
        <div className="border-b-2 pb-5 mt-6 ">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-1">
              <div>
                <img src={f1} className="rounded-full w-9 h-9" alt="" />
              </div>
              <div className="ml-2">
                <h2 className="font-bold text-sm md:text-xl">Jane Cooper</h2>
                <div className="flex items-center gap-x-1 text-rose-500 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="text-black ml-1 text-xs md:text-sm font-bold">
                    2 mins ago
                  </p>
                </div>
              </div>
            </div>
            <div className="text-xl  md:mt-3">
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicm dolor sit amet
            consectetur.
          </div>
        </div>

        {/* 1 - comment */}
        <div className="border-b-2 pb-5 mt-6 ">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-1">
              <div>
                <img src={f1} className="rounded-full w-9 h-9" alt="" />
              </div>
              <div className="ml-2">
                <h2 className="font-bold text-sm md:text-xl">Jane Cooper</h2>
                <div className="flex items-center gap-x-1 text-rose-500 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="text-black ml-1 text-xs md:text-sm font-bold">
                    2 mins ago
                  </p>
                </div>
              </div>
            </div>
            <div className="text-xl  md:mt-3">
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicm dolor sit amet
            consectetur adipisicm dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
