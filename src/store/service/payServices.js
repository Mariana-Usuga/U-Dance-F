/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';
const URL_BASE = 'http://localhost:8080';

export const postPay = async (paymentData) => {
  const response = await axios.post(
    `${URL_BASE}/api/payments/make-payment`,
    paymentData,
    {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmRyYXlhbmV0aG1vbnRveWFtb3Jlbm9AZ21haWwuY29tIiwiX2lkIjoiNjIwYmJkMjRiMzE4MDZmMDUyMTZiNDlmIiwibmFtZSI6InNhbmRyYSBtb250b3lhIiwiaWF0IjoxNjQ0OTM2NDg0LCJleHAiOjE2NDU1NDEyODR9.IF_u9ebXDGaqtPT84FfGRJYv-p7Q-tnRC32FJtvx24I'}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
