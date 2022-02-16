/* eslint-disable import/prefer-default-export */
import { PAY_SUCCESSFUL } from '../types/payType';
import { postPay } from '../service/payServices';

export const fetchPay = (pay) => async (dispatch) => {
  const payRes = await postPay(pay);
  dispatch({
    type: PAY_SUCCESSFUL,
    payload: payRes.data,
  });
};
