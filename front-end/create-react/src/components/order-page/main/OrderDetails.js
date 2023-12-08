import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

import watch2 from "../../../assets/img/products/2.jpg";

const OrderDetails = () => {
  return (
    <>
      <div className="md:w-[90%] lg:w-[70%] md:m-12">
        {/* Delivery details-1 */}
        <main>
          {/* top */}
          <div className="border mt-5 bg-gray-50 flex items-center gap-x-2 px-3 py-2.5">
            <div>
              <TbTruckDelivery className="w-8 h-8" />
            </div>
            <p className=" text-sm md:text-lg">
              <b>Delivered, </b>
              On Wed, 25 Nov
            </p>
          </div>

          {/* content */}
          <div className="px-2 md:px-6 pt-3 md:py-5  mb-5 border">
            {/* middle */}
            <div className="flex ">
              {/* img */}
              <div>
                <img src={watch2} className="w-32" alt="" />
              </div>
              <div className="ml-3 md:ml-5 flex justify-between w-full">
                {/* details */}
                <div className=" w-4/5 md:w-3/5  ">
                  <h2 className="font-bold text-gray-600 text-sm md:text-base">
                    Fire-Boltt Phoenix Smart Watch with Bluetooth Calling
                    (Black)
                  </h2>
                  <p className=" mt-1 text-gray-800 text-xs md:text-sm">
                    Consectetur adipisicing elit.
                    Corporis in consectetur.
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-gray-800">
                    <b>Size:</b> XS <b>Colour:</b> Black
                  </p>
                </div>
                {/* x mark */}
                <div className="">
                  <AiFillCloseCircle className="text-gray-300  w-6 md:w-7 h-6  md:h-7" />
                </div>
              </div>
            </div>

            {/* bottom */}
            <div>
              <ul>
                <li className="text-sm mt-3 md:mt-6 ml-5 md:ml-3 text-gray-800 list-disc">
                  Exchange/Return will be closed at 30 Nov
                </li>
              </ul>

              {/* rate product */}
              <div className="flex items-center gap-x-3 mt-3 md:mt-6 mb-3 md:mb-0 ml-1 md:ml-0">
                <p className="text-sm   text-gray-800 list-disc">
                  Rate Product
                </p>
                <div className="flex gap-x-1">
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Delivery details-2*/}
        <main>
          {/* top */}
          <div className="border mt-5 bg-gray-50 flex items-center gap-x-2 px-3 py-2.5">
            <div>
              <TbTruckDelivery className="w-8 h-8" />
            </div>
            <p className=" text-sm md:text-lg">
              <b>Delivered, </b>
              On Wed, 25 Nov
            </p>
          </div>

          {/* content */}
          <div className="px-2 md:px-6 pt-3 md:py-5  mb-5 border">
            {/* middle */}
            <div className="flex ">
              {/* img */}
              <div>
                <img src={watch2} className="w-32" alt="" />
              </div>
              <div className="ml-3 md:ml-5 flex justify-between w-full">
                {/* details */}
                <div className=" w-4/5 md:w-3/5  ">
                  <h2 className="font-bold text-gray-600 text-sm md:text-base">
                    Fire-Boltt Phoenix Smart Watch with Bluetooth Calling
                    (Black)
                  </h2>
                  <p className=" mt-1 text-gray-800 text-xs md:text-sm">
                    Consectetur adipisicing elit.
                    Corporis in consectetur.
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-gray-800">
                    <b>Size:</b> XS <b>Colour:</b> Black
                  </p>
                </div>
                {/* x mark */}
                <div className="">
                  <AiFillCloseCircle className="text-gray-300  w-6 md:w-7 h-6  md:h-7" />
                </div>
              </div>
            </div>

            {/* bottom */}
            <div>
              <ul>
                <li className="text-sm mt-3 md:mt-6 ml-5 md:ml-3 text-gray-800 list-disc">
                  Exchange/Return will be closed at 30 Nov
                </li>
              </ul>

              {/* rate product */}
              <div className="flex items-center gap-x-3 mt-3 md:mt-6 mb-3 md:mb-0 ml-1 md:ml-0">
                <p className="text-sm   text-gray-800 list-disc">
                  Rate Product
                </p>
                <div className="flex gap-x-1">
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Delivery details-3 */}
        <main>
          {/* top */}
          <div className="border mt-5 bg-gray-50 flex items-center gap-x-2 px-3 py-2.5">
            <div>
              <TbTruckDelivery className="w-8 h-8" />
            </div>
            <p className=" text-sm md:text-lg">
              <b>Delivered, </b>
              On Wed, 25 Nov
            </p>
          </div>

          {/* content */}
          <div className="px-2 md:px-6 pt-3 md:py-5  mb-5 border">
            {/* middle */}
            <div className="flex ">
              {/* img */}
              <div>
                <img src={watch2} className="w-32" alt="" />
              </div>
              <div className="ml-3 md:ml-5 flex justify-between w-full">
                {/* details */}
                <div className=" w-4/5 md:w-3/5  ">
                  <h2 className="font-bold text-gray-600 text-sm md:text-base">
                    Fire-Boltt Phoenix Smart Watch with Bluetooth Calling
                    (Black)
                  </h2>
                  <p className=" mt-1 text-gray-800 text-xs md:text-sm">
                    Consectetur adipisicing elit.
                    Corporis in consectetur.
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-gray-800">
                    <b>Size:</b> XS <b>Colour:</b> Black
                  </p>
                </div>
                {/* x mark */}
                <div className="">
                  <AiFillCloseCircle className="text-gray-300  w-6 md:w-7 h-6  md:h-7" />
                </div>
              </div>
            </div>

            {/* bottom */}
            <div>
              <ul>
                <li className="text-sm mt-3 md:mt-6 ml-5 md:ml-3 text-gray-800 list-disc">
                  Exchange/Return will be closed at 30 Nov
                </li>
              </ul>

              {/* rate product */}
              <div className="flex items-center gap-x-3 mt-3 md:mt-6 mb-3 md:mb-0 ml-1 md:ml-0">
                <p className="text-sm   text-gray-800 list-disc">
                  Rate Product
                </p>
                <div className="flex gap-x-1">
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Delivery details-4 */}
        <main>
          {/* top */}
          <div className="border mt-5 bg-gray-50 flex items-center gap-x-2 px-3 py-2.5">
            <div>
              <TbTruckDelivery className="w-8 h-8" />
            </div>
            <p className=" text-sm md:text-lg">
              <b>Delivered, </b>
              On Wed, 25 Nov
            </p>
          </div>

          {/* content */}
          <div className="px-2 md:px-6 pt-3 md:py-5  mb-5 border">
            {/* middle */}
            <div className="flex ">
              {/* img */}
              <div>
                <img src={watch2} className="w-32" alt="" />
              </div>
              <div className="ml-3 md:ml-5 flex justify-between w-full">
                {/* details */}
                <div className=" w-4/5 md:w-3/5  ">
                  <h2 className="font-bold text-gray-600 text-sm md:text-base">
                    Fire-Boltt Phoenix Smart Watch with Bluetooth Calling
                    (Black)
                  </h2>
                  <p className=" mt-1 text-gray-800 text-xs md:text-sm">
                    Consectetur adipisicing elit.
                    Corporis in consectetur.
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-gray-800">
                    <b>Size:</b> XS <b>Colour:</b> Black
                  </p>
                </div>
                {/* x mark */}
                <div className="">
                  <AiFillCloseCircle className="text-gray-300  w-6 md:w-7 h-6  md:h-7" />
                </div>
              </div>
            </div>

            {/* bottom */}
            <div>
              <ul>
                <li className="text-sm mt-3 md:mt-6 ml-5 md:ml-3 text-gray-800 list-disc">
                  Exchange/Return will be closed at 30 Nov
                </li>
              </ul>

              {/* rate product */}
              <div className="flex items-center gap-x-3 mt-3 md:mt-6 mb-3 md:mb-0 ml-1 md:ml-0">
                <p className="text-sm   text-gray-800 list-disc">
                  Rate Product
                </p>
                <div className="flex gap-x-1">
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                  <CiStar className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default OrderDetails;
