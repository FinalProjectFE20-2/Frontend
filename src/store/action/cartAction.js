export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCartAC = (id) => ({type: ADD_TO_CART, payload: id});
export const deleteFromCartAC = (id) => ({type: DELETE_FROM_CART, payload: id});
export const clearCartAC = () => ({type: CLEAR_CART});