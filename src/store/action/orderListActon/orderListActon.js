export const SET_ORDER_LIST = 'SET_ORDER_LIST';
export const SET_ORDER_ERROR = 'SET_ORDER_ERROR';
const setOrderError = data => ({
  type: SET_ORDER_ERROR,
  payload: data,
});

const setOrderList = data => ({
  type: SET_ORDER_LIST,
  payload: data,
});
export const getOrderList = () => async dispatch => {
  const res = await fetch('https://backend-zeta-sandy.vercel.app/api/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    dispatch(setOrderError(data));
    return;
  }
  dispatch(setOrderList(data));
};
