import * as constants from './constants';
import TMDBservice from '../../TMDBservice';
import { getFormattedSearchData } from '../../utils/helpers';

export const getSearchDataSuccess = (data) => ({
  type: constants.GET_SEARCH_DATA_SUCCESS,
  payload: data,
});

export const getSearchDataError = (error) => ({
  type: constants.GET_SEARCH_DATA_ERROR,
  payload: error,
});

export const getSearchDataRequest = () => ({ type: constants.GET_SEARCH_DATA_REQUEST });

export const getSearchData =
  (query, mediaType = 'movie', page = 1) =>
  async (dispatch) => {
    dispatch(getSearchDataRequest());
    try {
      const result = {};

      if (Number(page) === 1) {
        const responseMovie = await TMDBservice.getSearchData('movie', query, page);
        const responseTVshows = await TMDBservice.getSearchData('tv', query, page);
        const responsePeople = await TMDBservice.getSearchData('person', query, page);

        result.movie = getFormattedSearchData(responseMovie?.data, 'movie');
        result.tv = getFormattedSearchData(responseTVshows?.data, 'tv');
        result.person = getFormattedSearchData(responsePeople?.data, 'people');
      } else {
        const temp = await TMDBservice.getSearchData(mediaType, query, page);
        result[mediaType] = getFormattedSearchData(temp?.data, mediaType);
      }

      dispatch(getSearchDataSuccess(result));
    } catch (error) {
      dispatch(getSearchDataError(error));
    }
  };
