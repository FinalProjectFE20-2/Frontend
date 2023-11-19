export const addToCart = (Ob) => ({
    type: 'ADD_CART',
    payload: Ob,
  });

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
  });  