/* eslint-disable import/prefer-default-export */
import { LOAD_COURSES, LOAD_COURSES_BY_RHYTHM,
  CREATE_COURSE, DELETE_COURSE } from '../types/courseType';
import { getCourses, getSearchByRhythm, postCourse, deleteCourse } from '../service/courseService';

export const fetchCourses = () => async (dispatch) => {
  const courses = await getCourses();
  dispatch({
    type: LOAD_COURSES,
    payload: courses.data,
  });
};

export const createCourse = (course) => async (dispatch) => {
  const courseRes = await postCourse(course);
  dispatch({
    type: CREATE_COURSE,
    payload: courseRes.data,
  });
};

export const fetchCoursesByRhythm = (rhythm) => async (dispatch) => {
  const courses = await getSearchByRhythm(rhythm);
  dispatch({
    type: LOAD_COURSES_BY_RHYTHM,
    payload: courses.data,
  });
};

export const fetchRemoveCourse = (id) => async (dispatch) => {
  await deleteCourse(id);
  dispatch({
    type: DELETE_COURSE,
  });
};
