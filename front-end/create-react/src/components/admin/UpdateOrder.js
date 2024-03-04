import React, { Fragment, useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateOrders, orderDetail as orderDetailAction } from '../../actions/orderActions'
import { clearOrderError, clearOrderUpdated } from '../../slices/orderSlice'
import Loader from '../layouts/Loader'
import { TbTruckDelivery } from 'react-icons/tb'

const UpdateOrder = () => {


    const { loading, isOrderUpdated, error, orderDetail } = useSelector(state => state.orderState)
    const { shippingInfo = {}, user = {}, orderItems = [], itemsPrice = 0, taxPrice = 0, shippingPrice = 0, totalPrice = 0, paymentInfo = {} } = orderDetail
    const isPaid = paymentInfo && paymentInfo.status === 'succeeded' ? true : false



    const [orderStatus, setOrderStatus] = useState('Processing')

    const { id: orderId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const submitHandle = (e) => {

        e.preventDefault();
        const orderData = {}
        orderData.orderStatus = orderStatus
        dispatch(updateOrders(orderId, orderData))

    }

    useEffect(() => {
        if (isOrderUpdated) {
            toast('Order Updated Successfully', {
                position: toast.POSITION.TOP_CENTER,
                type: 'success',
                onOpen: () => {
                    dispatch(clearOrderUpdated())
                }
            })
            navigate('/admin/orders')
            return;
        }

        if (error) {
            toast(error, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error',
                onOpen: () => {
                    dispatch(clearOrderError())
                }
            })
            return;
        }

        dispatch(orderDetailAction(orderId))


    }, [isOrderUpdated, error, dispatch, navigate, orderId])

    useEffect(() => {
        if (orderDetail._id) {
            setOrderStatus(orderDetail.orderStatus)
        }
    }, [orderDetail])

    return (
        <>
            {loading ? <Loader /> :

                <Fragment >
                    <div className='md:w-[70%] lg:w-[50%] mx-auto mt-12 hidden md:flex items-center gap-x-3 '>
                        <Link to={'/admin/orders'}><BsArrowLeft className="text-2xl " /> </Link>
                        <p className='font-medium'>Orders</p>
                    </div>

                    <div className='md:border-2 md:w-[70%] lg:w-[50%] md:mx-auto md:my-7'>
                        {/* order items */}
                        <div className='mt-5 '>

                            <div className=' border-b-8 py-3 border-[#f5f5f5] pl-5'>

                                <p className='font-bold mx-5 mb-3 '>Change Order Status</p>

                                <div className='flex gap-x-5 items-center mx-5 mb-4 '>


                                    <select name="" id="" value={orderStatus} onChange={e => setOrderStatus(e.target.value)} className='outline-none border border-gray-300 px-2 py-1'>
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Out For Delivery">Out For Delivery</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                    <button onClick={submitHandle} disabled={loading} className='py-2 px-3 bg-rose-500 text-white rounded-md'>Save</button>

                                </div>

                                {/* isDelivered */}
                                <div className={`flex items-center justify-start mx-5 px-3 py-4 my-3 gap-x-3 font-bold ${orderStatus === 'Delivered' ? ' bg-[#03a685]' : 'bg-rose-500'} text-white`}>
                                    <TbTruckDelivery className="w-6 h-6 white" />
                                    {orderStatus}
                                </div>

                            </div>

                            {/* heading */}
                            <div className='ml-5  my-3'>
                                <p className='font-bold'>Order item</p>
                                <p className='text-gray-400 text-sm'>order ID {orderDetail._id} </p>
                            </div>

                            {/* products */}
                            {orderItems && orderItems.map((item, index) => (
                                <div key={index} className="flex ml-5 bg-[#f5f5f5] px-4 pt-4 mr-5 rounded-md border">
                                    {/* img */}
                                    <Link to={`/product/${item.product}`} className=" mb-6">
                                        <img src={item.image} className=" w-32 h-32 object-cover " alt={item.name} />
                                    </Link>
                                    <div className="ml-3 md:ml-5 flex justify-between w-full">
                                        {/* details */}
                                        <div className=" w-4/5 md:w-3/5  ">
                                            <Link to={`/product/${item.product}`} className="font-bold text-gray-600  h-4 md:h-6 overflow-hidden  text-sm md:text-base">
                                                <p className=" h-4 md:h-6 overflow-hidden">
                                                    {item.name}
                                                </p>
                                            </Link>
                                            <p className=" mt-1 text-gray-800 text-xs md:text-sm  h-4 md:h-6 overflow-hidden ">
                                                {item.description}
                                            </p>
                                            <p className="mt-3 text-xs md:text-sm text-gray-800">
                                                <b>Size:</b> XS <b>Colour:</b> Black
                                            </p>
                                        </div>


                                    </div>
                                </div>))}



                            {/* is paid */}
                            <div className={`flex items-center justify-start mx-5 px-3 py-4 my-3 gap-x-3 font-bold ${isPaid ? 'bg-[#03a685] ' : 'bg-rose-500'} text-white`}>
                                {isPaid ? 'paid' : 'Payment is pending'}
                            </div>

                            {/* Delivery address */}
                            <div className='border-t-8 py-3 border-[#f5f5f5] pl-5'>

                                <p className='font-bold  mb-4'>Delivery Address</p>

                                {/* name and number */}
                                <div className='font-bold flex items-center gap-x-3 text-sm'>
                                    <p className='border-r-2 border-gray-200 pr-3 '>{user.name}</p>
                                    <p>{shippingInfo.phoneNo}</p>
                                </div>

                                {/* address */}
                                <p className='text-sm my-2'>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.postalCode}</p>

                            </div>

                            {/* total */}
                            <div className='px-5 font-bold py-3 text-sm border-t-8 border-[#f5f5f5] '>
                                <div className='flex justify-between my-2'>
                                    <p>Items Price</p>
                                    <p>&#8377; {itemsPrice}</p>
                                </div>
                                <div className='flex justify-between my-2'>
                                    <p>tax Price</p>
                                    <p>&#8377; {taxPrice}</p>
                                </div>
                                <div className='flex justify-between my-2 mb-2'>
                                    <p>Shipping Price</p>
                                    <p>&#8377; {shippingPrice}</p>
                                </div>
                                <div className='flex justify-between border-t my-2 pt-4'>
                                    <p>Total Order Price</p>
                                    <p>&#8377; {totalPrice}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Fragment>
            }


        </>
    )
}

export default UpdateOrder