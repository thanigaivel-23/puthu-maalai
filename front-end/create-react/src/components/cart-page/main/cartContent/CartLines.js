import React from 'react'
import { MdVerifiedUser } from "react-icons/md";


const CartLines = () => {
  return (

    <>
    <div className="flex items-center mx-auto mt-3 gap-x-3  w-[70%] ">
            <p className="text-blue-600  ">
              <MdVerifiedUser className="h-5 w-5" />
            </p>
            <p className="text-slate-500 font-medium text-xs md:text-sm">
              Safe and Secure Payments. Easy Returns. 100% Authentic Products.
            </p>
          </div>
    
    </>

  )
}

export default CartLines