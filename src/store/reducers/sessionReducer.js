import {
  SET_USER,
  SET_USER_ERROR,
  SET_TOKEN,
} from '../action/session/actionSession';
const initionalState = { user: null, error: null, token: null };
const sessionReducer = (state = initionalState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_ERROR:
      return { ...state, error: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default sessionReducer;
