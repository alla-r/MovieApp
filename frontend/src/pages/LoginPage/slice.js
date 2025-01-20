/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as constants from './constants';
import * as initConstants from '../InitComponent/constants';
import { showNotification } from '../../utils/helpers';
import DBService from '../../DBService';

const initialState = {
  loading: false,
  isSuccess: false,
  error: null,
};

const registerUser = createAsyncThunk('auth/registerUser', async ({ data, navigate }, thunkApi) => {
  try {
    const response = await DBService.registerUser(data);

    if (response.status !== 201) {
      showNotification(
        initConstants.NOTIFICATIONS_CONFIG.type.error,
        constants.MESSAGE_CONFIG.register.error,
      );

      return thunkApi.rejectWithValue({ status: 'error' });
    }

    navigate('/auth/login');
    showNotification(
      initConstants.NOTIFICATIONS_CONFIG.type.success,
      constants.MESSAGE_CONFIG.register.success,
    );

    return {
      status: 'success',
      action: 'register',
    };
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.error;
    showNotification(initConstants.NOTIFICATIONS_CONFIG.type.error, errorMessage || error.message);

    return thunkApi.rejectWithValue({ status: 'error', message: error.message });
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isSuccess = !!action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isSuccess = false;
        state.loading = false;
      });
  },
});

const loading = (state) => state.loginPageReducer.loading;
const success = (state) => state.loginPageReducer.isSuccess;
const error = (state) => state.loginPageReducer.error;

const selectors = {
  loading,
  success,
  error,
};

export { selectors };

export const actions = {
  ...authSlice.actions,
  registerUser,
};

export default authSlice.reducer;
