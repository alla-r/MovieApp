import * as constants from './constants';
import StorageService from '../../StorageService';

export const getListDataSuccess = (data) => ({
  type: constants.GET_LIST_DATA_SUCCESS,
  payload: data,
});

export const getListDataError = (error) => ({
  type: constants.GET_LIST_DATA_ERROR,
  payload: error,
});

export const getListDataRequest = () => ({
  type: constants.GET_LIST_DATA_REQUEST,
});

export const getListData = (listName) => (dispatch) => {
  dispatch(getListDataRequest());
  const listData = StorageService.getListData(listName);
  dispatch(getListDataSuccess(listData));
};

export const removeItemFromList = (mediaInfo) => (dispatch) => {
  const newListData = StorageService.changeMediaCustomDetails(mediaInfo);
  dispatch(getListDataSuccess(newListData));
};

export const changeMediaCustomDetails = (mediaInfo) => (dispatch) => {
  StorageService.changeMediaCustomDetails(mediaInfo);
  dispatch(getListData(mediaInfo.listName));
};