/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';
const URL_BASE = 'https://u-dance.herokuapp.com';

const token = JSON.parse(localStorage.getItem('token'));

export const postPay = async (paymentData) => {
  const response = await axios.post(
    `${URL_BASE}/api/payment/make-payment`,
    paymentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
