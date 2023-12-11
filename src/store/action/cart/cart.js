export const SET_CART_ERROR = 'SET_CART_ERROR';
export const GET_CART = 'GET_CART';
export const CREATE_CART_ACTION = 'CREATE_CART';
// export const ADD_ONE_PRODUCT_TO_CART = 'ADD_ONE_PRODUCT_TO_CART';
// export const REMOVE_ONE_PRODUCT_TO_CART = 'REMOVE_ONE_PRODUCT_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const createCartAction = createCart => ({
  type: CREATE_CART_ACTION,
  payload: createCart,
});

// export const addCartAction = addCart => ({
//   type: ADD_ONE_PRODUCT_TO_CART,
//   payload: addCart,
// });

export const updateCartAction = updateCart => ({
  type: UPDATE_CART,
  payload: updateCart,
});

export const addToCart = Ob => ({
  type: 'ADD_CART',
  payload: Ob,
});

export const removeCartItem = id => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = id => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = id => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});

// export const addToCart = Ob => ({
//   type: 'ADD_CART',
//   payload: Ob,
// });
export const setCartError = error => ({
  type: SET_CART_ERROR,
  payload: error,
});
// export const removeCartItem = id => ({
//   type: 'REMOVE_CART_ITEM',
//   payload: id,
// });
export const getCartAction = data => ({
  type: GET_CART,
  payload: data,
});

export const addProductToCart = (obj, _id) => async dispatch => {
  console.log(obj, 2);
  const res = await fetch(
    `https://backend-zeta-sandy.vercel.app/api/cart/${_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${sessionStorage.getItem('token')}`,
      },
    },
  );
  const data = await res.json();
  if (!res.ok) {
    dispatch(setCartError(data));
    return;
  }
  console.log(obj, 3);
  dispatch(addToCart(obj));
};

export const removeProductFromCart = (id, _id) => async dispatch => {
  const res = await fetch(
    `https://backend-zeta-sandy.vercel.app/api/cart/${_id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${sessionStorage.getItem('token')}`,
      },
    },
  );
  const data = await res.json();
  if (!res.ok) {
    dispatch(setCartError(data));
    return;
  }
  dispatch(removeCartItem(id));
};

export const removeOneProductFromCart = (id, _id) => async dispatch => {
  console.log(_id, 'removeOneProductFromCart');
  const res = await fetch(
    `https://backend-zeta-sandy.vercel.app/api/cart/product/${_id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${sessionStorage.getItem('token')}`,
      },
    },
  );
  const data = await res.json();
  if (!res.ok) {
    dispatch(setCartError(data));
    return;
  }
  dispatch(minusCartItem(id));
};

export const updateCart = updateCart => async dispatch => {
  const update = updateCart.products.map(product => {
    return {
      product: product.items[0]._id,
      quantity: product.items.length,
    };
  });
  const res = await fetch(`https://backend-zeta-sandy.vercel.app/api/cart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
    body: JSON.stringify(update),
  });
  const data = await res.json();
  if (!res.ok) {
    dispatch(setCartError(data));
  }
};

export const createCart = userCart => async dispatch => {
  const created = userCart.products.map(product => {
    return {
      product: product.items[0]._id,
      quantity: product.items.length,
    };
  });
  console.log(created, 5555);
  const res = await fetch('https://backend-zeta-sandy.vercel.app/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
    body: JSON.stringify({ ...userCart, products: created }),
  });
  const data = await res.json();
  if (!res.ok) {
    dispatch(setCartError(data));
  }
};

export const addOneProductToCart = (id, _id) => async dispatch => {
  const res = await fetch(
    `https://backend-zeta-sandy.vercel.app/api/cart/${_id}`,
    // const res = await fetch(`http://localhost:4000/api/cart/${_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${sessionStorage.getItem('token')}`,
      },
    },
  );
  const data = await res.json();
  if (!res.ok) {
    dispatch(setCartError(data));
    return;
  }
  dispatch(plusCartItem(id));
};

export const getCart = () => async (dispatch, getState) => {
  const res = await fetch('https://backend-zeta-sandy.vercel.app/api/cart', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    await dispatch(setCartError(data));
    return;
  }
  const state = getState();

  if (!data) {
    return data;
  }
  const updateCart = data.products
    .map(item => {
      if (item.product || item.items) {
        return item.product || item.items;
      }
    })
    .flat(1);

  console.log(data);
  const userCart = Object.values(state.cart.items)
    .map(({ items }) => items)
    .flat(1);
  const transformedArray = [...updateCart, ...userCart].reduce((acc, item) => {
    if (item.id in acc) {
      acc[item.id].items.push(item);
      acc[item.id].totalPrice = acc[item.id].totalPrice + item.price;
    }
    if (!(item.id in acc)) {
      acc[item.id] = {
        items: [
          {
            id: parseInt(item.id),
            name: item.name,
            size: item.size,
            imageUrl: item.imageUrl,
            price: item.price,
          },
        ],
        totalPrice: item.price,
      };
    }
    return acc;
  }, {});
  dispatch(getCartAction(transformedArray));
  return data;
};
