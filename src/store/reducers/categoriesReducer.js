import {SET_DATA, SET_IS_OPEN} from "../action/categories/actionCategories.js";

const initialState = {
    categories: [],
    isOpen: false
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
        default:
            return state;
    }
}
export default categoriesReducer;