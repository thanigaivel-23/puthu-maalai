import React from 'react'
import f1 from '../../../assets/img/f1.jpg'


const AccountPic = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row md:pl-20 md:gap-x-9 items-center bg-gray-300 border-b-8 pb-2 relative '>
        
        <img className=' w-32 h-32 mt-8 mb-2 z-10' src={f1} alt="" />
        <div className='z-10 text-sm md:text-base font-bold text-center md:text-start'>
        <p >Trisha123</p>
        <p >Trisha@gmail.com</p>
        </div>
        <div className='bg-white w-full h-20 absolute  bottom-0 md:hidden'></div>

        
    </div>
    </>
  )
}

export default AccountPic