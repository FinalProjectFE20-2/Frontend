import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

const URL = 'https://backend-zeta-sandy.vercel.app/api';

const fetchData = async (url, dispatch, actionType) => {
  try {
    const res = await axios.get(url);
    dispatch({
      type: actionType,
      payload: res.data
    });
  } catch (error) {
    console.error(`Error fetching data for ${actionType}:`, error);
  }
};

export const getFilteredProductsFetch = (perPage, startPage) => async (dispatch) => {
  const url = `${URL}/products?perPage=${perPage}&startPage=${startPage}`;
  await fetchData(url, dispatch, GET_PRODUCTS);
};

export const getAllProductsFetch = () => async (dispatch) => {
  const url = `${URL}/products`;
  await fetchData(url, dispatch, GET_ALL_PRODUCTS);
};