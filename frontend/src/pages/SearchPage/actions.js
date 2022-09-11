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

export const getSearchData =
  (query, mediaType = 'movie', page = 1) =>
  async (dispatch) => {
    dispatch(getSearchDataRequest());
    try {
      let responseMovie;
      let responseTVshows;
      let responsePeople;
      let temp;

      if (page === 1) {
        responseMovie = await TMDBservice.getSearchData('movie', query, page);
        responseTVshows = await TMDBservice.getSearchData('tv', query, page);
        responsePeople = await TMDBservice.getSearchData('person', query, page);
      } else {
        temp = await TMDBservice.getSearchData(mediaType, query, page);
      }

      // add data formatting !!!!!!

      const ready = {
        movie: {
          result: getFormattedSearchData(responseMovie?.data, 'movie').results,
          totalPages: responseMovie?.data?.total_pages,
          totalResults: responseMovie?.data?.total_results,
          currentPage: page,
        },
        tv: {
          result: getFormattedSearchData(responseTVshows?.data, 'tv').results,
          totalPages: responseTVshows?.data?.total_pages,
          totalResults: responseTVshows?.data?.total_results,
          currentPage: page,
        },
        person: {
          result: getFormattedSearchData(responsePeople?.data, 'people').results,
          totalPages: responsePeople?.data?.total_pages,
          totalResults: responsePeople?.data?.total_results,
          currentPage: page,
        },
      };

      // const formattedResponse = getFormattedSearchData(response.data.genres);
      dispatch(getSearchDataSuccess(ready));
    } catch (error) {
      dispatch(getSearchDataError(error));
    }
  };
