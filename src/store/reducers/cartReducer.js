import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "../action/cartAction";

const initialState = {
    id: 0,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log("add to cart");
            return {
                ...state,
                cart: [...new Set([...state.cart, action.payload])],
            };

        case DELETE_FROM_CART:
            console.log("delete from cart");
            return {
                ...state,
                cart: state.cart.filter((item) => item !== action.payload),
            };

        case CLEAR_CART:
            console.log("clear cart");
            return {
                ...state,
                cart: []
            };

        default:
            return state;
    }
};

export default dataReducer;