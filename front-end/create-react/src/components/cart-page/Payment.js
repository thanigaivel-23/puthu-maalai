import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { orderCompleted } from '../../slices/cartSlice'
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { createOrder } from '../../actions/orderActions'
import { clearOrderError } from '../../slices/orderSlice'

const Payment = () => {

    const { user } = useSelector(state => state.authState)
    const { error: orderError } = useSelector(state => state.orderState)
    let { items: cartItems, shippingInfo } = useSelector(state => state.cartState)
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))



    let orderItems = []

    //price - discount
    cartItems.forEach((item, index) => {
        const priceAfterDiscount = item.price - Math.round(item.price * item.discount / 100)
        orderItems = [...orderItems,{ ...item }]
        orderItems[index].price = priceAfterDiscount
    })

    //removing fields (stock, discount)
    orderItems = orderItems.map(({stock, discount, ...item})=>item)
    
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const paymentData = {
        amount: orderInfo && orderInfo.total,
        shipping: {
            name: user.name,
            phone: shippingInfo.phoneNo,
            address: {
                line1: shippingInfo.address,
                city: shippingInfo.city,
                state: shippingInfo.state,
                postal_code: shippingInfo.postalCode,
                country: 'united states'
            }
        }
    }

    //for creating order (order model requirements)
    const order = {
        orderItems,
        shippingInfo
    }



    if (orderInfo) {
        order.itemsPrice = orderInfo.productPrice
        order.shippingPrice = orderInfo.convenienceFee
        order.taxPrice = orderInfo.tax
        order.totalPrice = orderInfo.total
    }

   

    // const validateShipping = () => {

    //     if (!shippingInfo.address || !shippingInfo.city || !shippingInfo.state || !shippingInfo.postalCode) {
    //         toast.error('Please fill the shipping information', { position: toast.POSITION.TOP_CENTER })
    //         navigate('/address')
    //     }
    // }

    useEffect(() => {
        if (orderError) {
            toast(orderError, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error',
                onOpen: () => {
                    dispatch(clearOrderError())
                }
            })
        }
    })

    const submitHandling = async (e) => {

        e.preventDefault()
        document.querySelector('#pay_btn').disabled = true

        try {
            const { data } = await axios.post('/api/payment/process', paymentData)

            const clientSecret = data.client_secret

            const result = stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email
                    }
                }
            })

            if ((await result).error) {

                toast((await result).error.message, {
                    type: 'error',
                    position: toast.POSITION.TOP_CENTER
                })

                document.querySelector('#pay_btn').disabled = false

            }
            else {

                if ((await result).paymentIntent.status === 'succeeded') {


                    toast('Payment Success!!!', {
                        type: "success",
                        position: toast.POSITION.TOP_CENTER
                    })

                    order.paymentInfo = {
                        id: (await result).paymentIntent.id,
                        status: (await result).paymentIntent.status
                    }

                    orderInfo && dispatch(orderCompleted())
                    dispatch(createOrder(order))

                    navigate('/order/success')
                }
                else {

                    toast('Please try again', {
                        type: 'warning',
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            }


        } catch (error) {

        }


    }

    return (
        <>
            <div className='flex justify-center items-center  mt-16 md:mt-20'>
                <form onSubmit={submitHandling} className="shadow-2xl rounded-md p-8 mb-10 w-[80%] sm:w-96">
                    <h1 className="mb-3 flex justify-center text-2xl font-bold tracking-wider">Card Info</h1>
                    <div className="my-4">
                        <label className='block font-medium mb-1' htmlFor="card_num_field">Card Number</label>
                        <CardNumberElement
                            type="text"

                            id="card_num_field"
                            className="outline-none rounded-md h-10 border-2 pl-3 w-full pt-3"
                            value=""
                        />
                    </div>

                    <div className="my-4">
                        <label className='block font-medium mb-1' htmlFor="card_exp_field">Card Expiry</label>
                        <CardExpiryElement
                            type="text"
                            id="card_exp_field"
                            className="outline-none rounded-md h-10 border-2 pl-3 w-full pt-3"
                            value=""
                        />
                    </div>

                    <div className="my-4">
                        <label className='block font-medium mb-1' htmlFor="card_cvc_field">Card CVC</label>
                        <CardCvcElement
                            type="text"
                            id="card_cvc_field"
                            className="outline-none rounded-md h-10 border-2 pl-3 w-full pt-3"
                            value=""
                        />
                    </div>


                    <button
                        id="pay_btn"
                        type="submit"
                        className="flex justify-center items-center w-full border mt-10 mb-2 rounded-md bg-rose-500 hover:bg-rose-600 text-white h-10"
                    >
                        Pay - &#8377;{orderInfo && orderInfo.total}
                    </button>

                </form>
            </div>
        </>
    )
}

export default Payment