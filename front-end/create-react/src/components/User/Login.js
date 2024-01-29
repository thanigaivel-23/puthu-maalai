import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuthError, login } from '../../actions/userActions/userActions'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {


    const { loading, error, isAuthenticate } = useSelector(state => state.authState)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    useEffect(() => {


        if (isAuthenticate) {
            navigate('/')
        }

        if (error) {
            toast(error, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error',
                onOpen: () => {
                    dispatch(clearAuthError)
                }
            })
        }
    }, [error, isAuthenticate, dispatch, navigate])



    return (
        <Fragment>
            <div className="flex justify-center items-center  mt-16 md:mt-20 ">
                <form onSubmit={handleSumbit} className="shadow-2xl rounded-md p-8 mb-10 w-[80%] sm:w-96">

                    <h1 className="mb-3 flex justify-center text-2xl font-bold tracking-wider">Login</h1>

                    <div className=" my-4">
                        <label className='block font-medium mb-1' htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>

                    <div className=" my-4">
                        <label className='block font-medium mb-1' htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>

                    <Link to="/password/forgot" className="float-right text-gray-500 text-sm"> Forgot Password?</Link>

                    <button
                        id="login_button"
                        type="submit"
                        className="flex justify-center items-center w-full border mt-10 mb-2 rounded-md bg-rose-500 hover:bg-rose-600 text-white h-10"
                        disabled={loading}
                    >
                        LOGIN
                    </button>

                    <Link to="/register" className="text-gray-500 text-sm ">New User?</Link>
                </form>
            </div>
        </Fragment>
    )
}

export default Login