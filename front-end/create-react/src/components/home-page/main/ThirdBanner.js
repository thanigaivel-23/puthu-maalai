import React from "react";

const ThirdBanner = () => {
  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className=" w-5/6 h-36 md:h-64 lg:h-72 bg-cover bg-red-200 font-sans flex flex-col shadow-2xl pl-8 md:pl-20 lg:pl-40 ">
        <h3 className="font-bold test-xl md:text-4xl pt-4 md:pt-14">
          GET 20% OFF ON YOUR
        </h3>
        <h3 className="font-bold test-xl md:text-4xl  ">FIRST PURCHASE</h3>
        <p className="pt-1 md:pt-3 text-xs md:text-base font-semibold ">
          USE Coupon Code: NEW2023
        </p>

        <button
          type="sumbit"
          className="mt-4 text-xs md:text-base bg-black text-white px-4 py-1  text-center self-start"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ThirdBanner;
