import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ProductColor = ({colors}) => {

  const [count, setCount] = useState(1)

  const addCount = ()=>{
      setCount(count + 1)
  }

  const lessCount = ()=>{
    setCount(count<=1?1:count-1)
  } 

  return (
    <>
      <div className="  flex  pt-3 md:pt-0 items-center justify-between md:justify-normal  md:gap-x-40 px-5 md:px-10 lg:px-0 mt-3 md:mt-8 border-t-8 md:border-none">
        {/* color */}
        {colors && colors.length > 0 &&
        <div>
          <div className="font-bold mb-2 md:mb-4 text-sm md:text-lg">Color</div>
          <div className="flex font-semibold  gap-x-2 md:gap-x-3">
            {colors.map((x, index)=>(
            <div key={index} className={`bg-${x}-500 bg-${x} border border-black text-sm rounded-full h-7 md:h-9 w-7 md:w-9 text-center pt-1.5`}></div>
            ))}
          </div>
        </div>}

          

        {/* Quantity */}
        <div>
          <div className="font-bold  mb-2 md:mb-4  text-sm md:text-lg">
            Quantity
          </div>

          <div className="flex items-center justify-center ">
            <div className="border-2 border-slate-900 px-1 py-1 md:py-2 md:px-2">
              <button  onClick={lessCount}>
                <FaMinus />
              </button>
            </div>
            <div className="border-2  border-slate-900 px-3 py-1 md:py-2 md:px-6">{count}</div>
            <div className="border-2 border-slate-900  px-1 py-1 md:py-2 md:px-2">
              <button onClick={addCount}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductColor;
