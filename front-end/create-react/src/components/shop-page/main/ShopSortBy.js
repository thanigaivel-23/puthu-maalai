import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";

const ShopSortBy = () => {
  return (
    <>
      <div className="fixed  lg:relative bottom-0 right-0 w-1/2 lg:w-auto h-12 md:h-16 lg:h-auto   bg-white z-10">
        <div className="lg:absolute lg:w-fit right-0 lg:px-4 lg:py-2 flex items-center mt-3 md:mt-5 lg:mt-0  justify-around  lg:justify-end  lg:gap-x-20 border-none  lg:border lg:border-solid   ">
          <BsFilterLeft className="w-7 h-7" />
          <div className="text-sm md:text-lg text-gray-800 font-semibold">
            Sort by
          </div>
          <MdKeyboardArrowUp className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </>
  );
};

export default ShopSortBy;
