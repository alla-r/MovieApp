import * as constants from './constants';
import { getFormattedMediaDetails } from '../../global/helpers';
import TMDBservice from '../../TMDBservice';
import StorageService from '../../StorageService';

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
    const response = await TMDBservice.getMediaDetails(mediaType, id);
    const formattedData = getFormattedMediaDetails(mediaType, response.data);

    dispatch(getMediaDetailsSuccess(formattedData));
  } catch (error) {
    dispatch(getMediaDetailsError(error));
  }
};

export const mediaDetailsClearData = () => ({
  type: constants.MEDIA_DETAILS_CLEAR_DATA,
});

export const getMediaCustomDetailsSuccess = (data) => ({
  type: constants.GET_MEDIA_CUSTOM_DETAILS_SUCCESS,
  payload: data,
});

export const getMediaCustomDetails = (mediaInfo) => (dispatch) => {
  const mediaCustomDetails = StorageService.getMediaCustomDetails(mediaInfo);
  dispatch(getMediaCustomDetailsSuccess(mediaCustomDetails));
}

export const changeMediaCustomDetails = (mediaInfo) => (dispatch) => {
  StorageService.changeMediaCustomDetails(mediaInfo);
  dispatch(getMediaCustomDetails(mediaInfo.mediaInfo));
}
