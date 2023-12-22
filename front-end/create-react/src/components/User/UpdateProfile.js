import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUpdateStatus, clearAuthError, updateProfile } from '../../actions/userActions/userActions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    const {error, user, isUpdated} = useSelector(state => state.authState);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('./img/profile.png')

    const handleAvatar = (e)=>{
        
        const reader = new FileReader();
        reader.onload = ()=>{
            if(reader.readyState === 2){
                setAvatarPreview(reader.result)
                setAvatar(e.target.files[0])
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const sumbitHandler = async(e)=>{

        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name)
        formData.append('email',email)
        formData.append('avatar',avatar)
        dispatch(updateProfile(formData))
    }

    useEffect(()=>{
        
        if(user){
            setName(user.name)
            setEmail(user.email)
            if(user.avatar){
                setAvatarPreview(user.avatar)
            }
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
        if(isUpdated){
            toast('Profile Updated Successfully',{
                type : 'success',
                position : toast.POSITION.TOP_CENTER
            })
            dispatch(changeUpdateStatus)
            navigate('/account')
        }

        
    },[error,user, isUpdated, dispatch, navigate])

  return (
    <>
        <form onSubmit={sumbitHandler} className='md:w-[70%] lg:w-[50%] md:mx-auto md:border md:my-10 md:shadow-lg'>
            <div className='px-5 mt-5 border-b'>
                <p className='text-lg font-bold pb-4'>Edit Profile</p>
            </div>

            <div className='relative mt-3 border  border-white'>
                <div className='px-5 mt-3 '>

                    <label className='absolute top-0 left-10 text-sm bg-white text-gray-400' htmlFor="">Profile Picture</label>

                    <label htmlFor='customFile2' className='outline-none border  w-full py-[10px] px-[12px] h-auto text-[#282c3f] font-normal flex items-end justify-around'>
                        <img src={avatarPreview}  alt="" className='w-32 xs:w-40 lg:w-60 h-32 xs:h-40 lg:h-60    z-10 rounded-full' />
                    </label>
                  
                    <input type='file' name='avatar' id='customFile2' onChange={handleAvatar} className='hidden'/>
                        
                </div>
            </div>

            <div className='relative mt-3 border  border-white'>
                <div className='px-5 mt-3 '>
                    <label className='absolute top-0 left-10 text-sm bg-white text-gray-400' htmlFor="">Name</label>
                    <input type="text" name='name' onChange={e=>setName(e.target.value)} value={name} className='outline-none border w-full py-[10px] px-[12px] h-auto text-[#282c3f] font-normal ' />
                </div>
            </div>

            <div className='relative mt-3 border  border-white'>
                <div className='px-5 mt-3 '>
                    <label className='absolute top-0 left-10 text-sm bg-white text-gray-400' htmlFor="">Email</label>
                    <input type="email" name='email' onChange={e=>setEmail(e.target.value)} value={email} className='outline-none border w-full py-[10px] px-[12px] h-auto text-[#282c3f] font-normal ' />
                </div>
            </div>

            <div className='mx-5'>
                <button className='bg-[#ff3f6c] font-bold text-sm text-white w-full my-10 py-[11px] px-10'>
                    SAVE CHANGES
                </button>
            </div>
        </form>

    </>
  )
}

export default UpdateProfile