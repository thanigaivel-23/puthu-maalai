import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, resetPassword } from '../../actions/userActions/userActions';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {

    const {error, isPasswordChanged} = useSelector(state => state.authState)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {token} = useParams();
    


    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSumbit = (e) =>{
        e.preventDefault();
        dispatch(resetPassword(password, confirmPassword, token))
    }

    useEffect(()=>{

        if(isPasswordChanged){
            toast('Password changed successfully',{
                type: 'success',
                position: toast.POSITION.TOP_CENTER
            })
            navigate('/login')
        }

        if(error){
            toast(error, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error', 
                onOpen: ()=>{
                    dispatch(clearAuthError)
                }
            })
        }
    },[error,isPasswordChanged,dispatch, navigate])

  return (
    <>
         <div className="flex justify-center items-center  mt-16 md:mt-20 "> 
            <form onSubmit={handleSumbit} className="shadow-2xl rounded-md p-8 mb-10 w-[80%] sm:w-96">

                <h1 className="mb-3 flex justify-center text-2xl font-bold tracking-wider">New Password</h1>

                <div className=" my-4">
                    <label className='block font-medium mb-1' htmlFor="email_field">Password</label>
                    <input
                        type="password"
                        className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}

                    />
                </div>

                <div className=" my-4">
                    <label className='block font-medium mb-1' htmlFor="email_field">Confirm Password</label>
                    <input
                        type="password"
                        className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}

                    />
                </div>

                <button
                id="login_button"
                type="submit"
                className="flex justify-center items-center w-full border mt-10 mb-2 rounded-md bg-rose-500 hover:bg-rose-600 text-white h-10"
                >
                Set Password
                </button>

            </form>
        </div>
    </>
  )
}

export default ResetPassword