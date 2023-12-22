import React, { Fragment, useState } from "react";
import { useSelector } from 'react-redux'
import CartProducts from "./main/CartProducts";
import { BiSolidOffer } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { Empty } from 'antd';
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const CartPage = () => {

  const { items } = useSelector(state => state.cartState)
  const { singleProduct } = useSelector((state) => state.singleProductState)

  const [quantity, setQuantity] = useState(1)

  const addCount = () => {

    if (singleProduct.stock === 0 || quantity >= singleProduct.stock) {
      return
    }
    setQuantity(quantity + 1)
  }

  const lessCount = () => {

    setQuantity(quantity <= 1 ? 1 : quantity - 1)
  }

  return (
    <Fragment>

      {/* main  ------------------------------------------------>*/}
      {items.length === 0 ?

        <Empty description={'Your Cart Is Empty'} className="m-10 mb-16 md:text-lg" />

        :

        <div className="  flex flex-col lg:flex-row  lg:mt-14 lg:w-11/12 mx-auto">

          {/* left  CartContent  ------------------------------------------------>*/}
          <div className=" h-full  lg:w-8/12 ">

            {/* Pincode */}
            <div className="flex items-center justify-between border py-4 md:py-6">
              <div className="font-bold pl-3 text-sm md:text-base">
                Check delivery time & services
              </div>
              <div className="pr-3">
                <button className="font-bold text-rose-500 border-2 border-rose-500 rounded-md px-1 md:px-3  py-1 text-xs md:text-base">
                  Enter Pin Code
                </button>
              </div>
            </div>

            {/* CartOffer */}
            <div className="border mt-3 md:mt-6">
              <div className=" flex gap-x-3 pt-3 pl-3 ">
                <BiSolidOffer className="text-xl md:text-2xl" />
                <p className="font-bold text-slate-900 text-sm md:text-base">
                  Available Offers
                </p>
              </div>
              <p className=" pt-2 pl-12 text-xs md:text-base pr-3 md">
                Lorem ipsum dolor sit amet consectetur adorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi dolorum, explicabo esse error
                quisquam ipsum!
              </p>
              <button className="font-bold text-rose-500 underline pl-12 pt-2 mb-4 text-sm md:text-base">
                Show More
              </button>
            </div>


            {/* CartHeading */}
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

            {/* CartDetails */}
            {items.map((item) => (
              <div className="flex px-3 md:px-6 py-3 md:py-5 mt-3 md:mt-6   border md:relative">
                <Link to={`/product/${item.product}`}>
                  <img src={item.image} className="object-cover max-w-[100px]  md:max-w-[200px] h-[148px] md:h-60 " alt="" />
                </Link>
                <div className="ml-5 flex justify-between ">
                  <div className=" md:w-2/3   ">

                    <Link to={`/product/${item.product}`} className="font-bold text-gray-600   text-xs md:text-base">
                      <p className=" h-4 md:h-6 overflow-hidden">{item.name}</p>
                    </Link>
                    <p className=" mt-1 md:mt-2 text-gray-500 h-4 md:h-6 overflow-hidden  text-xs md:text-sm">
                      {item.description}
                    </p>
                    <p className="mt-2 md:mt-3  text-gray-800 text-xs md:text-sm"> <b>Size:</b> XS <b>Colour:</b> Black</p>

                    <div className="flex items-center my-1 gx">
                      <p className="mt-2 md:mt-3 font-bold text-gray-800 text-xs md:text-sm">
                        Quantity
                      </p>

                      <div className="flex items-center justify-center ">

                        <div className="border-2 border-slate-900 px-1 py-1 md:py-2 md:px-2">
                          <button onClick={lessCount}>
                            <FaMinus />
                          </button>
                        </div>

                        <div className="border-2  border-slate-900 px-3 py-1 md:py-2 md:px-6">{quantity}</div>

                        <div className="border-2 border-slate-900  px-1 py-1 md:py-2 md:px-2">
                          <button onClick={addCount}>
                            <FaPlus />
                          </button>
                        </div>

                      </div>
                    </div>
                    <div className="flex items-center mt-1 md:mt-3 gap-x-2 text-xs md:text-base">
                      <p className=" font-bold">&#8377;{item.price - (Math.round(item.price * item.discount / 100))}</p>
                      <p className="  line-through">&#8377;{item.price}</p>
                      <p className="text-blue-600 ">{item.discount}% OFF</p>
                    </div>

                    <p className=" text-gray-800 mt-2 md:mt-3 text-xs md:text-sm">
                      Delivery by <b>15 Sep</b>
                    </p>
                  </div>

                  <div className="md:absolute right-6">
                    <AiFillCloseCircle className="text-gray-300 ml-2 md:ml-0 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            ))}



          </div>

          {/* right               Total  --------------------------------------------------> */}
          <div className="lg:w-4/12 lg:ml-7 ">

            {/* CartCoupons */}
            <div className="border mt-3">
              <div className="flex justify-between  ">
                <div className=" flex gap-x-3 pt-3 pl-3 ">
                  <MdOutlineLocalOffer className="mt-0.5 text-xl md:text-2xl" />
                  <p className="font-bold text-slate-900 text-sm md:text-base -ml-2 md:-ml-0" >Apply Coupons</p>
                </div>
                <button className="font-bold text-rose-500 mt-3 mr-3 border-2  border-rose-500 rounded-md px-2 md:px-3  py-1 text-xs md:text-base ">
                  Apply
                </button>
              </div>
              <p className=" pb-2 pl-9 md:pl-12 text-xs md:text-base">
                <span className=" text-rose-500  font-bold">Login</span> to get
                upto &#8377;300 OFF on first order
              </p>
            </div>

            {/* CartTotal */}
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

            {/* CartLines */}
            <div className="flex items-center mx-auto mt-3 gap-x-3  w-[70%] ">
              <p className="text-blue-600  ">
                <MdVerifiedUser className="h-5 w-5" />
              </p>
              <p className="text-slate-500 font-medium text-xs md:text-sm">
                Safe and Secure Payments. Easy Returns. 100% Authentic Products.
              </p>
            </div>
          </div>

        </div>
      }

      {/* product silder */}
      <CartProducts />

    </Fragment>
  );
};

export default CartPage;
