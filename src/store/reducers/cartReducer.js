import { array } from 'prop-types';
import { GET_CART, SET_CART_ERROR } from '../action/cart/cart';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  error: null,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const getPrice = arr =>
  arr.reduce(
    (acc, obj) => {
      acc.totalPrice += obj.totalPrice;
      acc.count += obj.items.length;
      return acc;
    },
    { totalPrice: 0, count: 0 },
  );
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      const userCart = Object.values(action.payload);
      const total = getPrice(userCart);
      return {
        ...state,
        items: action.payload,
        totalPrice: total.totalPrice,
        totalCount: total.count,
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

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
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

    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
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

export default cartReducer;
