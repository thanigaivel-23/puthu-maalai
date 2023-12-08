import React from "react";
import scale from "../../../../assets/img/products/scale.png";

const ProductSize = ({size}) => {
  return (
    <>
    {size && size.length > 0 &&
      <div className="px-5 md:px-10 lg:px-0 mt-3 md:mt-0 border-t-8 md:border-none">
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm md:text-lg">Size</div>
          <div className="flex items-center gap-x-5">
            <img src={scale} className="w-8 md:w-14 mt-3 md:mt-0  " alt="" />
            <div className="text-sm md:text-lg mt-4 text-blue-400 self-baseline underline">
              Size Guide
            </div>
          </div>
        </div>
        
        {/* size icons */}
        <div className="flex font-semibold gap-x-2 md:gap-x-3">
        {size.map((size)=>(
          <div key={size} className="border-2 text-sm rounded-full h-7 md:h-9 w-7 md:w-9 text-center pt-0.5 md:pt-1.5">
            {size}
          </div>))}
        </div>

      </div>}
    </>
  );
};

export default ProductSize;
