const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': 

    {
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
      const totalPrice =  getTotalPrice(allCount);

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