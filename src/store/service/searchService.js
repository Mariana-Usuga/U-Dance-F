/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';
const URL_BASE = 'http://localhost:8080';

export const getSearch = async (rhythm) => axios.get(`${URL_BASE}/api/course/${rhythm}`);
