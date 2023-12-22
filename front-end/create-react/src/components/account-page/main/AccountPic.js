import React from 'react'


const AccountPic = ({user}) => {

  return (
    <>
    {user &&
    <div className='flex flex-col md:flex-row md:pl-20 md:gap-x-9 items-center bg-gray-300 border-b-8 pb-2 relative '>
        <img className=' w-32 xs:w-40 lg:w-60 h-32 xs:h-40 lg:h-60 mt-8 mb-1 z-10 rounded-full' src={user.avatar ?? './img/profile.png'} alt="" />
        <div className='z-10   text-center md:text-start'>
        <p className='font-medium md:text-lg'>{user.name}</p>
        <p className='font-medium md:text-lg'>{user.email}</p>  
        </div>
        <div className='bg-white w-full h-24 absolute  bottom-0 md:hidden'></div>
    </div>}
    </>
  )
}

export default AccountPic