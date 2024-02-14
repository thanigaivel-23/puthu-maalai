import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderDetail: {},
    userOrdersList: [],
    adminOrdersList: [],
    loading: false,
    isReviewSubmitted: false,
    isOrderDeleted: false,
    isOrderUpdated: false,

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
    },

    //admin
    adminOrdersRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    adminOrdersSuccess(state, action) {
      return {
        ...state,
        loading: false,
        adminOrdersList: action.payload.orders
      }
    },
    adminOrdersFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },

    deleteOrdersRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    deleteOrdersSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isOrderDeleted: true
      }
    },
    deleteOrdersFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },
    clearOrderDeleted(state, action) {
      return {
        ...state,
        isOrderDeleted: false
      }
    },

    updateOrdersRequest(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    updateOrdersSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isOrderUpdated: true
      }
    },
    updateOrdersFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    },
    clearOrderUpdated(state, action) {
      return {
        ...state,
        isOrderUpdated: false
      }
    },


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
  clearReviewError,
  deleteOrdersFail,
  deleteOrdersRequest,
  deleteOrdersSuccess,
  updateOrdersFail,
  updateOrdersRequest,
  updateOrdersSuccess,
  clearOrderDeleted,
  clearOrderUpdated,
  adminOrdersFail,
  adminOrdersRequest,
  adminOrdersSuccess
} = actions

export default reducer;