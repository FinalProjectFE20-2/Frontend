export const SET_CART_ERROR = 'SET_CART_ERROR'
export const GET_CART = 'GET_CART'
export const addToCart = (Ob) => ({
    type: 'ADD_CART',
    payload: Ob,
  });
export const setCartError = (error) => ({
  type: SET_CART_ERROR,
  payload: error,
})
export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
  });
export const getCartAction = (data) => ({
  type : GET_CART,
  payload : data,
})
export const getCart = () => async (dispatch, getState) => {
  const res = await fetch ('https://backend-zeta-sandy.vercel.app/api/cart',{
    headers:{
      'Content-Type': 'application/json',
      Authorization : `Bearer ${sessionStorage.getItem('token')}`,
    }
  })
  const data = await res.json();
  if (!res.ok) {
    await dispatch(setCartError(data));
    return
  }
  const userCart = data.reduce((acc, cur)=>{
    acc[cur.itemNo] = cur;
    return acc;
  },{})
 const state = getState();
  dispatch(getCartAction({
  ...state.cart.items,
    ...userCart,
  }));
}
