import { createProductFail, createProductRequest, createProductSuccess, singleProductFail, singleProductRequest, singleProductSuccess } from '../../slices/singleProductSlice'
import axios from 'axios'

export const getSingleProduct = (id) => {

    return async (dispatch) => {
        try {
            dispatch(singleProductRequest())
            const { data } = await axios.get(`/api/product/${id}`)
            dispatch(singleProductSuccess(data))
        }
        catch (error) {
            dispatch(singleProductFail(error.response.data.message))
        }
    }
}

export const createNewProduct = productData => async (dispatch) => {

    try {
        dispatch(createProductRequest())
      

        const { data } = await axios.post('/api/admin/product/new', productData)
        dispatch(createProductSuccess(data))
    }
    catch (error) {
        dispatch(createProductFail(error.response.data.message))
    }
}


