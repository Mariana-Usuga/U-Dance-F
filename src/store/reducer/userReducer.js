/* eslint-disable default-param-last */
import { SIGN_UP_SUCCESSFUL } from '../types/userTypes';
// import { getCurrentLocalStorage } from '../utils/LocalStorageUtils';

const initialState = {
  user: {},
  // toke: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESSFUL:
      return { ...state, user: action.payload };
    // case LOGIN_FAILURE:
    //   return {
    //     token: null,
    //   };
    // case LOGOUT:
    //   return {};
    default:
      return state;
  }
};

export default userReducer;
