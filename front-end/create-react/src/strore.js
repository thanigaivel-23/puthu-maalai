import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import productsReducer from './slices/productsSlice'
import singleProductReducer from './slices/singleProductSlice'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'


const reducer = combineReducers({
    productsState : productsReducer,
    singleProductState : singleProductReducer,
    authState : authReducer,
    cartState : cartReducer
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;