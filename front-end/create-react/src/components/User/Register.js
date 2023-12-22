import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuthError, register } from '../../actions/userActions/userActions'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const {loading, error, isAuthenticate} = useSelector(state => state.authState)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/img/profile.png')

    const onChange = (e) =>{
        if(e.target.name === 'avatar'){
            const reader = new FileReader();
            reader.onload = ()=>{
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result)
                    setAvatar(e.target.files[0])
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
        else{
            setUserData({...userData, [e.target.name] : e.target.value })
        }
    }

    const handleSumbit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',userData.name)
        formData.append('email',userData.email)
        formData.append('password',userData.password)
        formData.append('avatar',avatar)
        dispatch(register(formData))

    }

    useEffect(()=>{

        if(isAuthenticate){
            return navigate('/')
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
    },[error,isAuthenticate,dispatch, navigate])

  return (
    <Fragment>
        <div className="flex justify-center items-center  mt-16 md:mt-20 "> 
            <form onSubmit={handleSumbit} className="shadow-2xl rounded-md p-8 mb-10 w-[80%] sm:w-96">

                <h1 className="mb-3 flex justify-center text-2xl font-bold tracking-wider">Register</h1>

                <div className=" my-4">
                    <label className='block font-medium mb-1' htmlFor="email_field">Name</label>
                    <input
                        type="text"
                        className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                        name='name'
                        onChange={onChange}

                    />
                </div>

                <div className=" my-4">
                    <label className='block font-medium mb-1' htmlFor="email_field">Email</label>
                    <input
                        type="email"
                        id="email_field"
                        className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                        name='email'
                        onChange={onChange}

                    />
                </div>
    
                <div className=" my-4">
                    <label className='block font-medium mb-1' htmlFor="password_field">Password</label>
                    <input
                        type="password"
                        id="password_field"
                        className="outline-none rounded-md h-10 border-2 pl-3 w-full"
                        name='password'
                        onChange={onChange}
                    />
                </div>

                {/* avatar */}

                <div className=''>
                    <label htmlFor='avatar_upload' className='block font-medium mb-1'>Avatar</label>
                    <div className='flex items-center gap-x-6'>

                        <div className=''>
                            <figure className=''>
                                <img
                                    src = {avatarPreview}
                                    className='w-12 rounded-full'
                                    alt='user profile'
                                />
                            </figure>
                        </div>

                        <div className=''>
                            <input
                                type='file'
                                name='avatar'
                                onChange={onChange}
                                id='customFile'
                                className='hidden'
                                
                            />
                            <label className='w-full border px-3 py-2 rounded-md bg-gray-100 ' htmlFor='customFile'>
                                Choose Avatar
                            </label>
                        </div>
                    </div>
                </div>
    
                <button
                id="login_button"
                type="submit"
                className="flex justify-center items-center w-full border mt-7   mb-2 rounded-md bg-rose-500 hover:bg-rose-600 text-white h-10"
                disabled={loading}
                
                >
                REGISTER
                </button>

                <Link to="/login" className="text-gray-500 text-sm ">Already have an account?</Link>
            </form>
        </div>
 
    </Fragment>
  )
}

export default Register