/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE;
const URL_BASE = 'https://u-dance.herokuapp.com';
// console.log('url in course', URL_BASE);

const token = JSON.parse(localStorage.getItem('token'));

export const getCourses = async () => axios.get(`${URL_BASE}/api/course`);

export const getCourse = (id) => axios.get(`${URL_BASE}/api/course/${id}`);

export const getSearchByRhythm = async (rhythm) => axios.get(`${URL_BASE}/api/course/rhythm/${rhythm}`);

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
