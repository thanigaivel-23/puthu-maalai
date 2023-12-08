import{singleProductFail, singleProductRequest, singleProductSuccess} from '../slices/singleProductSlice'
import axios from 'axios'

export const getSingleProduct = (id)=>{ 

    return async (dispatch)=>{
        try {
            dispatch(singleProductRequest())
            const {data} = await axios.get(`/api/product/${id}`)
            dispatch(singleProductSuccess(data))
        } 
        catch (error) {
            dispatch(singleProductFail(error.response.data.message))
        }
    }
}