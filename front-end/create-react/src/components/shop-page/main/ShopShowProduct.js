import React, { Fragment} from 'react'

import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

import Loader from '../../layouts/Loader';


const ShopShowProduct = ({loading, products}) => {
  
  return (
    <>
     
     {loading ? <Loader/>:  
                            <Fragment>
                                <div className="mt-5 md:mt-8 lg:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  grid-flow-row gap-1  lg:gap-8 mb-24 ">
                                        {/* product -1*/} 
                                    {products && products.map(product => (
                                          
                                          <div className="  flex  flex-col relative border-2 " key={product._id}>
                                            <p className="bg-rose-500  text-white  font-medium text-xs md:text-base md:py-1.5 w-fit px-3 l  rounded-sm absolute top-5 left-0">
                                              {product.category}
                                            </p>
                                            <Link to={`/product/${product._id}`} preventScrollReset={true}>
                                              <img src={product.images[0].image} alt="" className="h-36 xs:h-56 lg:h-72 w-full object-cover " />
                                            </Link>
                              
                                            {/* product details */}
                                            <div className="px-1 md:px-3  pt-1 md:pt-3 md:pb-3 pb-2">
                                              <Link to={`/product/${product._id}`}>
                                                <h3 className="font-bold h-5 md:h-[27px] overflow-hidden text-sm md:text-xl">{product.name}</h3>
                                              </Link>

                                              <p className="h-4 md:h-[25px] pb-1 overflow-hidden text-xs md:text-base text-gray-500">
                                                {product.description}
                                              </p>
                              
                                              {/* ratings */}
                                              <div className=" mt-1 md:flex justify-between  text-xs md:text-base">
                                                <div className="flex items-center">
                                                  <FaStar className="text-rose-600 mr-2" /> {product.ratings} ({product.numOfReviews} Reviews)
                                                </div>
                                                <div >{product.stock?<span className="text-green-500"> In Stock</span>:<span className="text-red-500">Out of Stock</span>}</div>
                                              </div>
                              
                                              <p className="  mt-1 text-sm md:text-xl font-bold">&#8377;{product.price}</p>
                              
                                              {/* cart n wishlist */}
                                              <div className="mt-1 md:mt-3 flex gap-x-2 md:gap-x-3">
                                                <div className="bg-slate-800 font-medium text-white flex w-[70%] md:w-[85%] justify-center h-8 md:h-auto md:py-2 items-center rounded-md text-center">
                                                  <div>
                                                    <BiPlus className="text-lg md:text-2xl mr-1 md:mr-2" />
                                                  </div>
                                                  <div className='text-xs md:text-base'>Add To Cart</div>
                                                </div>
                              
                                                <div className="border-2 bg-gray-100 font-medium w-[30%] md:w-[15%] flex  justify-center h-8 md:h-auto md:py-2 items-center rounded-md text-center">
                                                  <AiOutlineHeart className="text-lg md:text-2xl" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          
                                      ))} 
                                </div>
                              </Fragment>}
      
      

    </>
  )
}

export default ShopShowProduct