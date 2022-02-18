/* eslint-disable import/prefer-default-export */
import { SEARCH_DROPDOWN } from '../types/searchType';
import { getSearch } from '../service/searchService';

export const fetchCourses = () => async (dispatch) => {
  const search = await getSearch();
  dispatch({
    type: SEARCH_DROPDOWN,
    payload: search.data,
  });
};
