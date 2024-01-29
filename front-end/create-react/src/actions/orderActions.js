import { createOrderFail, createOrderRequest, createOrderSuccess, createReviewFail,  createReviewSuccess, orderDetailFail, orderDetailRequest, orderDetailSuccess, userOrdersFail, userOrdersRequest, userOrdersSuccess } from "../slices/orderSlice"
import axios from 'axios'

export const createOrder = order => async (dispatch) => {
    try {
        dispatch(createOrderRequest())
        const { data } = await axios.post('/api/order/new', order)
        dispatch(createOrderSuccess(data))

    } catch (error) {
        dispatch(createOrderFail(error.response.data.message))
    }
}

export const userOrders = async (dispatch) => {
    try {
        dispatch(userOrdersRequest())

        const { data } = await axios.get('/api/myorders')
        dispatch(userOrdersSuccess(data))

    } catch (error) {
        dispatch(userOrdersFail(error.response.data.message))
    }
}

export const orderDetail = id => async (dispatch) => {
    try {
        dispatch(orderDetailRequest())

        const { data } = await axios.get(`/api/order/${id}`)
        dispatch(orderDetailSuccess(data))

    } catch (error) {
        dispatch(orderDetailFail(error.response.data.message))
    }
}

//review

export const createReview = reviewData => async (dispatch) => {
    try {
        // dispatch(createReviewRequest())
        const config = {
            headers: {
                'Content-type' : 'application/json'
            }
        }
        const { data } = await axios.put(`/api/review`, reviewData, config)
        dispatch(createReviewSuccess(data))
    }
    catch (error) {
        dispatch(createReviewFail(error.response.data.message))

    }
}