import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { AiFillCloseCircle } from "react-icons/ai";
import { Empty } from 'antd';
import { Link } from 'react-router-dom'
import { removeItemFromWishlist } from "../../slices/cartSlice";
import {  moveToCart } from "../../actions/cartActions";
import { toast } from 'react-toastify';


const Wishlist = () => {

    const { wishlistItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    const moveToCartHandle = (id) => {
        toast('Cart Item Added!', {
            type: 'success',
            position: toast.POSITION.TOP_CENTER
        })
        dispatch(moveToCart(id,1))
        
    }



    return (
        <Fragment>

            {/* main  ------------------------------------------------>*/}
            {wishlistItems.length === 0 ?
                <Empty description={false} className="m-10 mb-16 md:text-lg font-bold" >

                    <div className="mt-24 text-black">Your Wishlist Is Empty,
                        <Link to={'/shop'} className=" text-rose-500 ml-1">Shop Now</Link>
                    </div>
                </Empty>

                :
                <Fragment>


                    <p className="mx-2 md:mx-auto my-3 md:mt-14 md:w-11/12 font-bold md:text-xl">My Wishlist {wishlistItems.length} items </p>

                    <div className="md:mt-14 md:w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  grid-flow-row gap-2 md:gap-7 lg:gap-10 mx-2 md:mx-auto mb-8">


                        {/* CartDetails */}

                        {wishlistItems.map((item) => (

                            <div key={item.product} className="border relative">
                                {/* img */}
                                <Link to={`/product/${item.product}`}>
                                    <img src={item.image} className=" object-cover h-72 w-72 " alt="" />
                                </Link>

                                <div className="mx-3 my-2 ">

                                    <div className="  ">
                                        {/* name */}
                                        <Link to={`/product/${item.product}`} className="font-bold text-gray-600   text-xs md:text-base">
                                            <p className=" h-4 md:h-6 overflow-hidden">{item.name}</p>
                                        </Link>


                                        {/* price */}
                                        <div className="flex items-center mt-1 md:mt-3  gap-x-2 text-xs md:text-base">
                                            <p className=" font-bold">&#8377;{(item.price - (Math.round(item.price * item.discount / 100)))}</p>
                                            <p className="  line-through">&#8377;{item.price}</p>
                                            <p className="text-blue-600 ">{item.discount}% OFF</p>
                                        </div>



                                    </div>

                                    <div className="absolute cursor-pointer top-4 right-3" onClick={() => dispatch(removeItemFromWishlist(item.product))}>
                                        <AiFillCloseCircle className="text-gray-500 w-7 h-7" />
                                    </div>
                                </div>

                                <button className="w-full border text-center text-rose-500 font-bold py-2 text-sm md:text-base"
                                    onClick={() => moveToCartHandle(item.product)} >
                                    MOVE TO CART
                                </button>
                            </div>
                        ))}


                    </div>



                </Fragment>
            }


        </Fragment >
    );
}

export default Wishlist