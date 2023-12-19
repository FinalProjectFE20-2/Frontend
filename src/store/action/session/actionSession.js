import { getCart, createCart, updateCart } from '../cart/cart';

export const SET_USER = 'SET_USER';
export const SET_USER_ERROR = 'SET_USER_ERROR';
export const SET_TOKEN = 'SET_TOKEN';
export const setUser = user => ({
  type: SET_USER,
  payload: user,
});
const setUserError = error => ({
  type: SET_USER_ERROR,
  payload: error,
});
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});
export const login = user => async (dispatch, getState) => {
  const res = await fetch(
    'https://backend-zeta-sandy.vercel.app/api/customers/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  const data = await res.json();
  if (!res.ok) {
    dispatch(setUserError(data));
    return;
  }
  dispatch(setUserError(null));
  await sessionStorage.setItem('token', data.token);
  await dispatch(setToken(data.token));
  await dispatch(getUser());
  const userCart = await dispatch(getCart());
  const state = await getState();
  const cart = Object.values(state.cart.items);
  if (!userCart) {
    if (cart.length > 0) {
      dispatch(
        createCart({ customerId: state.session.user._id, products: cart }),
      );
    }
    if (!cart.length) {
      dispatch(
        createCart({ customerId: state.session.user._id, products: [] }),
      );
    }
  }
  if (userCart) {
    dispatch(
      updateCart({ customerId: state.session.user._id, products: cart }),
    );
  }
  return true;
};
export const singUp = user => async dispatch => {
  const res = await fetch(
    'https://backend-zeta-sandy.vercel.app/api/customers',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  const data = await res.json();
  if (!res.ok) {
    await dispatch(setUserError(data));
  }
  await dispatch(setUser(data));
};

export const getUser = () => async dispatch => {
  const res = await fetch(
    'https://backend-zeta-sandy.vercel.app/api/customers/customer',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${sessionStorage.getItem('token')}`,
      },
    },
  );
  const data = await res.json();
  if (!res.ok) {
    await dispatch(setUserError(data));
  }
  await dispatch(setUser(data));
};
