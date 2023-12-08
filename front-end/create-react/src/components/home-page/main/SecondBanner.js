import React from 'react'
import f1 from "../../../assets/img/f1.jpg";
import f2 from "../../../assets/img/f2.jpg";
import f3 from "../../../assets/img/f3.webp";
import f4 from "../../../assets/img/f4.jpg";


const SecondBanner = () => {
  return (
    <div className="flex flex-wrap w-full shadow-2xl">
        <img src={f1} className='w-[50%] h-32 sm:h-auto sm:w-1/4' alt="" />
        <img src={f2} className='w-[50%] h-32 sm:h-auto sm:w-1/4' alt="" />
        <img src={f3} className='w-[50%] h-32 sm:h-auto sm:w-1/4' alt="" />
        <img src={f4} className='w-[50%] h-32 sm:h-auto sm:w-1/4' alt="" />
      </div>
  )
}

export default SecondBanner