import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderDetail: {},
    userOrdersList: [],
    loading: false,
    isReviewSubmitted: false
  },
  reducers: {
    createOrderRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    createOrderSuccess(state, action) {
      return {
        ...state,
        loading: false,
        orderDetail: action.payload.order
      }
    },
    createOrderFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },
    clearOrderError(state, action) {
      return {
        ...state,
        error: null
      }
    },
    userOrdersRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    userOrdersSuccess(state, action) {
      return {
        ...state,
        loading: false,
        userOrdersList: action.payload.orders
      }
    },
    userOrdersFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },
    orderDetailRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    orderDetailSuccess(state, action) {
      return {
        ...state,
        loading: false,
        orderDetail: action.payload.order
      }
    },
    orderDetailFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },

    // reviews
    createReviewRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    createReviewSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isReviewSubmitted: true
      }
    },
    createReviewFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },
    clearReviewError(state, action) {
      return {
        ...state,
        error: null
      }
    }


  }
})

const { actions, reducer } = orderSlice;

export const {
  createOrderFail,
  createOrderRequest,
  createOrderSuccess,
  clearOrderError,
  userOrdersFail,
  userOrdersRequest,
  userOrdersSuccess,
  orderDetailFail,
  orderDetailRequest,
  orderDetailSuccess,
  createReviewFail,
  createReviewRequest,
  createReviewSuccess,
  clearReviewError
} = actions

export default reducer;