import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center my-24 gap-y-4 md:gap-y-7'>
                <img src="/img/success.png" className='w-2/5 md:w-[20%]' alt="success" />
                <p className='font-bold  md:text-2xl '>Your order has been placed successfully</p>
                <Link to={'/orders'} className='text-blue-500 font-medium text-sm cursor-pointer'>Go to Order</Link>
            </div>
        </>
    )
}

export default PaymentSuccess