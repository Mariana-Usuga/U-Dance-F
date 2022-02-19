/* eslint-disable import/prefer-default-export */
import { LOAD_COURSES, LOAD_COURSES_BY_RHYTHM } from '../types/courseType';
import { getCourses, getSearchByRhythm } from '../service/courseService';

export const fetchCourses = () => async (dispatch) => {
  const courses = await getCourses();
  dispatch({
    type: LOAD_COURSES,
    payload: courses.data,
  });
};

export const fetchCoursesByRhythm = (rhythm) => async (dispatch) => {
  const courses = await getSearchByRhythm(rhythm);
  dispatch({
    type: LOAD_COURSES_BY_RHYTHM,
    payload: courses.data,
  });
};
