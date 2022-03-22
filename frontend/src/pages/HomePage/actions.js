import axios from 'axios';
import * as constants from './constants';
import { getFormattedListData } from '../../global/helpers';
import TMDBservice from '../../service';

export const getTrendingsSuccess = (data) => ({
  type: constants.GET_TRENDINGS_SUCCESS,
  payload: data,
});

export const getTrendingsError = (error) => ({
  type: constants.GET_TRENDINGS_ERROR,
  payload: error,
});

export const getTrendingsRequest = () => ({
  type: constants.GET_TRENDINGS_REQUEST,
});

export const trendingsClearData = () => ({
  type: constants.TRENDINGS_CLEAR_DATA,
});

export const getTrendingsMedia = (pageNumber) => async (dispatch) => {
  dispatch(getTrendingsRequest());
  try {
    const response = await TMDBservice.getTrendings(pageNumber);

    const formattedData = getFormattedListData(response.data);
    dispatch(getTrendingsSuccess(formattedData));
  } catch (error) {
    dispatch(getTrendingsError(error));
  }
};
