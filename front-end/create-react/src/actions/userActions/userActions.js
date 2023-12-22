import axios from "axios"
import { clearError, loginFail, loginRequest, loginSuccess, 
    registerFail, registerRequest, registerSuccess,
    loadUserFail, loadUserRequest, loadUserSuccess,
    logoutSuccess,
    updateProfileFail, updateProfileRequest, updateProfileSuccess, changeUpdate, forgotPasswordRequest, forgotPasswordSuccess, forgotPasswordFail, resetPasswordRequest, resetPasswordSuccess, resetPasswordFail,
 } from "../../slices/authSlice"

//login
export const login = (email, password) => async (dispatch) =>{

    try{
        dispatch(loginRequest())
        const {data} = await axios.post('/api/login',{password,email})
        dispatch(loginSuccess(data))
    }
    catch (error){
        dispatch(loginFail(error.response.data.message))
    }
}

//clearError
export const clearAuthError = (dispatch) =>{
        dispatch(clearError())
}

//register
export const register = (userData) => async (dispatch) =>{

    try{
        dispatch(registerRequest())
        const config = {
            headers : {
                'Content-type' : 'multipart/form-data'
            }
        }

        const {data} = await axios.post('/api/register', userData, config)
        dispatch(registerSuccess(data))
    }
    catch (error){
        dispatch(registerFail(error.response.data.message))
    }
}

//loadUser
export const loadUser = async (dispatch) =>{

    try{
        dispatch(loadUserRequest())
        const {data} = await axios.get('/api/myprofile')
        dispatch(loadUserSuccess(data))
    }
    catch (error){
        dispatch(loadUserFail(error.response.data.message))
    }
}

//logout
export const logout = async (dispatch) =>{

        await axios.get('/api/logout')
        dispatch(logoutSuccess())
}

//updateProfile
export const updateProfile = (userData) => async (dispatch) =>{

    try{
        dispatch(updateProfileRequest())
        const config = {
            headers : {
                'Content-type' : 'multipart/form-data'
            }
        }

        const {data} = await axios.put('/api/update', userData, config)
        dispatch(updateProfileSuccess(data))
    }
    catch (error){
        dispatch(updateProfileFail(error.response.data.message))
    }
}

//changeUpdate
export const changeUpdateStatus = (dispatch) =>{
    dispatch(changeUpdate())
}

//forgotPassword
export const forgotPassword = (email) => async (dispatch) =>{

    try{
        dispatch(forgotPasswordRequest())
        const {data} = await axios.post('/api/password/forgot', {email})
        dispatch(forgotPasswordSuccess(data))
    }
    catch (error){
        dispatch(forgotPasswordFail(error.response.data.message))
    }
}

//resetPassword
export const resetPassword = (password, confirmPassword, token) => async (dispatch) =>{

    try{
        dispatch(resetPasswordRequest())
       
        const {data} = await axios.post(`/api/password/reset/${token}`, {password, confirmPassword})
        dispatch(resetPasswordSuccess(data))
    }
    catch (error){
        dispatch(resetPasswordFail(error.response.data.message))
    }
}

