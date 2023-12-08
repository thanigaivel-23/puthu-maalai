import React from "react";

const ProductPinCode = () => {
  return (
    <>
      <div className="px-5 md:px-10 lg:px-0 pt-3 md:pt-0   mt-3 md:mt-12 border-t-8 md:border-none">
        <h2 className="font-bold text-sm md:text-xl">
          Select Delivery Location
        </h2>
        <p className="font-semibold mt-1 md:mt-3 text-sm md:text-base">
          Delivery Pincode
        </p>
        <input
          type="text"
          placeholder="Enter here"
          className="border-2 mt-3 py-1 md:py-3 rounded-md w-4/6 pl-5 placeholder-slate-950"
        />
      </div>
    </>
  );
};

export default ProductPinCode;
