import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux'
import CartProducts from "./cartContent/CartProducts";
import { BiSolidOffer } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { Empty } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { decreaseCartItemQty, increaseCartItemQty, removeItemFromCart } from "../../slices/cartSlice";
import CheckoutSteps from "./CheckoutSteps";

const CartPage = () => {

  const { items } = useSelector(state => state.cartState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const increaseQty = (item) => {
    const count = item.quantity
    if (item.stock === 0 || count >= item.stock) return;
    dispatch(increaseCartItemQty(item.product))
  }

  const decreaseQty = (item) => {
    const count = item.quantity
    if (count === 1) return;
    dispatch(decreaseCartItemQty(item.product))
  }

  //total details


  let productPriceBeforeDiscount = items.reduce((acc, item) => (acc + item.price * item.quantity), 0)
  let discountPrice = items.reduce((acc, item) => (Math.round(item.price * item.discount / 100) * item.quantity), 0)
  let productPrice = productPriceBeforeDiscount - discountPrice
  let convenienceFee = 50
  let tax = Math.round(productPrice * 0.18)

  let total = productPrice + convenienceFee + tax


  //Proceed to payment
  const paymentData = () => {
    const data = {
      productPriceBeforeDiscount, discountPrice, productPrice, convenienceFee, tax, total
    }
    sessionStorage.setItem('orderInfo', JSON.stringify(data))
  }

  //checkOut
  const checkoutHandler = () => {

    navigate('/address')
    paymentData()

  }

  return (
    <Fragment>

      {/* main  ------------------------------------------------>*/}
      {items.length === 0 ?
        <Empty description={false} className="m-10 mb-16 md:text-lg font-bold" >

          <div className="mt-24">Your Cart Is Empty,
            <Link to={'/shop'} className=" text-rose-500 ml-1">Shop Now</Link>
          </div>
        </Empty>

        :
        <Fragment>

          <CheckoutSteps bag />

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
                <div key={item.product} className="flex px-3 md:px-6 py-3 md:py-5 mt-3 md:mt-6   border md:relative">
                  {/* img */}
                  <Link to={`/product/${item.product}`}>
                    <img src={item.image} className="object-cover max-w-[100px]  md:max-w-[200px] h-[148px] md:h-60 " alt="" />
                  </Link>
                  <div className="pl-5 flex justify-between w-full ">

                    <div className="  md:w-2/3">
                      {/* name */}
                      <Link to={`/product/${item.product}`} className="font-bold text-gray-600   text-xs md:text-base">
                        <p className=" h-4 md:h-6 overflow-hidden">{item.name}</p>
                      </Link>

                      {/* description */}
                      <p className=" mt-1 md:mt-2 text-gray-500 h-4 md:h-6 overflow-hidden  text-xs md:text-sm">
                        {item.description}
                      </p>

                      {/* size & color */}
                      <p className="mt-2 md:mt-3  text-gray-800 text-xs md:text-sm"> <b>Size:</b> XS <b>Colour:</b> Black</p>

                      {/* quantity */}
                      <div className="flex items-center my-1 gx">
                        <p className="mt-2 md:mt-3 font-bold text-gray-800 text-xs md:text-sm">
                          Quantity
                        </p>

                        <div className=" ml-2 flex items-center justify-center ">

                          <div className="border-2 border-slate-900 px-1 py-1 md:py-2 md:px-2">
                            <button onClick={() => decreaseQty(item)}>
                              <FaMinus />
                            </button>
                          </div>

                          <div className="border-2  border-slate-900 px-3 py-1 md:py-2 md:px-6">
                            {item.quantity}
                          </div>


                          <div className="border-2 border-slate-900  px-1 py-1 md:py-2 md:px-2">
                            <button onClick={() => increaseQty(item)}>
                              <FaPlus />
                            </button>
                          </div>

                        </div>
                      </div>

                      {/* price */}
                      <div className="flex items-center mt-1 md:mt-3  gap-x-2 text-xs md:text-base">
                        <p className=" font-bold">&#8377;{(item.price - (Math.round(item.price * item.discount / 100))) * item.quantity}</p>
                        <p className="  line-through">&#8377;{item.price * item.quantity}</p>
                        <p className="text-blue-600 ">{item.discount}% OFF</p>
                      </div>

                      {/* delivery */}
                      <p className=" text-gray-800 mt-2 md:mt-3 text-xs md:text-sm">
                        Delivery by <b>15 Sep</b>
                      </p>

                    </div>

                    <div className="md:absolute cursor-pointer right-6" onClick={() => dispatch(removeItemFromCart(item.product))}>
                      <AiFillCloseCircle className="text-gray-300 ml-2 md:ml-0 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              ))}



            </div>

            {/* right               total  --------------------------------------------------> */}
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
                  PRICE DETAILS ({items.length} ITMES)
                </h3>
                <div className="flex justify-between mt-3 text-xs md:text-base">
                  <p className="text-slate-700">total MRP</p>
                  <p className="font-bold">&#8377;{productPriceBeforeDiscount}</p>
                </div>
                <div className="flex justify-between mt-3 text-xs md:text-base">
                  <p className="text-slate-700">Discount on MRP</p>
                  <p className="font-bold">&#8377;{discountPrice}</p>
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
                    &#8377;{convenienceFee}
                  </p>
                </div>

                <div className="flex justify-between mt-3 border-b-2 pb-5 text-xs md:text-base">
                  <p className="text-slate-700">Tax</p>
                  <p className="font-bold">&#8377;{tax}</p>
                </div>
                <div className="flex justify-between mt-3  text-sm">
                  <p className="text-slate-700 font-bold md:text-lg">total</p>
                  <p className="font-bold md:text-lg">&#8377;{total}</p>
                </div>
                <button onClick={checkoutHandler}
                  className="bg-rose-500 text-white font-semibold rounded-md text-center h-12 mt-4 w-full text-sm md:text-base">
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
        </Fragment>
      }

      {/* product silder */}
      <CartProducts />

    </Fragment>
  );
};

export default CartPage;
