import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import watch2 from "../../../../assets/img/products/2.jpg";

const CartDetails = () => {
  return (
    <>
    {/* content - 1 */}
      <div className="flex px-3 md:px-6 py-3 md:py-5 mt-3 md:mt-6   border md:relative">
        <div>
          <img src={watch2} className="w-60" alt="" />
        </div>
        <div className="ml-5 flex justify-between ">
          <div className=" md:w-2/3   ">
            <h2 className="font-bold text-gray-600 text-xs md:text-base">
            Fire-Boltt Phoenix Smart Watch with Bluetooth Calling (Black)
            </h2>
            <p className=" mt-2 md:mt-3 text-gray-800 text-xs md:text-sm">
              Consectetur adipisicing elit. Corporis
              in consectetur.
            </p>
            <p className="mt-2 md:mt-3  text-gray-800 text-xs md:text-sm"> <b>Size:</b> XS <b>Colour:</b> Black</p>
            <div className="flex items-center mt-1 md:mt-3 gap-x-2 text-xs md:text-base">
              <p className=" font-bold">&#8377;699</p>
              <p className="  line-through">&#8377;899</p>
              <p className="text-blue-600 ">10% off</p>
            </div>

            <p className=" text-gray-800 mt-2 md:mt-3 text-xs md:text-sm">
              Delivery by <b>15 Sep</b>
            </p>
          </div>

          <div  className="md:absolute right-6">
            <AiFillCloseCircle className="text-gray-300 ml-2 md:ml-0 w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>

      
       {/* content - 2 */}
       <div className="flex px-3 md:px-6 py-3 md:py-5 mt-3 md:mt-6   border md:relative">
        <div>
          <img src={watch2} className="w-60" alt="" />
        </div>
        <div className="ml-5 flex justify-between ">
          <div className=" md:w-2/3   ">
            <h2 className="font-bold text-gray-600 text-xs md:text-base">
            Fire-Boltt Phoenix Smart Watch with Bluetooth Calling (Black)
            </h2>
            <p className=" mt-2 md:mt-3 text-gray-800 text-xs md:text-sm">
              Consectetur adipisicing elit. Corporis
              in consectetur.
            </p>
            <p className="mt-2 md:mt-3  text-gray-800 text-xs md:text-sm"> <b>Size:</b> XS <b>Colour:</b> Black</p>
            <div className="flex items-center mt-1 md:mt-3 gap-x-2 text-xs md:text-base">
              <p className=" font-bold">&#8377;699</p>
              <p className="  line-through">&#8377;899</p>
              <p className="text-blue-600 ">10% off</p>
            </div>

            <p className=" text-gray-800 mt-2 md:mt-3 text-xs md:text-sm">
              Delivery by <b>15 Sep</b>
            </p>
          </div>

          <div  className="md:absolute right-6">
            <AiFillCloseCircle className="text-gray-300 ml-2 md:ml-0 w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>

     

      
    </>
  );
};

export default CartDetails;
