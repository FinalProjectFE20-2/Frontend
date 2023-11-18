import {
  combineReducers
} from 'redux';
import sessionReducer from './sessionReducer.js';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  session: sessionReducer,
});

export default rootReducer;