import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ProductTop = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-5 md:mx-10 lg:mx-0 mt-3 lg:mt-0 ">
        <div className="text-rose-500 font-sans font-bold text-sm md:text-base">
          LATEST COLLECTION
        </div>
        <div className=" flex gap-x-3 items-center">
          <div className="font-semibold text-sm md:text-base">Share</div>
          <FaFacebook className="text-md md:text-2xl" />
          <FaInstagram className="text-md md:text-2xl" />
          <FaTwitter className="text-md md:text-2xl" />
        </div>
      </div>
    </>
  );
};

export default ProductTop;
