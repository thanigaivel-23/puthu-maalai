import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        allcategories: [],
        iscategorycreated: ""
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
                iscategorycreated: action.payload
            }
        }
    }
})

const { actions, reducer } = categorySlice;

export const { getAllCategoryStore, setCategoryCreated } = actions

export default reducer;