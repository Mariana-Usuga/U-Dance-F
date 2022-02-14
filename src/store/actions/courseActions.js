/* eslint-disable import/prefer-default-export */
import { LOAD_COURSES } from '../types/courseType';
import { getCourses } from '../service/courseService';

export const fetchCourses = () => async (dispatch) => {
  const courses = await getCourses();
  dispatch({
    type: LOAD_COURSES,
    payload: courses.data,
  });
};
