import React from 'react'

const ProductPrice = ({price, discount}) => {
  return (
    <>
    <div className="mx-5 md:mx-10 lg:m-0 ">
            <div className="flex items-center mt-2 md:mt-3 gap-x-3 ">
              <p className=" md:text-2xl font-bold">&#8377;{price - (Math.round(price*discount/100))}</p>
              <p className="  md:text-xl line-through">&#8377;{price}</p>
              <p className="text-rose-500 font-medium">({discount}% OFF)</p>
            </div>
            <div className="text-xs md:text-base font-medium">You save &#8377;{Math.round(price*discount/100)}</div>
          </div>
    </>
  )
}

export default ProductPrice