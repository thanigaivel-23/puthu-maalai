import React from "react";

import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";





const OrderHeading = () => {
  return (
    <>
   
        {/* Order heading */}
        <div className=" w-[90%]   lg:w-[70%] flex md:justify-between md:border my-3 mx-3  md:px-3 md:py-4 md:m-12">
          <div>
            <h2 className="hidden md:block font-semibold text-xl">All orders</h2>
            <p className="hidden md:block text-sm text-slate-600">from anytime</p>
          </div>

          <div className="flex   w-[100%] md:w-auto items-center gap-x-3 md:gap-x-9 ">
            {/* search */}
            <div className="relative  w-[100%] md:w-auto">
              <input
                type="search"
                placeholder="Search in orders"
                className="border-2 outline-none  rounded-md  w-[100%] md:w-80 h-10 md:h-11 pl-4 placeholder:text-gray-500 placeholder:text-sm md:placeholder:text-base"
              />
              <label className="absolute top-2 right-3">
                <BiSearch className="w-5 h-5 md:w-7 md:h-7 " />
              </label>
            </div>

            {/* filter */}
            <div className=" flex items-center text-sm md:text-xl border-2 md:border-none  p-2 md:p-0">
              <FaFilter />
              Filters
            </div>
          </div>
        </div>

       

    </>
  );
};

export default OrderHeading;
