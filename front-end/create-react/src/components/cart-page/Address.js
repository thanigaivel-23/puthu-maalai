import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { saveShippingInfo } from '../../slices/cartSlice';
import CheckoutSteps from './CheckoutSteps';

const Address = () => {

    const { shippingInfo = {} } = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo || "")
    const [address, setAddress] = useState(shippingInfo.address || "")
    const [city, setCity] = useState(shippingInfo.city || "")
    const [state, setState] = useState(shippingInfo.state || "")
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode || "")




    const country = 'India'


    const submitHandler = (e) => {

        e.preventDefault()
        dispatch(saveShippingInfo({ address, city, state, country, postalCode, phoneNo }))
        navigate('/payment')

    }
    // useEffect(() => {

    //     const fetchData = async () => {
    //         let { data } = await axios.get(`https://app.zipcodebase.com/api/v1/search?apikey=6ec05f60-c8d2-11ee-84c3-d558530dec22&codes=${postalCode}`)


    //         setCity(data.results[postalCode][0].province)
    //         setState(data.results[postalCode][0].state)

    //     }
    //     if (postalCode.length === 6) {
    //         fetchData()
    //     }
    //     fetchData()

    // }, [postalCode])

    return (
        <>
            <div className='md:w-[70%] lg:w-[50%] mx-auto mt-12 hidden md:flex items-center gap-x-3 '>
                <Link to={'/cart'}><BsArrowLeft className="text-2xl " /> </Link>
                <p className='font-medium'>ADDRESS</p>
            </div>

            <form onSubmit={submitHandler} className='md:border-2 md:w-[70%] lg:w-[50%] md:mx-auto md:my-7'>
                {/* heading */}
                <div className='flex items-center gap-x-3  px-2 border py-4 md:hidden'>
                    <Link to={'/cart'}><BsArrowLeft className="text-2xl " /> </Link>
                    <p className='font-medium text-gray-500'>ADDRESS</p>
                </div>
                <div >
                    <CheckoutSteps address />
                </div>

                {/* contact details */}
                {/* <div>
                    <p className='px-2 py-3 text-xs font-bold text-gray-700 md:bg-white bg-gray-100'>CONTACT DETAILS</p>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required className='outline-none border rounded-sm box-border w-11/12 m-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                    <input type="number" placeholder='Mobile No' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required className='outline-none border rounded-sm box-border w-11/12 m-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                </div> */}

                {/*ADDRESS*/}
                <div>
                    <p className='px-2 py-3 text-xs font-bold text-gray-700 bg-gray-100 md:bg-white'>ADDRESS</p>
                    <input type="number" placeholder='Mobile No' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className='outline-none border rounded-sm box-border w-11/12 m-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                    <input type="text" placeholder='Address (House No, Street, Area)' value={address} onChange={(e) => setAddress(e.target.value)} required className='outline-none border rounded-sm box-border w-11/12 m-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                    <input type="text" placeholder='City / District' value={city} onChange={(e) => setCity(e.target.value)} required className='outline-none border rounded-sm box-border w-11/12 m-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                    <input type="text" placeholder='State' value={state} onChange={(e) => setState(e.target.value)} required className='outline-none border rounded-sm box-border w-11/12 m-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                    <input type="number" placeholder='Pin Code' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required className='outline-none border rounded-sm box-border w-11/12 m-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                </div>

                {/* SAVE ADDRESS  */}
                <button className=' flex justify-center my-4 w-full' >
                    <p className='w-10/12 text-white bg-rose-500 rounded-sm py-3'>Proceed</p>
                </button>

            </form>
        </>
    )
}

export default Address