/* eslint-disable import/prefer-default-export */
import { LOGIN_SUCCESSFUL } from '../types/userTypes';
import { postSignUp } from '../service/userService';

export const fetchSignUp = (user) => async (dispatch) => {
  const userRes = await postSignUp(user);
  dispatch({
    type: LOGIN_SUCCESSFUL,
    payload: userRes.data,
  });
};

// export const fetchLogin = (email, password) => async (dispatch) => {
//   const res = await postLogin(email, password);
//   if (res.statusText === 'OK') {
//     const { JWT: token } = res.data;
//     localStorage.setItem('token', JSON.stringify(token));
//     dispatch(loginUserSucess(token));
//     return token;
//   }
//   dispatch(loginUserFailure());
//   return null;
// };
