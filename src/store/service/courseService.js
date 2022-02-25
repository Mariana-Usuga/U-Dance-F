/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE;
const URL_BASE = 'http://localhost:8080';

// const token = JSON.parse(localStorage.getItem('token'));
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhbmF1c3VnYW1vbnRveWExMjM0NEBnbWFpbC5jb20iLCJfaWQiOiI2MjE2YjZhZmRjNDcyYzJjYmMyMWJmNGQiLCJuYW1lIjoibWFyaWFuYSIsImlhdCI6MTY0NTY1NTcyNywiZXhwIjoxNjQ2MjYwNTI3fQ.4A8Jc9QqMcKPlJRVPpEUASXxpn-JFeFO9eYXqS18Q4U';

export const getCourses = async () => axios.get(`${URL_BASE}/api/course`);

export const getCourse = (id) => axios.get(`${URL_BASE}/api/course/${id}`);

export const getSearchByRhythm = async (rhythm) => axios.get(`${URL_BASE}/api/course/${rhythm}`);

export const postCourse = async (course) => {
  const response = await axios.post(
    `${URL_BASE}/api/course`,
    course,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `${URL_BASE}/api/course/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
