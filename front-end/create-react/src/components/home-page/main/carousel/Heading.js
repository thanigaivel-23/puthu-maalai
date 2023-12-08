import React from "react";

const Heading = () => {
  return (
    <div className="flex justify-center mb-6 md:mb-12 mt-10 md:mt-16">
      <div className="font-sans flex justify-between  items-center w-5/6">
        <h3 className="font-bold  md:text-3xl">New Products</h3>
        <button
          type="sumbit"
          className=" text-rose-500 text-xs md:text-base font-bold px-4 py-1 rounded-lg text-center border-rose-500 border-2"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Heading;
