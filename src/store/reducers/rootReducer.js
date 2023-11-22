import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer.js';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import orderReducer from '@/store/reducers/orderListReducer.js';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  session: sessionReducer,
  order: orderReducer,
});

export default rootReducer;
