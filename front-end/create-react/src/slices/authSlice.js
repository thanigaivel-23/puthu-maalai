import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    
    initialState:{
        loading : false,
        isAuthenticate : false
    },
    reducers: {
        loginRequest (state, action){
            return{
                //copying data from initial state
                ...state,
                loading: true
            }
        },
        loginSuccess(state, action){
            return{
                loading : false,
                isAuthenticate : true,
                user: action.payload.user
            }
        },
        loginFail(state,action){
            return{
                loading : false,
                isAuthenticate : false,
                error: action.payload
            }
        },
        clearError (state, action){
            return{
                ...state,
                error: null

            }
        },
        registerRequest (state, action){
            return{
                isAuthenticate : false,
                loading: true
            }
        },
        registerSuccess(state, action){
            return{
                loading : false,
                isAuthenticate : true,
                user: action.payload.user
            }
        },
        registerFail(state,action){
            return{
                loading : false,
                isAuthenticate : false,
                error: action.payload
            }
        }
    }
})

const {actions, reducer} = authSlice;

export const {
    loginRequest, 
    loginSuccess, 
    loginFail, 
    clearError,
    registerFail,
    registerRequest,
    registerSuccess
} = actions

export default reducer;