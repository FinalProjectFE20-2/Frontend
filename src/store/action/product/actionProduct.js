export const GET_PRODUCTS = 'GET_PRODUCTS';
const getProducts = data => ({
  type: GET_PRODUCTS,
  payload: data,
});

export const getAllProducts = (perPage, startPage) => async dispatch => {
  // const res = await fetch(
  //   `https://backend-zeta-sandy.vercel.app/api/products?perPage=${perPage}&startPage=${startPage}`,
  // );
  const res = await fetch('http://localhost:4000/api/products');
  const products = await res.json();
  console.log(products, 333);
  dispatch(getProducts(products));
};
