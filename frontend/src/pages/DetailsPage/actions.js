import axios from 'axios';
import * as constants from './constants';

export const getMediaDetailsSuccess = (data) => ({
  type: constants.GET_MEDIA_DETAILS_SUCCESS,
  payload: data,
});

export const getMediaDetailsError = (error) => ({
  type: constants.GET_MEDIA_DETAILS_ERROR,
  payload: error,
});

export const getMediaDetailsRequest = () => ({
  type: constants.GET_MEDIA_DETAILS_REQUEST,
});

export const getMediaDetails = (mediaType, id) => async (dispatch) => {
  dispatch(getMediaDetailsRequest());
  try {
    const response = await axios.get(
      `/${mediaType}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=recommendations,credits`,
    );

    dispatch(getMediaDetailsSuccess(response.data));
  } catch (error) {
    dispatch(getMediaDetailsError(error));
  }
};