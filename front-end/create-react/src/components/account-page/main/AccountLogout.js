import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountLogout = () => {

  const navigate = useNavigate();
  return (
    <>
    <div className='bg-gray-200 flex justify-center px-4 pt-5' onClick={()=>{navigate('/')}}>
        <button className='bg-rose-500 text-white w-full xs:w-[50%] md:w-[25%] font-bold text-sm rounded-sm py-3 ' type='submit'>LOGOUT</button>
    </div>
    </>
  )
}

export default AccountLogout