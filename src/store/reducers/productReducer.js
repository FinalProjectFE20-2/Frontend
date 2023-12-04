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
      // console.log(action.payload);
      // const products = action.payload.reduce((acc, product) => {
      //   console.log(product.itemNo);
      //   acc[product.itemNo] = product;
      //   return acc;
      // });
      // console.log(products);
      return {
        ...state, products: action.payload
      };
    case GET_ALL_PRODUCTS:
      // console.log(action.payload);
      return {
        ...state, allProducts: action.payload
      };
    default:
      return state;
  }
};
export default productReducer;