import React from "react";

const ProductHeading = () => {
  return (
    <>
      {/* heading */}
      <div className="flex justify-center  mt-8 md:mt-16  mb-6 md:mb-10 ">
        <div className="font-sans flex justify-between  items-center w-11/12">
          <h3 className="font-bold  md:text-2xl md:ml-3">You may also like</h3>
          <button
            type="sumbit"
            className="md:mr-6 text-rose-500 text-xs md:text-base font-bold px-2 md:px-4 py-1 rounded-lg text-center border-rose-500 border-2"
          >
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductHeading;
