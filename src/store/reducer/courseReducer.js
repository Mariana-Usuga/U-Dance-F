/* eslint-disable default-param-last */
import { LOAD_COURSES, LOAD_COURSES_BY_RHYTHM } from '../types/courseType';

const initialState = {
  courses: [],
  coursesByRhythm: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COURSES:
      return { ...state, courses: action.payload };
    case LOAD_COURSES_BY_RHYTHM:
      return { ...state, coursesByRhythm: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
