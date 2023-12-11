import {SET_IS_OPEN} from "../action/categories/actionCategories.js";

const initialState = {
    isOpen:false
};
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_OPEN:return {
            ...state,
            isOpen:!state.isOpen
        }
        default:
            return state;
    }
}
export default categoriesReducer;