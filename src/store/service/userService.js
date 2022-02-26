/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';
const token = JSON.parse(localStorage.getItem('token'));

export const postSignUp = async (user) => {
  try {
    const res = await axios.post(`${URL_BASE}/api/user`, user);
    return res;
  } catch (error) {
    return error;
  }
};

export const getMe = async () => {
  const responseData = await axios.get(`${URL_BASE}/api/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return responseData;
};

export const postUpdate = async (id, user) => {
  try {
    const res = await axios.patch(`${URL_BASE}/api/user/${id}`, user);
    return res;
  } catch (error) {
    return error;
  }
};

export const getCoursesByUser = async () => {
  const responseData = await axios.get(`${URL_BASE}/api/course/coursesByUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return responseData;
};
