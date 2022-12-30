import * as constants from './constants';

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
  debugger;
  dispatch(registerUserRequest());
  console.log('register ' + data);
  if (data.username === 'test' && data.password === 'test') {
    dispatch(registerUserSuccess({ status: 'success' }));
  } else {
    dispatch(registerUserError({ status: 'error' }));
  }

  // try {
  //   const response = await TMDBservice.getTrendings(pageNumber);

  //   const formattedData = getFormattedListData(response.data);
  //   dispatch(registerUserSuccess(formattedData));
  // } catch (error) {
  //   dispatch(registerUserError(error));
  // }
};

export const loginUser = (data) => async (dispatch) => {
  debugger;
  dispatch(loginUserRequest());
  console.log('register ' + data);
  if (data.username === 'test' && data.password === 'test') {
    dispatch(loginUserSuccess({ status: 'success' }));
  } else {
    dispatch(loginUserError({ status: 'error' }));
  }
  // try {
  //   const response = await TMDBservice.loginUser(pageNumber);

  //   const formattedData = getFormattedListData(response.data);
  //   dispatch(loginUserSuccess(formattedData));
  // } catch (error) {
  //   dispatch(loginUserError(error));
  // }
};
