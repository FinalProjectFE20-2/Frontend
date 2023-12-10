import {
    SET_CATEGORIES_BY_ID,
    SET_DATA,
    SET_IS_OPEN, SET_LOADING, SET_PRODUCTS
} from "../action/categories/actionCategories.js";

const initialState = { isLoading:false,
    categories: [],
    isOpen: false,
    filterProductsByCategory: [],
    categoryById: {},
};
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case SET_DATA:
            return {
                ...state,
                categories: action.payload
            }
        case SET_CATEGORIES_BY_ID:
            return {
                ...state,
                categoryById: action.payload
            }

        case SET_PRODUCTS:
            return {
                ...state,
                filterProductsByCategory: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload}
        default:
            return state;
    }
}
export default categoriesReducer;