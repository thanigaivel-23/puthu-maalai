import React from "react";
import { BiSolidOffer } from "react-icons/bi";

const CartOffer = () => {
  return (
    <div className="border mt-3 md:mt-6">
      <div className=" flex gap-x-3 pt-3 pl-3 ">
        <BiSolidOffer className="text-xl md:text-2xl" />
        <p className="font-bold text-slate-900 text-sm md:text-base">
          Available Offers
        </p>
      </div>
      <p className=" pt-2 pl-12 text-xs md:text-base pr-3 md">
        Lorem ipsum dolor sit amet consectetur adorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi dolorum, explicabo esse error
        quisquam ipsum!
      </p>
      <button className="font-bold text-rose-500 underline pl-12 pt-2 mb-4 text-sm md:text-base">
        Show More
      </button>
    </div>
  );
};

export default CartOffer;
