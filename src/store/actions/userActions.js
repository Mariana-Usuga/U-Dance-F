/* eslint-disable import/prefer-default-export */
import { LOGIN_SUCCESSFUL, ROLE,
  UPDATE_SUCCESSFUL, GET_ME,
  LOGOUT, SHOW_MODAL, HIDDEN_MODAL, GET_COURSES_BY_USER } from '../types/userTypes';
import { postSignUp, postUpdate, getMe, getCoursesByUser } from '../service/userService';

export const fetchSignUp = (user) => async (dispatch) => {
  const res = await postSignUp(user);
  const { JWT: token } = res.data;
  localStorage.setItem('token', JSON.stringify(token));
  dispatch({
    type: LOGIN_SUCCESSFUL,
    payload: token,
  });
};

export const fetchRole = (role) => async (dispatch) => {
  dispatch({
    type: ROLE,
    payload: role,
  });
};

export const fetchGetUser = (token) => async (dispatch) => {
  const user = await getMe(token);
  dispatch({
    type: GET_ME,
    payload: user.data,
  });
};

export const fecthUpdateUser = (id, user) => async (dispatch) => {
  const userRes = await postUpdate(id, user);
  dispatch({
    type: UPDATE_SUCCESSFUL,
    payload: userRes.data,
  });
};

export const fetchLogoutUser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const hiddenModal = () => async (dispatch) => {
  dispatch({
    type: HIDDEN_MODAL,
    payload: false,
  });
};

export const showModal = () => async (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: true,
  });
};

export const fecthCoursesByUser = () => async (dispatch) => {
  const courses = await getCoursesByUser();
  dispatch({
    type: GET_COURSES_BY_USER,
    payload: courses.data,
  });
};
