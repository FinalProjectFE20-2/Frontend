export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_VALUE = 'SET_VALUE';

export const incrementAC = () => ({type: INCREMENT});
export const decrementAC = () => ({type: DECREMENT});
export const setValueAC = (value) => ({type: SET_VALUE, payload: value});
