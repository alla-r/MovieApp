import * as constants from './constants';
import DBService from '../../DBService';
import StorageService from '../../StorageService';

export const registerUserSuccess = (data) => ({
  type: constants.REGISTER_USER_SUCCESS,
  payload: data,
});

export const registerUserError = (error) => ({
  type: constants.REGISTER_USER_ERROR,
  payload: error,
});

export const registerUserRequest = () => ({
  type: constants.REGISTER_USER_REQUEST,
});

export const loginUserSuccess = (data) => ({
  type: constants.LOGIN_USER_SUCCESS,
  payload: data,
});

export const loginUserError = (error) => ({
  type: constants.LOGIN_USER_ERROR,
  payload: error,
});

export const loginUserRequest = () => ({
  type: constants.LOGIN_USER_REQUEST,
});

export const registerUser = (data) => async (dispatch) => {
  dispatch(registerUserRequest());

  try {
    const response = await DBService.registerUser(data);

    if (response.status === 201) {
      dispatch(registerUserSuccess({ status: 'success' }));
    } else {
      dispatch(registerUserError({ status: 'error' }));
    }
  } catch (error) {
    dispatch(registerUserError({ status: 'error' }));
  }
};

export const loginUser = (data) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await DBService.loginUser(data);

    if (response.status === 200) {
      StorageService.setUser(response.data);
      dispatch(loginUserSuccess({ status: 'success', data: response.data }));
    } else {
      dispatch(loginUserError({ status: 'error' }));
    }
  } catch (error) {
    dispatch(registerUserError({ status: 'error',  }));
  }
};
