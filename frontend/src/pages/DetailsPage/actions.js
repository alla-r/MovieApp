import * as constants from './constants';
import * as initConstants from '../InitComponent/constants';
import { getFormattedMediaDetails, showNotification } from '../../utils/helpers';
import TMDBservice from '../../TMDBservice';
import StorageService from '../../StorageService';
import DBService from '../../DBService';

export const getMediaDetailsSuccess = (data) => ({
  type: constants.GET_MEDIA_DETAILS_SUCCESS,
  payload: data,
});

export const getMediaDetailsError = (error) => ({
  type: constants.GET_MEDIA_DETAILS_ERROR,
  payload: error,
});

export const getMediaDetailsRequest = () => ({ type: constants.GET_MEDIA_DETAILS_REQUEST });

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

export const mediaDetailsClearData = () => ({ type: constants.MEDIA_DETAILS_CLEAR_DATA });

export const getMediaCustomDetailsSuccess = (data) => ({
  type: constants.GET_MEDIA_CUSTOM_DETAILS_SUCCESS,
  payload: data,
});

export const getMediaCustomDetailsError = (data) => ({
  type: constants.GET_MEDIA_CUSTOM_DETAILS_ERROR,
  payload: data,
});

export const getMediaCustomDetailsStorage = (mediaInfo) => (dispatch) => {
  const mediaCustomDetails = StorageService.getMediaCustomDetails(mediaInfo);
  dispatch(getMediaCustomDetailsSuccess(mediaCustomDetails));
};

export const getMediaCustomDetails = (mediaInfo) => async (dispatch) => {
  try {
    const mediaCustomDetails = await DBService.getMediaDetails(mediaInfo.id, mediaInfo.type);

    dispatch(getMediaCustomDetailsSuccess(mediaCustomDetails.data));
  } catch (error) {
    dispatch(getMediaCustomDetailsError(error));
  }
};

export const changeMediaCustomDetailsStorage = (mediaInfo) => (dispatch) => {
  StorageService.changeMediaCustomDetails(mediaInfo);
  dispatch(getMediaCustomDetails(mediaInfo.mediaInfo));
};

export const changeMediaCustomDetailsSuccess = (data) => ({
  type: constants.CHANGE_MEDIA_CUSTOM_DETAILS_SUCCESS,
  payload: data,
});

export const changeMediaCustomDetailsError = (error) => ({
  type: constants.CHANGE_MEDIA_CUSTOM_DETAILS_ERROR,
  payload: error,
});

export const changeMediaCustomDetailsRequest = () => ({
  type: constants.CHANGE_MEDIA_CUSTOM_DETAILS_REQUEST,
});

export const changeMediaCustomDetails =
  ({ listName, mediaInfo, action }) =>
  async (dispatch) => {
    dispatch(changeMediaCustomDetailsRequest());
    try {
      const actionCBname = {
        add: 'addToList',
        remove: 'removeFromList',
        update: 'changeRate',
      };

      const response = await DBService[actionCBname[action]](listName, {
        ...mediaInfo,
        timestamp: Date.now(),
      });

      if (response.status === 200 || response.status === 204) {
        dispatch(getMediaCustomDetails(mediaInfo));
        showNotification(
          initConstants.NOTIFICATIONS_CONFIG.type.success,
          constants.getMessage(action, listName, 'success'),
        );
      } else {
        dispatch(changeMediaCustomDetailsError(mediaInfo));
        showNotification(
          initConstants.NOTIFICATIONS_CONFIG.type.error,
          constants.getMessage(action, listName, 'error'),
        );
      }
    } catch (e) {
      dispatch(changeMediaCustomDetailsError(e));

      showNotification(initConstants.NOTIFICATIONS_CONFIG.type.error, e.message);
    }
  };
