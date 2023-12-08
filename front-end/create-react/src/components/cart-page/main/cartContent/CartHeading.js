import React from "react";

const CartHeading = () => {
  return (
    <>
      <div className="border flex px-3 py-3 mt-3 md:mt-6 justify-between">
        <div className="flex items-center">
          <input className="accent-rose-500 md:h-5 md:w-5" type="checkbox" />
          <label className="font-bold text-slate-900 pl-3 text-sm md:text-base">2/2 Selected</label>
        </div>
        <div className="flex font-bold text-gray-400 gap-x-2 md:gap-x-4 text-sm md:text-base">
          <button>Remove</button>
          <p>|</p>
          <button>Move to Wishlist</button>
        </div>
      </div>
    </>
  );
};

export default CartHeading;
