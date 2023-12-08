import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";


const RoseBar = () => {
  return (
    <div className="flex justify-around  bg-rose-500 text-white p-1">

        <div className='flex flex-col items-center'>
          <p className='md:flex justify-center items-center '><FaShippingFast className='mr-2 text-xl' /><span className='hidden md:block'>Free delivery & Returns*</span></p>
          <p className='md:hidden text-xs sm:text-base'>Free  </p>
          <p className='md:hidden text-xs sm:text-base'> delivery </p>
        </div>

        <div className='flex flex-col items-center'>
        <p className='md:flex justify-center items-center '><BsShieldLock className='mr-2 text-xl'/><span className='hidden md:block'>Secure Payment</span></p>

          <p className='md:hidden text-xs sm:text-base'>Secure  </p>
          <p className='md:hidden text-xs sm:text-base'> Payment </p>
        </div>

        <div className='flex flex-col items-center'>
        <p className='md:flex justify-center items-center '><GoVerified className='mr-2 text-xl'/><span className='hidden md:block'>Genuine Guaranteed</span></p>

            <p className='md:hidden text-xs sm:text-base'>Genuine  </p>
            <p className='md:hidden text-xs sm:text-base'> Guaranteed </p>
        </div>

        <div className='flex flex-col items-center'>
        <p className='md:flex justify-center items-center '><MdVerifiedUser className='mr-2 text-xl'/><span className='hidden md:block'>100% Authentic Products</span> </p>
         
       <p className='md:hidden text-xs sm:text-base'>100% Authentic </p>
       <p className='md:hidden text-xs sm:text-base'>Products</p>
        </div>


      </div>
  )
}

export default RoseBar  