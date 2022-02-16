/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE;
const URL_BASE = 'http://localhost:8080';

export const getCourses = async () => axios.get(`${URL_BASE}/api/course`);

export const getCourse = (id) => axios.get(`${URL_BASE}/api/course/${id}`);
