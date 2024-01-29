import React, { Fragment, useEffect } from "react";

import { TbTruckDelivery } from "react-icons/tb";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { CiStar } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { userOrders } from "../../actions/orderActions";
import { Link } from "react-router-dom";



const OrderPage = () => {

  const { userOrdersList } = useSelector(state => state.orderState)
  const dispatch = useDispatch()


 

  useEffect(() => {

    

    dispatch(userOrders)

  }, [dispatch])

  let getSingleOrder = []

  //getting order items seperately
  userOrdersList && userOrdersList.forEach(order => {
    order.orderItems.forEach(orderItem => {
      getSingleOrder.push({
        ...orderItem,
        orderStatus: order.orderStatus,
        orderId: order._id

      });
    });
  });

  //reversing the array
  getSingleOrder.reverse()

  return (
    <>

      <Fragment>
        {/*1. Order heading */}
        <div className=" w-[90%]   lg:w-[70%] flex md:justify-between md:border my-3 mx-3  md:px-3 md:py-4 md:m-12">
          <div>
            <h2 className="hidden md:block font-semibold text-xl">All orders</h2>
            <p className="hidden md:block text-sm text-slate-600">from anytime</p>
          </div>

          <div className="flex   w-[100%] md:w-auto items-center gap-x-3 md:gap-x-9 ">
            {/* search */}
            <div className="relative  w-[100%] md:w-auto">
              <input
                type="search"
                placeholder="Search in orders"
                className="border-2 outline-none  rounded-md  w-[100%] md:w-80 h-10 md:h-11 pl-4 placeholder:text-gray-500 placeholder:text-sm md:placeholder:text-base"
              />
              <label className="absolute top-2 right-3">
                <BiSearch className="w-5 h-5 md:w-7 md:h-7 " />
              </label>
            </div>

            {/* filter */}
            <div className=" flex items-center text-sm md:text-xl border-2 md:border-none  p-2 md:p-0">
              <FaFilter />
              Filters
            </div>
          </div>
        </div>

        {/* 2. order details */}

        {getSingleOrder && getSingleOrder.map((item, index) => (

          <main key={index} className="md:w-[90%] lg:w-[70%] md:m-12">
            {/* top */}
            <div className="border mt-5 bg-gray-50 flex items-center gap-x-2 px-3 py-2.5">
              <div>
                <TbTruckDelivery className="w-8 h-8" />
              </div>
              {item.orderStatus === "Processing" ?
                <p className="font-bold text-sm md:text-lg">
                  Processing
                </p>
                :
                <p className=" text-sm md:text-lg">
                  <b>Delivered, </b>
                  On Wed, 25 Nov
                </p>
              }

            </div>

            {/* content */}
            <div className="px-2 md:px-6 pt-3 md:py-5  mb-5 border">
              {/* middle */}
              <div className="flex ">
                {/* img */}
                <Link to={`/order/${item.orderId}/${item.product}`} className=" mb-6">
                  <img src={item.image} className=" w-32 h-32 object-cover " alt={item.name} />
                </Link>
                <div className="ml-3 md:ml-5 flex justify-between w-full">
                  {/* details */}
                  <div className=" w-4/5 md:w-3/5  ">
                    <Link to={`/order/${item.orderId}/${item.product}`} className="font-bold text-gray-600  h-4 md:h-6 overflow-hidden  text-sm md:text-base">
                      <p className=" h-4 md:h-6 overflow-hidden">
                        {item.name}
                      </p>
                    </Link>
                    <p className=" mt-1 text-gray-800 text-xs md:text-sm  h-4 md:h-6 overflow-hidden ">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs md:text-sm text-gray-800">
                      <b>Size:</b> XS <b>Colour:</b> Black
                    </p>
                  </div>
                  {/* x mark */}
                  {/* <div className="">
                    <AiFillCloseCircle className="text-gray-300  w-6 md:w-7 h-6  md:h-7" />
                  </div> */}

                </div>
              </div>

              {/* bottom */}
              {item.orderStatus === "Delivered" &&
                <ul>
                  <li className="text-sm   ml-5 md:ml-3 text-gray-800 list-disc">
                    Exchange/Return will be closed at 30 Nov
                  </li>
                </ul>}

            </div>
          </main>))}

      </Fragment>

    </>
  );
};

export default OrderPage;
