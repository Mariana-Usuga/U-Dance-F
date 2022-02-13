/* eslint-disable default-param-last */
import { LOAD_COURSES } from '../types/courseType';

const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COURSES:
      return { ...state, courses: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
