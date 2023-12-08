import React from 'react'
import perfume from "../../../assets/img/perfume.jpeg";


const FourthBanner = () => {
  return (
    <div className="flex justify-center items-center mt-10 md:mt-24 mb-6 ">
        <div
          style={{
            backgroundImage: `url(${perfume})`,
          }}
          className=" w-5/6 h-36 md:h-64 lg:h-72  relative  bg-no-repeat bg-cover font-sans flex flex-col shadow-2xl pl-8 md:pl-20 lg:pl-40 "
        >
          <h3 className="font-bold test-xl md:text-4xl pt-4 md:pt-14">Gift Card</h3>
          <p className="md:pt-3 text-xs md:text-base font-semibold ">Get 10% discount on every gift card</p>

          <button
            type="sumbit"
            className="mt-4 text-xs md:text-base bg-rose-500 text-white px-3 py-1 md:py-2 rounded-lg text-center self-start"
          >
            Shop Now
          </button>
        </div>
      </div>

  )
}

export default FourthBanner