import { setCategoryCreated } from "../slices/categorySlice";
import axios from 'axios';

const createCategory = (req) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/admin/createCategory', req)
        dispatch(setCategoryCreated(true))
    } catch (error) {
        dispatch(setCategoryCreated(false))
    }
}

