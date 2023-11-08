import * as constants from './constants';
import StorageService from '../../StorageService';
import DBService from '../../DBService';

export const getListDataSuccess = (data) => ({
  type: constants.GET_LIST_DATA_SUCCESS,
  payload: data,
});

export const getListDataError = (error) => ({
  type: constants.GET_LIST_DATA_ERROR,
  payload: error,
});

export const getListDataRequest = () => ({ type: constants.GET_LIST_DATA_REQUEST });

export const getListData = (listName) => async (dispatch) => {
  try {
    dispatch(getListDataRequest());

    const response = await DBService.getListData(listName);

    if (response.status === 200) {
      dispatch(getListDataSuccess(response.data));
    } else {
      dispatch(getListDataError(response));
    }
  } catch (error) {
    dispatch(getListDataError(error));
  }
};

export const removeItemFromList =
  ({ listName, details }) =>
  async (dispatch) => {
    dispatch(getListDataRequest());
    try {
      const response = await DBService.removeFromList(listName, details);

      if (response.status === 204) {
        dispatch(getListData(listName));
      }
    } catch (error) {
      dispatch(getListDataError(error));
    }
  };

export const removeItemFromListStorage = (mediaInfo) => (dispatch) => {
  const newListData = StorageService.changeMediaCustomDetails(mediaInfo);
  dispatch(getListDataSuccess(newListData));
};

export const changeMediaCustomDetailsStorage = (mediaInfo) => (dispatch) => {
  StorageService.changeMediaCustomDetails(mediaInfo);
  dispatch(getListData(mediaInfo.listName));
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

export const changeRate =
  ({ mediaInfo }) =>
  async (dispatch) => {
    dispatch(changeMediaCustomDetailsRequest());
    try {
      // eslint-disable-next-line no-param-reassign
      mediaInfo.timestamp = Date.now();

      const response = await DBService.changeRate('rate', mediaInfo);

      if (response.status === 200 || response.status === 204) {
        dispatch(getListData('rate'));
      } else {
        dispatch(changeMediaCustomDetailsError(mediaInfo));
      }
    } catch (e) {
      dispatch(changeMediaCustomDetailsError(mediaInfo));
    }
  };
