/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import { LOAD_COURSES, LOAD_COURSES_BY_RHYTHM, CREATE_COURSE, DELETE_COURSE } from '../types/courseType';

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
    case CREATE_COURSE:
      return { ...state, courses: [...state.courses, action.payload] };
    case DELETE_COURSE:
      return state;
    default:
      return state;
  }
};

export default courseReducer;
