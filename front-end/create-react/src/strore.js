import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import productsReducer from './slices/productsSlice'
import singleProductReducer from './slices/singleProductSlice'
import authSlice from './slices/authSlice'


const reducer = combineReducers({
    productsState : productsReducer,
    singleProductState : singleProductReducer,
    authState : authSlice
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;