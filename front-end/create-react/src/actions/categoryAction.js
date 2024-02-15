import { setCategoryCreated } from "../slices/categorySlice";
import axios from 'axios';

const createCategory = (req) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/admin/createCategory', req)
        dispatch(setCategoryCreated(data.message))
    } catch (error) {
        dispatch(setCategoryCreated(error?.response?.data?.message))
    }
}

export { createCategory }

