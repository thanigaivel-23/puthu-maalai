import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";

const CartCoupons = () => {
  return (
    <>
      <div className="border mt-3">
        <div className="flex justify-between  ">
          <div className=" flex gap-x-3 pt-3 pl-3 ">
            <MdOutlineLocalOffer className="mt-0.5 text-xl md:text-2xl" />
            <p className="font-bold text-slate-900 text-sm md:text-base -ml-2 md:-ml-0" >Apply Coupons</p>
          </div>
          <button className="font-bold text-rose-500 mt-3 mr-3 border-2  border-rose-500 rounded-md px-2 md:px-3  py-1 text-xs md:text-base ">
            Apply
          </button>
        </div>
        <p className=" pb-2 pl-9 md:pl-12 text-xs md:text-base">
          <span className=" text-rose-500  font-bold">Login</span> to get
          upto &#8377;300 OFF on first order
        </p>
      </div>
    </>
  );
};

export default CartCoupons;
