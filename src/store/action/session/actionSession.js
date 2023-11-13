export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user,
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
  console.log(res);
};
export const singUp = user => async dispatch => {
  const res = await fetch(
    'https://backend-zeta-sandy.vercel.app/api/customers/',
    // 'https://localhost:4000/api/customers',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  console.log(res);
};
