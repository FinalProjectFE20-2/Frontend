import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const storedState = localStorage.getItem('cartState');
const initialState = storedState ? JSON.parse(storedState) : {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('cartState', JSON.stringify(store.getState()));
  });
  

export default store;
