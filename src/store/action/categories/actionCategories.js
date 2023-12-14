const CATALOG_URL = 'https://backend-zeta-sandy.vercel.app/api/catalog/'
const PRODUCTS_URL = 'https://backend-zeta-sandy.vercel.app/api/products/'
//constants
export const SET_IS_OPEN = 'SET_IS_OPEN';
export const SET_DATA = 'SET_DATA';
export const SET_CATEGORIES_BY_ID = 'SET_CATEGORIES_BY_ID';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LOADING = 'SET_LOADING';
// actions creators
export const setIsOpen = () => ({
    type: SET_IS_OPEN
});

export const setData = (data) => ({
    type: SET_DATA, payload: data
});
export const setById = (data) => ({
    type: SET_CATEGORIES_BY_ID, payload: data
});
export const setProducts = (data) => ({
    type: SET_PRODUCTS, payload: data
});
export const setLoading = (loading) => ({type: SET_LOADING, payload: loading})
// then func
const checkData = data => {

    if (data.ok) {
        return data.json()
    } else {
        throw new Error('Проблема з сервером. Спробуйте пізніше!')
    }
}
const getErrorMessage = err => {
    console.error(err.message, err)
}
//async func
export const fetchCategories = () => (dispatch) => {

    fetch(CATALOG_URL)
        .then(checkData)
        .then(category => {
            dispatch(setData(category))
        })
        .catch(getErrorMessage);
}
export const fetchProductsByCategory = (filterParam) => (dispatch) => {
    dispatch(setLoading(true))
    fetch(
        `${PRODUCTS_URL}filter?${filterParam}`,
    )
        .then(checkData)
        .then(data => {

            dispatch(setProducts(data));
        })

        .catch(getErrorMessage).finally(() => {
        dispatch(setLoading(false)) ;
    })
}

export const fetchCategotiesById = (categoriesId) => (dispatch) => {
    fetch(`${CATALOG_URL}${categoriesId}`)
        .then(checkData)
        .then(category => {
            dispatch(setById(category))
        })
        .catch(getErrorMessage);
}