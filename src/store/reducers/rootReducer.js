import {
  combineReducers
} from 'redux';
import orderReducer from './orderListReducer.js';
import sessionReducer from './sessionReducer.js';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import categoriesReducer from "./categoriesReducer.js";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  session: sessionReducer,
  order: orderReducer,
});

export default rootReducer;