import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-center gap-x-10 lg:gap-x-28 p-4  border-b-2'>
      <Link to='/admin/dashboard' className='flex items-center gap-x-2'><MdOutlineDashboard className='text-rose-500 text-2xl' />{window.screen.width < 640 ? '' : 'Dashboard'}</Link>
      <Link to='/admin/products' className='flex items-center gap-x-2'><LiaProductHunt className='text-rose-500 text-2xl' />{window.screen.width < 640 ? '' : 'Products'}</Link>
      <Link to='/admin/orders' className='flex items-center gap-x-2'><IoBagCheckOutline className='text-rose-500 text-2xl' />{window.screen.width < 640 ? '' : 'Orders'}</Link>
      <Link to='/admin/users' className='flex items-center gap-x-2'> <PiUsersThree className='text-rose-500 text-2xl' />{window.screen.width < 640 ? '' : 'Users'}</Link>
      <Link to='/admin/reviews' className='flex items-center gap-x-2'><MdOutlineRateReview className='text-rose-500 text-2xl' />{window.screen.width < 640 ? '' : 'Reviews'}</Link>
      <Link to='/admin/category' className='flex items-center gap-x-2'><MdOutlineRateReview className='text-rose-500 text-2xl' />{window.screen.width < 640 ? '' : 'Category'}</Link>
    </div>
  )
}

export default AdminNavbar