/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DBService from '../../DBService';
import * as constants from './constants';
import * as initConstants from '../InitComponent/constants';
// import TMDBservice from '../../TMDBservice';
import { showNotification } from '../../utils/helpers';
import i18next from '../../utils/i18n';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const getListData = createAsyncThunk('list/getListData', async (listName, thunkApi) => {
  try {
    const response = await DBService.getListData(listName);

    if (response.status !== 200) {
      return thunkApi.rejectWithValue(response);
    }

    return response.data;
  } catch (error) {
    // TODO check thunkAPI
    return thunkApi.rejectWithValue(error);
  }
});

const removeItemFromList = createAsyncThunk(
  'list/removeItemFromList',
  async ({ listName, details }, thunkApi) => {
    try {
      const response = await DBService.removeFromList(listName, details);

      if (response.status === 204) {
        showNotification(
          initConstants.NOTIFICATIONS_CONFIG.type.success,
          i18next.t('removeFromListSuccess', {
            listName: i18next.t(`${listName}ListName`),
          }),
        );

        return thunkApi.dispatch(getListData(listName));
      }

      showNotification(
        initConstants.NOTIFICATIONS_CONFIG.type.error,
        i18next.t('removeFromListError', {
          listName: i18next.t(`${listName}ListName`),
        }),
      );

      return thunkApi.rejectWithValue(response);
    } catch (error) {
      showNotification(
        initConstants.NOTIFICATIONS_CONFIG.type.error,
        i18next.t('removeFromListError', {
          listName: i18next.t(`${listName}ListName`),
        }),
      );
      // TODO check thunkAPI
      return thunkApi.rejectWithValue(error);
    }
  },
);

const changeRate = createAsyncThunk('list/changeRate', async ({ mediaInfo }, thunkApi) => {
  try {
    mediaInfo.timestamp = Date.now();

    const response = await DBService.changeRate('rate', mediaInfo);

    if (response.status === 200 || response.status === 204) {
      showNotification(
        initConstants.NOTIFICATIONS_CONFIG.type.success,
        constants.RATE_UPDATE_MESSAGE_CONFIG.success,
      );

      return thunkApi.dispatch(getListData('rate'));
    }

    showNotification(
      initConstants.NOTIFICATIONS_CONFIG.type.error,
      constants.RATE_UPDATE_MESSAGE_CONFIG.error,
    );

    return thunkApi.rejectWithValue(response);
  } catch (error) {
    showNotification(
      initConstants.NOTIFICATIONS_CONFIG.type.error,
      constants.RATE_UPDATE_MESSAGE_CONFIG.error,
    );
    // TODO check thunkAPI
    return thunkApi.rejectWithValue(error);
  }
});

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    mediaDetailsClearData: (state) => {
      state.loading = false;
      state.error = null;
      state.customDetails = null;
      state.details = [];
      state.recommendations = [];
      state.cast = [];
      state.crew = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getListData.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });

    builder
      .addCase(removeItemFromList.pending, (state) => {
        state.loading = true;
      })
      // .addCase(removeItemFromList.fulfilled, (state, action) => {
      //   state.loading = false;
      // })
      .addCase(removeItemFromList.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });

    builder
      .addCase(changeRate.pending, (state) => {
        state.loading = true;
      })
      // .addCase(changeRate.fulfilled, (state, action) => {
      //   state.loading = false;
      // })
      .addCase(changeRate.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

const listLoading = (state) => state.listPageReducer.loading;
const listData = (state) => state.listPageReducer.data;
const listError = (state) => state.listPageReducer.error;

const selectors = {
  listLoading,
  listData,
  listError,
};

export { selectors };

export const actions = {
  ...listSlice.actions,
  getListData,
  removeItemFromList,
  changeRate,
};

export default listSlice.reducer;
