import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  counter: counterReducer,
});

export default rootReducer;
