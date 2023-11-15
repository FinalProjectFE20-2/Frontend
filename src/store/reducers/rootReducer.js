import { combineReducers } from 'redux';
import productReducer from './productReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  products: productReducer,
  session: sessionReducer,
});

export default rootReducer;
