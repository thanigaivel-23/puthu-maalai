import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
    name: 'single Product',
    initialState: {
        loading: false,
        singleProduct: {},

    },
    reducers: {
        singleProductRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        singleProductSuccess(state, action) {
            return {
                ...state,
                loading: false,
                singleProduct: action.payload.product
            }
        },
        singleProductFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = singleProductSlice

export const {
    singleProductFail,
    singleProductRequest,
    singleProductSuccess
    
} = actions
export default reducer;