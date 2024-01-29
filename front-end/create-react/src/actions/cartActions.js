import axios from "axios"
import { addCartItemRequest, addCartItemSuccess } from "../slices/cartSlice"
import { API_URL } from "../env"

export const addCartItem = (id, quantity) => async (dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const { data } = await axios.get(`${API_URL}/api/product/${id}`)

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