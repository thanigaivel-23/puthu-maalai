import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import productsReducer from './slices/productsSlice'
import singleProductReducer from './slices/singleProductSlice'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'
import orderRedcer from './slices/orderSlice'


const reducer = combineReducers({
    productsState: productsReducer,
    singleProductState: singleProductReducer,
    authState: authReducer,
    cartState: cartReducer,
    orderState: orderRedcer,
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;