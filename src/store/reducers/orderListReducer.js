import {
  SET_ORDER_LIST,
  SET_ORDER_ERROR,
} from '@/store/action/orderListActon/orderListActon.js';

const initionalState = {
  orderList: [],
  error: null,
};
const orderReducer = (state = initionalState, action) => {
  switch (action.type) {
    case SET_ORDER_LIST:
      return {
        ...state,
        orderList: action.payload,
      };
    case SET_ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default orderReducer;
