/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const getCourses = async () => axios.get(`${URL_BASE}/api/course`);

export const getCourse = (id) => axios.get(`${URL_BASE}/api/course/${id}`);
