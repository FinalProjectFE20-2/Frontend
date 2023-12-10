export const SET_IS_OPEN = 'SET_IS_OPEN';
export const SET_DATA = 'SET_DATA'
export const setIsOpen = () => ({
    type: SET_IS_OPEN
});

export const setData = (data) => ({
    type: SET_DATA, payload: data
});
export const fetchCategories = ()=>(dispatch)=>{
    fetch(`https://backend-zeta-sandy.vercel.app/api/catalog/`)
        .then(data => data.json())
        .then(category => {
            dispatch(setData(category))
        })
        .catch(err => {
        });
}
