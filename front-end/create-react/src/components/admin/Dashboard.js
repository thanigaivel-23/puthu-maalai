import React, { useEffect } from 'react'
import { MdNavigateNext } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts } from '../../actions/productsActions/productsActions';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const { products = [] } = useSelector(state => state.productsState)
  const dispatch = useDispatch()
  let outOfStock = 0

  if (products.length > 0) {
    products.forEach((product) => {
      if (product.stock === 0) {
        outOfStock = outOfStock + 1
      }
    })
  }

  useEffect(() => {
    dispatch(getAdminProducts)
  }, [dispatch])


  return (
    <>
      {/* nav bar */}
      <AdminNavbar />

      {/* total amt */}
      <div className='flex justify-center w-full mt-10'>
        <div className=' w-[70%] bg-blue-500 text-white flex flex-col items-center justify-center '>
          <p className='pt-10 font-semibold text-2xl'>Total Amount</p>
          <p className='pb-10 pt-2 font-semibold text-xl'>&#8377; 619</p>
        </div>
      </div>

      {/* 4 box */}
      {/* products */}
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[70%] mx-auto my-10'>
        <section className='  bg-red-500 text-white flex flex-col items-center justify-center'>
          <p className='pt-10 font-semibold text-2xl'>Products</p>
          <p className=' pt-2 pb-5 font-semibold text-xl'>{products.length}</p>
          <Link to={`/admin/products`} className='flex border-t border-red-600 shadow-xl w-full items-center justify-between px-4 py-3'>
            <p className='text-sm'>View Details</p>
            <p><MdNavigateNext /></p>
          </Link>
        </section>

        {/* Orders */}
        <section className='  bg-yellow-500 text-white flex flex-col items-center justify-center'>
          <p className='pt-10 font-semibold text-2xl'>Orders</p>
          <p className=' pt-2 pb-5 font-semibold text-xl'>&#8377; 619</p>
          <Link to={`/admin/orders`} className='flex border-t border-yellow-600 shadow-xl w-full items-center justify-between px-4 py-3'>
            <p className='text-sm'>View Details</p>
            <p><MdNavigateNext /></p>
          </Link>
        </section>

        {/* Users */}
        <section className='  bg-green-500 text-white flex flex-col items-center justify-center'>
          <p className='pt-10 font-semibold text-2xl'>Users</p>
          <p className=' pt-2 pb-5 font-semibold text-xl'>&#8377; 619</p>
          <Link to={`/admin/users`} className='flex border-t border-green-600 shadow-xl w-full items-center justify-between px-4 py-3'>
            <p className='text-sm'>View Details</p>
            <p><MdNavigateNext /></p>
          </Link>
        </section>

        {/* Out of Stock */}
        <section  className='  bg-orange-500 text-white flex flex-col items-center justify-center'>
          <p className='pt-10 font-semibold text-2xl'>Out of Stock</p>
          <p className=' pt-2 pb-5 font-semibold text-xl'>{outOfStock}</p>
         
        </section>
      </div>




    </>
  )
}

export default Dashboard