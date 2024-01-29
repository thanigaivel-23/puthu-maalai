import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    
    initialState:{
        loading : true,
        isAuthenticate : false,
    },
    reducers: {
        loginRequest (state, action){
            return{
                //copying data from previous state
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
        },
        loadUserRequest (state, action){
            return{
                isAuthenticate : false,
                loading: true
            }
        },
        loadUserSuccess(state, action){
            return{
                loading : false,
                isAuthenticate : true,
                user: action.payload.user
            }
        },
        loadUserFail(state,action){
            return{
                loading : false,
                isAuthenticate : false,
                }
        },
        logoutSuccess(state, action){
            return{
                loading : false,
                isAuthenticate : false,
            }
        },
        updateProfileRequest (state, action){
            return{
                isAuthenticate : true,
                loading: true,
                isUpdated: false
            }
        },
        updateProfileSuccess(state, action){
            return{
                loading : false,
                isAuthenticate : true,
                user: action.payload.user,
                isUpdated: true
            }
        },
        updateProfileFail(state,action){
            return{
                loading : false,
                isAuthenticate : true,
                error: action.payload
            }
        },
        changeUpdate(state,action){
            return{
                ...state,
                isUpdated: false,
            }
        },
        forgotPasswordRequest (state, action){
            return{
                ...state,
                loading: true,
                message: null
            }
        },
        forgotPasswordSuccess(state, action){
            return{
                ...state,
                loading: false,
                message: action.payload.message
            }
        },
        forgotPasswordFail(state,action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        resetPasswordRequest (state, action){
            return{
                ...state,
                loading: true,
                isPasswordChanged: false,
                isAuthenticate: false,

            }
        },
        resetPasswordSuccess(state, action){
            return{
                ...state,
                loading: false,
                isPasswordChanged: true,
                user: action.payload
            }
        },
        resetPasswordFail(state,action){
            return{
                ...state,
                loading: false,
                isPasswordChanged: false,
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
    registerSuccess,
    loadUserFail,
    loadUserRequest,
    loadUserSuccess,
    logoutSuccess,
    updateProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    changeUpdate,
    forgotPasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    resetPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess
} = actions

export default reducer;