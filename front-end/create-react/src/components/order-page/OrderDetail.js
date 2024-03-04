import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { createReview, orderDetail as orderDetailAction } from '../../actions/orderActions'
import Loader from '../layouts/Loader'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsArrowLeft } from 'react-icons/bs'
import { Modal, Rate } from 'antd';
import { toast } from "react-toastify";
import { clearReviewError } from "../../slices/orderSlice";
import { getSingleProduct } from '../../actions/productsActions/singleProductAction'

const OrderDetail = () => {

    const { orderDetail, loading, error } = useSelector(state => state.orderState)
    const { shippingInfo = {}, user = {}, orderStatus = "Waiting", orderItems = [], itemsPrice = 0, taxPrice = 0, shippingPrice = 0, totalPrice = 0, paymentInfo = {} } = orderDetail
    const isPaid = paymentInfo && paymentInfo.status === 'succeeded' ? true : false

    const { singleProduct } = useSelector(state => state.singleProductState)
    const { reviews = [] } = singleProduct

    const dispatch = useDispatch()
    const { id, product } = useParams();

    //filtering get one order item
    const getOneOrderItem = orderItems.filter((orderItem) => orderItem.product === product)

    //filtering get other order items
    const getOtherOrderItems = orderItems.filter((orderItem) => orderItem.product !== product)

    //for updating reviews
    const updatingReview = reviews.filter((review) => review.user._id === user._id)

    // for modal & ratings
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const reviewHandler = () => {

        const formData = new FormData();

        formData.append('rating', rating === 0 ? (updatingReview.length > 0 && updatingReview[0].rating) : rating)
        formData.append('comment', comment === '' ? (updatingReview.length > 0 && updatingReview[0].comment) : comment)
        formData.append('productId', product)

        dispatch(createReview(formData))

    }

    const submitHandler = () => {
        reviewHandler()
        setIsModalOpen(false)
    }

    useEffect(() => {
        if (error) {
            toast(error, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error',
                onOpen: () => dispatch(clearReviewError())
            })
            return;
        }

        dispatch(getSingleProduct(product))

        dispatch(orderDetailAction(id))

    }, [id, dispatch, error, product])

    return (
        <>
            {loading ? <Loader /> :

                <Fragment >
                    <div className='md:w-[70%] lg:w-[50%] mx-auto mt-12 hidden md:flex items-center gap-x-3 '>
                        <Link to={'/orders'}><BsArrowLeft className="text-2xl " /> </Link>
                        <p className='font-medium'>Orders</p>
                    </div>

                    <div className='md:border-2 md:w-[70%] lg:w-[50%] md:mx-auto md:my-7'>
                        {/* order items */}
                        <div className='mt-5 '>
                            {/* heading */}
                            <div className='ml-5 mb-3'>
                                <p className='font-bold'>Order item</p>
                                <p className='text-gray-400 text-sm'>order ID {orderDetail._id} </p>
                            </div>

                            {/* products */}
                            {getOneOrderItem && getOneOrderItem.map((item, index) => (
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

                            {/* isDelivered */}
                            <div className={`flex items-center justify-start mx-5 px-3 py-4 my-3 gap-x-3 font-bold ${orderStatus === 'Delivered' ? ' bg-[#03a685]' : 'bg-rose-500'} text-white`}>
                                <TbTruckDelivery className="w-6 h-6 white" />
                                {orderStatus}
                            </div>

                            {/* is paid */}
                            <div className={`flex items-center justify-start mx-5 px-3 py-4 my-3 gap-x-3 font-bold ${isPaid ? 'bg-[#03a685] ' : 'bg-rose-500'} text-white`}>
                                {isPaid ? 'paid' : 'Payment is pending'}
                            </div>

                            {/* rate product */}
                            {orderStatus === `Delivered` &&
                                <div className='border-t-8 border-[#f5f5f5] pl-5'>

                                    <button onClick={() => setIsModalOpen(true)} className=" flex items-center gap-x-4 my-4 "  >
                                        <p className="text-sm text-rose-500 font-semibold list-disc">
                                            Rate Product
                                        </p>
                                        <div className="flex items-center gap-x-1 ">
                                            <Rate className="text-rose-500 w-8 h-8 flex text-2xl" disabled={true} value={rating ? rating : updatingReview.length > 0 && updatingReview[0].rating} />
                                        </div>
                                    </button>

                                    <Modal title="Rate Product" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)} >
                                        <Rate className="text-rose-500 w-8 h-8 flex" value={rating ? rating : updatingReview.length > 0 && updatingReview[0].rating}
                                            onChange={(e) => {
                                                e ? setRating(e) : setRating(1)
                                                reviewHandler()
                                            }} />
                                        <textarea onChange={(e) => setComment(e.target.value)} rows={'8'} className="w-full text-black outline-none border rounded-md p-2 " placeholder="Please write product review here" defaultValue={updatingReview.length > 0 ? updatingReview[0].comment : ''}></textarea>
                                        <button disabled={loading} onClick={submitHandler} className='float-right text-white bg-rose-500 rounded-md py-2 px-3 mt-3'>submit</button>
                                    </Modal>
                                </div>}

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

                            {/* other order items */}
                            {getOtherOrderItems.length > 0 && <div className='border-t-8 border-[#f5f5f5] py-3'>
                                <div className='ml-5 mb-3'>
                                    <p className='font-bold'>Other Order Items</p>
                                    <p className='text-gray-400 text-sm'>order ID {orderDetail._id} </p>
                                </div>

                                {getOtherOrderItems.map((item, index) => (
                                    <div key={index} className="flex my-3 ml-5 bg-[#f5f5f5] px-4 pt-4 mr-5 rounded-md border">
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

                            </div>}

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

export default OrderDetail