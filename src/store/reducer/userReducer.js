/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
// UPDATE_SUCCESSFUL,
import { SIGN_UP_SUCCESSFUL, ROLE, GET_ME,
  LOGOUT, SHOW_MODAL, HIDDEN_MODAL, UPDATE_SUCCESSFUL,
  GET_COURSES_BY_USER } from '../types/userTypes';
// import { getCurrentLocalStorage } from '../utils/LocalStorageUtils';

const initialState = {
  user: { role: 'student' },
  token: JSON.parse(localStorage.getItem('token')) ?? '',
  show_modal: null,
  courses: [],
};

const userReducer = (state = initialState, action) => {
  console.log('role in reducer', action.payload);
  switch (action.type) {
    case SIGN_UP_SUCCESSFUL:
      return { ...state, token: action.payload };
    case ROLE:
      const role = action.payload;
      return { ...state, user: { ...state.user, role } };
    case GET_ME:
      const nee = { ...state, user: action.payload };
      return nee;
    case LOGOUT:
      return {};
    case SHOW_MODAL:
    case HIDDEN_MODAL:
      return { ...state, show_modal: action.payload };
    case UPDATE_SUCCESSFUL:
      return { ...state, user: action.payload };
    case GET_COURSES_BY_USER:
      return { ...state, courses: action.payload };
    default:
      return state;
  }
};

export default userReducer;
