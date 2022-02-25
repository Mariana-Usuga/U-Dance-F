/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';
const URL_BASE = 'http://localhost:8080';

export const postSignUp = async (user) => {
  try {
    const res = await axios.post(`${URL_BASE}/api/user`, user);
    return res;
  } catch (error) {
    return error;
  }
};

export const getMe = async (token) => {
  const responseData = await axios.get(`${URL_BASE}/api/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  // console.log('res in serv', responseData);
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
  // const token = JSON.parse(localStorage.getItem('token'));
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhbmF1c3VnYW1vbnRveWExMjM0NEBnbWFpbC5jb20iLCJfaWQiOiI2MjE2YjZhZmRjNDcyYzJjYmMyMWJmNGQiLCJuYW1lIjoibWFyaWFuYSIsImlhdCI6MTY0NTY1NTcyNywiZXhwIjoxNjQ2MjYwNTI3fQ.4A8Jc9QqMcKPlJRVPpEUASXxpn-JFeFO9eYXqS18Q4U';
  const responseData = await axios.get(`${URL_BASE}/api/course/coursesByUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return responseData;
};
