import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState : {
        loading : false,
        success : false
    },
    reducers:{
        productsRequest(state, action){
            return {
                loading: true,
                success : false
            }
        },
        productsSuccess(state,action){
            return{
                loading: false,
                success : true,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                productPerPage : action.payload.resPerPage,
                totalSearchProducts: action.payload.totalSearchProducts
            }
        },
        productsFail(state, action){
            return{
                loading: false,
                error: action.payload
            }
        }
    }
})

const {actions, reducer } = productSlice;

export const {productsFail,productsRequest,productsSuccess} = actions

export default reducer;