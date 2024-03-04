import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        items: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        wishlistItems: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [],
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},

    },
    reducers: {
        addCartItemRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        addCartItemSuccess(state, action) {
            const item = action.payload
            const isItemExist = state.items.find(i => i.product === item.product)

            if (isItemExist) {
                state = {
                    ...state,
                    loading: false,
                }
            }
            else {
                state = {
                    items: [...state.items, item],
                    loading: false
                }
                localStorage.setItem('cartItems', JSON.stringify(state.items))
            }
            return state

        },
        increaseCartItemQty(state, action) {
            state.items = state.items.map((item) => {
                if (item.product === action.payload) {
                    item.quantity = item.quantity + 1
                }
                return item
            })
            localStorage.setItem('cartItems', JSON.stringify(state.items))

        },
        decreaseCartItemQty(state, action) {
            state.items = state.items.map((item) => {
                if (item.product === action.payload) {
                    item.quantity = item.quantity - 1
                }
                return item
            })
            localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        removeItemFromCart(state, action) {
            const filterItems = state.items.filter(item => {
                return item.product !== action.payload
            })
            localStorage.setItem('cartItems', JSON.stringify(filterItems))
            return {
                ...state,
                items: filterItems
            }
        },
        saveShippingInfo(state, action) {
            localStorage.setItem('shippingInfo', JSON.stringify(action.payload))
            return {
                ...state,
                shippingInfo: action.payload
            }
        },
        orderCompleted(state, action) {
            localStorage.removeItem('shippingInfo')
            localStorage.removeItem('cartItems')
            sessionStorage.removeItem('orderInfo')
            return {
                items: [],
                loading: false,
                shippingInfo: {}
            }
        },

        //wishlist
        addWistlistItemRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        addWistlistItemSuccess(state, action) {

            const item = action.payload
            const isItemExist = state.wishlistItems.find(i => i.product === item.product)

            if (isItemExist) {
                return {
                    ...state,
                    loading: false,

                }
            }
            else {
                let getWishlistItems = localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : []

                localStorage.setItem('wishlistItems', JSON.stringify([...getWishlistItems, item]))
                return {
                    ...state,
                    loading: false,
                    wishlistItems: [...state.wishlistItems, item]
                }

            }
        },

        removeItemFromWishlist(state, action) {
            const filterItems = state.wishlistItems.filter(item => {
                return item.product !== action.payload
            })
            localStorage.setItem('wishlistItems', JSON.stringify(filterItems))
            return {
                ...state,
                wishlistItems: filterItems
            }
        },

        moveToCartRequest(state, action) {

            return {
                ...state,
                loading: true,
            }
        },
        moveToCartSuccess(state, action) {

            const item = action.payload
            const isItemExist = state.items.find(i => i.product === item.product)

            const filterItems = state.wishlistItems.filter(i => {
                return i.product !== item.product
            })
            localStorage.setItem('wishlistItems', JSON.stringify(filterItems))

            if (isItemExist) {
                state = {
                    ...state,
                    loading: false,
                    wishlistItems: filterItems
                }
            }
            else {
                state = {
                    items: [...state.items, item],
                    loading: false,
                    wishlistItems: filterItems
                }
                localStorage.setItem('cartItems', JSON.stringify(state.items))
            }
            return state

        },

    }
})

const { actions, reducer } = cartSlice;

export const {
    addCartItemRequest,
    addCartItemSuccess,
    increaseCartItemQty,
    decreaseCartItemQty,
    removeItemFromCart,
    saveShippingInfo,
    orderCompleted,
    addWistlistItemRequest,
    addWistlistItemSuccess,
    removeItemFromWishlist,
    moveToCartRequest,
    moveToCartSuccess,
} = actions

export default reducer;