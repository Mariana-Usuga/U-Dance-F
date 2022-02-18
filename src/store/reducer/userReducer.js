/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import { SIGN_UP_SUCCESSFUL, ROLE } from '../types/userTypes';
// import { getCurrentLocalStorage } from '../utils/LocalStorageUtils';

const initialState = {
  user: {},
  // role: '',
  // toke: '',
};

const userReducer = (state = initialState, action) => {
  console.log('action', action.payload);
  switch (action.type) {
    case SIGN_UP_SUCCESSFUL:
      const { name, email } = action.payload;
      return { ...state, user: { ...state.user, name, email } };
    case ROLE:
      const role = action.payload;
      return { ...state, user: { ...state.user, role } };
    // case LOGOUT:
    //   return {};
    default:
      return state;
  }
};

export default userReducer;
