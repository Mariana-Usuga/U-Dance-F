/* eslint-disable default-param-last */
import { PAY_SUCCESSFUL } from '../types/payType';

const initialState = {
  pay: {},
};

const payReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY_SUCCESSFUL:
      return { ...state, pay: action.payload };
    default:
      return state;
  }
};

export default payReducer;
