import React from "react";
import { BiDollarCircle } from "react-icons/bi";

const Product3Boxes = () => {
  return (
    <>
      <div className="md:flex mt-5 md:mt-12 gap-x-10   px-5 md:px-10 lg:px-0">
        <div className="flex items-center my-3 md:my-0 md:block border-none md:border-2 md:border-solid md:shadow-sm rounded-md md:w-44">
          <p>
            <BiDollarCircle className="text-2xl md:mt-2 ml-2" />
          </p>
          <h2 className="ml-2 font-medium md:w-[80%] text-sm md:text-base"> Prepaid Only No COD</h2>
          <p className="text-rose-500 md:mt-5 font-bold md:mb-2 ml-2 text-sm md:text-base">Know More</p>
        </div>

        <div className="flex  items-center my-3 md:my-0 md:block border-none md:border-2 md:border-solid md:hadow-sm rounded-md  md:-44">
          <p>
            <BiDollarCircle className="text-2xl md:mt-2 ml-2" />
          </p>
          <h2 className="ml-2 font-medium text-sm md:text-base">
            7 Days Return and Exchange
          </h2>
          <p className="text-rose-500 md:mt-5 font-bold  md:mb-2 ml-2 text-sm md:text-base">Know More</p>
        </div>

        <div className="flex items-center my-3 md:my-0 md:block border-none md:border-2 md:border-solid md:hadow-sm rounded-md  md:-44">
          <p>
            <BiDollarCircle className="text-2xl md:mt-2 ml-2" />
          </p>
          <h2 className="ml-2 font-medium text-sm md:text-base">Usually ships in 2 days</h2>
          <p className="text-rose-500 md:mt-5 font-bold md:mb-2 ml-2 text-sm md:text-base">Know More</p>
        </div>
      </div>
    </>
  );
};

export default Product3Boxes;
