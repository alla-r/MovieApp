import * as constants from './constants';
import TMDBservice from '../../TMDBservice';
import { getFormattedSearchData } from '../../global/helpers';

export const getSearchDataSuccess = (data) => ({
  type: constants.GET_SEARCH_DATA_SUCCESS,
  payload: data,
});

export const getSearchDataError = (error) => ({
  type: constants.GET_SEARCH_DATA_ERROR,
  payload: error,
});

export const getSearchDataRequest = () => ({
  type: constants.GET_SEARCH_DATA_REQUEST,
});

export const getSearchData = (query) => async (dispatch) => {
  dispatch(getSearchDataRequest());
  try {
    debugger;
    const responseMovie = await TMDBservice.getSearchData("movie", query);
    const responseTVshows = await TMDBservice.getSearchData("tv", query);
    const responsePeople = await TMDBservice.getSearchData("person", query);

    // add data formatting !!!!!!

    const ready = {
      movies: {
        result: responseMovie?.data?.results,
        totalPages: responseMovie?.data?.total_pages,
        totalResults: responseMovie?.data?.total_results,
      },
      tv: {
        result: responseTVshows?.data?.results,
        totalPages: responseTVshows?.data?.total_pages,
        totalResults: responseTVshows?.data?.total_results,
      },
      people: {
        result: responsePeople?.data?.results,
        totalPages: responsePeople?.data?.total_pages,
        totalResults: responsePeople?.data?.total_results,
      }
    }

    // const formattedResponse = getFormattedSearchData(response.data.genres);
    dispatch(getSearchDataSuccess(ready));
  } catch (error) {
    dispatch(getSearchDataError(error));
  }  
};
