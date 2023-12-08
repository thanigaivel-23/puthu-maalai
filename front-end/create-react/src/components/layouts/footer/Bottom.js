import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Bottom = () => {
  return (
    <div className=" lg:flex  w-full pb-14 lg:px-14 xl:pl-52 bg-gray-800 text-white justify-start lg:gap-14 xl:gap-28">
{/* 1 */}
<div className="lg:my-10 pl-5 lg:pl-0">
  <h3 className="font-bold   py-4">Company Info</h3>
  <ul className="flex flex-wrap gap-3 lg:flex-col lg:gap-0 lg:gap-y-1">
    <li className='text-xs md:text-base border-r border-white pr-3 lg:border-none'>About Us</li>
    <li className='text-xs md:text-base border-r border-white pr-3 lg:border-none'>Career</li>
    <li className='text-xs md:text-base border-r border-white pr-3 lg:border-none'>My Stories</li>
    <li className='text-xs md:text-base'>Press</li>
  </ul>
</div>
{/* 2 */}
<div className="lg:my-10 pl-5 lg:pl-0">
  <h3 className="font-bold py-4 ">Features</h3>
  <ul className="flex flex-wrap gap-3 lg:flex-col lg:gap-0 lg:gap-y-1">
    <li className='text-xs md:text-base border-r border-white lg:border-none pr-3'>Shiping</li>
    <li className='text-xs md:text-base border-r border-white lg:border-none pr-3'>Cancellection</li>
    <li className='text-xs md:text-base border-r border-white lg:border-none pr-3'>Terms & Conditions</li>
    <li className='text-xs md:text-base'>Privacy Policy</li>
  </ul>
</div>

{/* 3 */}
<div className="lg:my-10  pl-5 lg:pl-0">
  <h3 className="font-bold py-4">Get In Touch</h3>
  
      <div className=" relative rounded-md bg-red-200 w-fit h-9 lg:h-12 ">
        <input
        id="23"
          type="text"
          placeholder="Your Email"
          className="outline-none placeholder:text-xs placeholder:md:text-base placeholder:text-gray-900 pl-3 pr-24  lg:w-72 text-red-900 rounded-lg h-full  "
        />
        <button
          type="sumbit"
          className=" bg-rose-500 text-xs md:text-base rounded-r-sm absolute px-4 h-full right-0"
        >
          Sumbit
        </button>

      </div>
</div>

{/* 4 */}
<div className="lg:my-10 pl-5 lg:pl-0">
  <h3 className="font-bold py-4">Company Info</h3>
  <ul className="flex flex-wrap gap-3 lg:flex-col lg:gap-0 lg:gap-y-1">
    <li className="text-xs md:text-base flex items-center gap-2 border-r border-white  pr-3 lg:border-none"> <IoCallOutline className="text-xl"/> 1200 143 8739</li>
    <li className="text-xs md:text-base flex items-center gap-2 border-r border-white  pr-3 lg:border-none"> <IoLocationOutline className="text-xl"/> Mumbai</li>
    <li className="text-xs md:text-base flex items-center gap-2 "> <IoMailOutline className="text-xl"/> info@pudhumaalai.com</li>
   
    
  </ul>
</div>
</div>
  )
}

export default Bottom