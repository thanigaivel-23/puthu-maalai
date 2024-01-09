import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { orderCompleted } from '../../slices/cartSlice'

const Payment = () => {

    // const { user } = useSelector(state => state.authState)
    const { items: cartItems, shippingInfo } = useSelector(state => state.cartState)
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let finalPrice = orderInfo.TotalMRP - orderInfo.discountedMRP

    // stripe
    // const paymentData = {
    //     amount: orderInfo.TotalMRP - orderInfo.discountedMRP,
    //     shipping: {
    //         name: user.name,
    //         phone: shippingInfo.phoneNo,
    //         address: {
    //             line1: shippingInfo.address,
    //             locality: shippingInfo.locality,
    //             district: shippingInfo.district,
    //             state: shippingInfo.state,
    //             pincode: shippingInfo.pincode
    //         }
    //     }
    // }

    const order = {
        orderItems: cartItems,
        shippingInfo
    }

    if (orderInfo) {
        order.TotalMRP = orderInfo.TotalMRP
        order.discountedMRP = orderInfo.discountedMRP
    }

    const validateShipping = () => {

        if (
            !shippingInfo.address ||
            !shippingInfo.locality ||
            !shippingInfo.district ||
            !shippingInfo.state ||
            !shippingInfo.pincode
        ) {
            toast.error('Please fill the shipping information', { position: toast.POSITION.TOP_CENTER })
            navigate('/address')
        }
    }

    useEffect(() => {
        validateShipping()
    })

    const submitHandling = (e) => {
        e.preventDefault()
        document.querySelector('#payment_button').disabled = true
        toast.success('payment success',{position: toast.POSITION.TOP_CENTER})
        dispatch(orderCompleted())
        navigate('/order/success')
    }

    return (
        <>
            <div>payment page</div>
            <form onSubmit={submitHandling} >

                <button id='payment_button' className='border p-5 bg-rose-500 text-white disabled:bg-rose-300' >pay {finalPrice}</button>
            </form>
        </>
    )
}

export default Payment