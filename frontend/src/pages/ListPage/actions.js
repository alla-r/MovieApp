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

export const getListDataRequest = () => ({
  type: constants.GET_LIST_DATA_REQUEST,
});

export const getListData = (listName) => async (dispatch) => {
  try {
    dispatch(getListDataRequest());
    // const listData = StorageService.getListData(listName);

    const listNameCB = {
      favorites: DBService.getFavorites,
      watchlist: DBService.getFavorites, // change
      rate: DBService.getFavorites, // change
    };
    console.log(listName);

    // change userId
    const userId = "test";

    const response = await listNameCB[listName](userId);

    console.log(response)

    if (response.status === 200) {
      dispatch(getListDataSuccess(response.data));
    } else {
      dispatch(getListDataError(response));
    }
  } catch (error) {
    dispatch(getListDataError(error));
  }
};

export const removeItemFromList = ({ listName, details }) => async (dispatch) => {
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

export const changeMediaCustomDetails = (mediaInfo) => (dispatch) => {
  StorageService.changeMediaCustomDetails(mediaInfo);
  dispatch(getListData(mediaInfo.listName));
};
