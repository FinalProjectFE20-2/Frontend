import {
  GET_PRODUCTS,
  GET_ALL_PRODUCTS
} from '../action/product/actionProduct';
const initialState = {
  products: [],
  allProducts: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state, products: action.payload
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state, allProducts: action.payload
      };
    default:
      return state;
  }
};
export default productReducer;