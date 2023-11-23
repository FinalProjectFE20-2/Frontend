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
const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});
export const login = user => async dispatch => {
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
  const token = await data.token.split(' ')[1];
  sessionStorage.setItem('token', token);
  dispatch(setToken(token));
  return true;
};
export const singUp = user => async dispatch => {
  const res = await fetch(
    'https://backend-zeta-sandy.vercel.app/api/customers/',
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
    return;
  }

  await dispatch(setUser(data));
};
export const getUser = () => async dispatch => {
  const res = await fetch(
    'https://backend-zeta-sandy.vercel.app/api/customers/customer',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    },
  );
  console.log(res);
  const data = await res.json();
  if (!res.ok) {
    await dispatch(setUserError(data));
    return;
  }
  localStorage.setItem('user', JSON.stringify(data));
  dispatch(setUser(data));
};
