import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
    name: 'single Product',
    initialState: {
        loading: false,
        singleProduct: {}
    },
    reducers:{
        singleProductRequest(state, action){
                return {
                    loading: true
                }
        },
        singleProductSuccess(state, action){
            return{
                loading: false,
                singleProduct : action.payload.product
            }
        },
        singleProductFail(state,action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})

const {actions,reducer} = singleProductSlice

export const {singleProductFail, singleProductRequest, singleProductSuccess} = actions
export default reducer;