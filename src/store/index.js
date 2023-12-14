import rootReducer from './reducers/rootReducer';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storedState = localStorage.getItem('cartState');
const initialState = storedState ? JSON.parse(storedState) : {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem('cartState', JSON.stringify(store.getState()));
});

export default store;