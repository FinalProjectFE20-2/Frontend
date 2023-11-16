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
  sessionStorage.setItem('token', data.token);
  dispatch(setToken(data.token));
  return true;
};
export const singUp = user => async dispatch => {
  const res = await fetch(
    'https://backend-zeta-sandy.vercel.app/api/customers/',
    // 'http://localhost:4000/api/customers',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    await dispatch(setUserError(data));
  }
  await dispatch(setUser(data));
};
