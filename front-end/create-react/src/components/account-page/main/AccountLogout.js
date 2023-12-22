import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../actions/userActions/userActions'
import { useNavigate } from 'react-router-dom'

const AccountLogout = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
    
  const logoutHandler = () =>{
      dispatch(logout)
      navigate('/')
  }
  return (
    <>
    <div className='bg-gray-200 flex justify-center px-4 pt-5' >
        <button onClick={logoutHandler} className='bg-rose-500 text-white w-full xs:w-[50%] md:w-[25%] font-bold text-sm rounded-sm py-3 ' type='submit'>LOGOUT</button>
    </div>
    </>
  )
}

export default AccountLogout