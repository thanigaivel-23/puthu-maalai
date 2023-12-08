import React from 'react'
import { Link } from 'react-router-dom'

const ShopOurCollection = () => {
  return (
    <div className="  text-center font-sans">
    <h3 className="font-bold text-xl md:text-4xl pt-8  md:pt-14">SHOP OUR COLLECTION</h3>
    <p className="text-xs mb-4 md:mb-6 md:text-base pt-1 md:pt-3">Explore our wide range of collections</p>

    <Link to='/shop' className="text-xs md:text-base px-4 py-2 border-2 border-black">
      Shop All
    </Link>
  </div>
  )
}

export default ShopOurCollection