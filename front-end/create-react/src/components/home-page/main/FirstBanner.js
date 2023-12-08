import React from 'react'
import img from "../../../assets/img/black.jpg";


const FirstBanner = () => {
  return (
    <div
        className=" relative w-full h-36 md:h-64 lg:h-72"
        style={{
          backgroundImage: `url(${img})`,
          
        }}
      >
        <div className="text-white absolute right-20 md:right-60 font-sans ">
          <h3 className="font-bold text-xl md:text-4xl pt-5 md:pt-14">Style & Shine with us</h3>
          <p className="text-xs md:text-lg pt-1  md:pt-3">Explore our wide range of collections</p>

          <button
            type="sumbit"
            className="mt-4 text-xs md:text-base bg-pink-600 px-3 py-2 rounded-lg text-center"
          >
            Shop Now
          </button>
        </div>
      </div>
  )
}

export default FirstBanner