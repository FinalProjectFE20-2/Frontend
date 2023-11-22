import { GET_CART, SET_CART_ERROR } from '@/store/action/cart/cart.js';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  error: null,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      const userCart = Object.values(action.payload);
      const total = getTotalPrice(userCart);
      return {
        ...state,
        items: action.payload,
        totalPrice: total,
        totalCount: userCart.length,
      };
    case SET_CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case 'ADD_CART': {
      const currentItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems),
        },
      };

      const items = Object.values(newItems).map(obj => obj.items);
      const allCount = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allCount);

      return {
        ...state,
        items: newItems,
        totalCount: allCount.length,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    default:
      return state;
  }
};

export default cart;
