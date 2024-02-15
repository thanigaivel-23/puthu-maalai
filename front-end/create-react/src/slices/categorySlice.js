import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        allcategories: [],
        iscategorycreated: false
    },
    reducers: {
        getAllCategoryStore(state, action) {
            return {
                ...state,
                allcategories: action.payload
            }
        },
        setCategoryCreated(state, action) {
            return {
                ...state,
                allcategories: action.payload
            }
        }
    }
})

const { actions, reducer } = orderSlice;

export const { getAllCategoryStore, setCategoryCreated } = actions

export default reducer;