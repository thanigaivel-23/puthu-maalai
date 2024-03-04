import axios from "axios"
import { addCartItemRequest, addCartItemSuccess, addWistlistItemRequest, addWistlistItemSuccess, moveToCartRequest, moveToCartSuccess } from "../slices/cartSlice"

export const addCartItem = (id, quantity) => async (dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const { data } = await axios.get(`/api/product/${id}`)

        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            description: data.product.description,
            discount: data.product.discount,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))

    }
    catch (error) {

    }
}

export const addWistlistItem = (id) => async (dispatch) => {
    try {

        dispatch(addWistlistItemRequest())
        
        const { data } = await axios.get(`/api/product/${id}`)

        dispatch(addWistlistItemSuccess({
            product: data.product._id,
            name: data.product.name,
            description: data.product.description,
            discount: data.product.discount,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock
        }))

    }
    catch (error) {
    }
}

export const moveToCart = (id, quantity) => async (dispatch) => {
    try {
        dispatch(moveToCartRequest())
        const { data } = await axios.get(`/api/product/${id}`)

        dispatch(moveToCartSuccess({
            product: data.product._id,
            name: data.product.name,
            description: data.product.description,
            discount: data.product.discount,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))

    }
    catch (error) {

    }
}