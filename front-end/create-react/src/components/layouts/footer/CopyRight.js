import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const CopyRight = () => {
  return (
    <div className="bg-gray-900 text-white flex md:justify-between justify-around h-16 items-center text-sm md:text-base md:px-40">
      <p>&#169; 2023 All Rights Reserved</p>
      <p className="flex gap-x-6">
        <FaFacebook className="text-xl" />
        <FaInstagram className="text-xl" />
        <FaTwitter className="text-xl" />
      </p>
    </div>
  );
};

export default CopyRight;
