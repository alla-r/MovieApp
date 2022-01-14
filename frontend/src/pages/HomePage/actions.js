import axios from 'axios'; 
import * as constants from './constants';

export const getTrendingsSuccess = (data) => ({
  type: constants.GET_TRENDINGS_SUCCESS,
  payload: data
});

export const getTrendingsError = (error) => ({
  type: constants.GET_TRENDINGS_ERROR,
  payload: error
});

export const getTrendingsRequest = () => ({
  type: constants.GET_TRENDINGS_REQUEST,
})

export const getTrendingsMedia = (pageNumber) => async dispatch => {
  dispatch(getTrendingsRequest());
  try {
    const response = await axios.get(`/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`);
    dispatch(getTrendingsSuccess(response.data));
  } catch(error) {
    dispatch(getTrendingsError(error));
  }
};
