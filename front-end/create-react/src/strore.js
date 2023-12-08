import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import productsReducer from './slices/productsSlice'
import singleProductReducer from './slices/singleProductSlice'


const reducer = combineReducers({
    productsState : productsReducer,
    singleProductState : singleProductReducer
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;