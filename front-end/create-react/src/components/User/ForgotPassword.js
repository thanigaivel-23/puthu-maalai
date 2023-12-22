import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { clearAuthError, forgotPassword } from '../../actions/userActions/userActions';
import { toast } from 'react-toastify';

const ForgotPassword = () => {

    const { message, error} = useSelector(state => state.authState)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')

    const handleSumbit = (e) =>{
        e.preventDefault();
        dispatch(forgotPassword(email))
    }
    useEffect(()=>{

        if(message){
            toast(message,{
                type: 'success',
                position: toast.POSITION.TOP_CENTER
            })
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
    },[error,message,dispatch])

  return (
    <>
        <div className="flex justify-center items-center  mt-16 md:mt-20 "> 
            <form onSubmit={handleSumbit} className="shadow-2xl rounded-md p-8 mb-10 w-[80%] sm:w-96">

                <h1 className="mb-3 flex justify-center text-2xl font-bold tracking-wider">Forgot Password</h1>

                <div className=" my-4">
                    <label className='block font-medium mb-1' htmlFor="email_field">Enter Email</label>
                    <input
                        type="email"
                        id="email_field"
                        className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}

                    />
                </div>
                <Link to="/login" className="float-right text-gray-500 text-sm">Back to Login?</Link>

                <button
                id="login_button"
                type="submit"
                className="flex justify-center items-center w-full border mt-10 mb-2 rounded-md bg-rose-500 hover:bg-rose-600 text-white h-10"
                >
                Send Email
                </button>

            </form>
        </div>
    </>
  )
}

export default ForgotPassword