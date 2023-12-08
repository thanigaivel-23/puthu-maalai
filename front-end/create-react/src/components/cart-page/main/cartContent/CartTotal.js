import React from "react";

const CartTotal = () => {
  return (
    <>
      <div className="border-2 mt-3 md:mt-7 px-3 md:px-7 py-3 md:py-5 ">
        <h2 className="font-semibold text-sm  md:text-2xl text-slate-800">CART TOTAL</h2>

        <h3 className="text-slate-500 mt-4 font-bold text-xs md:text-base">
          PRICE DETAILS (2 ITMES)
        </h3>
        <div className="flex justify-between mt-3 text-xs md:text-base">
          <p className="text-slate-700">Total MRP</p>
          <p className="font-bold">&#8377;820</p>
        </div>
        <div className="flex justify-between mt-3 text-xs md:text-base">
          <p className="text-slate-700">Discount on MRP</p>
          <p className="font-bold">&#8377;260</p>
        </div>
        <div className="flex justify-between mt-3 text-xs md:text-base">
          <p className="text-slate-700">Coupon Discount</p>
          <p className="text-rose-500 font-bold">Apply Coupon</p>
        </div>
        <div className="flex justify-between mt-3 text-xs md:text-base">
          <p className="text-slate-700">
            Convenience Fee{" "}
            <span className="text-rose-500 font-bold">Know More</span>
          </p>
          <p className="font-bold">
            <span className="line-through">&#8377;30</span> &#8377;50
          </p>
        </div>
        <div className="flex justify-between mt-3 border-b-2 pb-5 text-xs md:text-base">
          <p className="text-slate-700">Tax</p>
          <p className="font-bold">&#8377;20</p>
        </div>
        <div className="flex justify-between mt-3  text-sm">
          <p className="text-slate-700 font-bold md:text-lg">Total</p>
          <p className="font-bold md:text-lg">&#8377;840</p>
        </div>
        <button className="bg-rose-500 text-white font-semibold rounded-md text-center h-12 mt-4 w-full text-sm md:text-base">
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartTotal;
