/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as constants from './constants';
import * as initConstants from '../InitComponent/constants';
import TMDBservice from '../../TMDBservice';
import DBService from '../../DBService';
import { getFormattedMediaDetails, showNotification } from '../../utils/helpers';

const initialState = {
  loading: false,
  error: null,
  details: null,
  customDetails: {},
  recommendations: [],
  cast: [],
  crew: [],
};

const getMediaDetails = createAsyncThunk(
  'details/getMediaDetails',
  async ({ mediaType, id }, thunkApi) => {
    try {
      const response = await TMDBservice.getMediaDetails(mediaType, id);

      return getFormattedMediaDetails(mediaType, response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const getMediaCustomDetails = createAsyncThunk(
  'details/getMediaCustomDetails',
  async (mediaInfo, thunkApi) => {
    try {
      const mediaCustomDetails = await DBService.getMediaDetails(mediaInfo.id, mediaInfo.type);

      return mediaCustomDetails.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const changeMediaCustomDetails = createAsyncThunk(
  'details/changeMediaCustomDetails',
  async ({ listName, mediaInfo, action }, thunkApi) => {
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
        showNotification(
          initConstants.NOTIFICATIONS_CONFIG.type.success,
          constants.getMessage(action, listName, 'success'),
        );

        return thunkApi.dispatch(getMediaCustomDetails(mediaInfo));
      }

      showNotification(
        initConstants.NOTIFICATIONS_CONFIG.type.error,
        constants.getMessage(action, listName, 'error'),
      );

      return thunkApi.rejectWithValue(mediaInfo);
    } catch (error) {
      showNotification(initConstants.NOTIFICATIONS_CONFIG.type.error, error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const detailsSlice = createSlice({
  name: 'details',
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
      .addCase(getMediaDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMediaDetails.fulfilled, (state, action) => {
        state.details = action.payload.details;
        state.cast = action.payload.cast;
        state.crew = action.payload.crew;
        state.recommendations = action.payload.recommendations;
        state.error = null;
        state.loading = false;
      })
      .addCase(getMediaDetails.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
        state.details = null;
        state.cast = [];
        state.crew = [];
        state.recommendations = [];
      });

    builder
      .addCase(getMediaCustomDetails.fulfilled, (state, action) => {
        state.customDetails = action.payload;
      })
      .addCase(getMediaCustomDetails.rejected, (state) => {
        state.customDetails = null;
      });

    builder
      // .addCase(changeMediaCustomDetails.fulfilled, (state) => {
      //   // state.customDetails = action.payload.payload;
      //   // state.loading = false;
      // })
      .addCase(changeMediaCustomDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

const detailsLoading = (state) => state.detailsPageReducer.loading;
const detailsData = (state) => state.detailsPageReducer.details;
const detailsCastList = (state) => state.detailsPageReducer.cast;
const detailsCrewList = (state) => state.detailsPageReducer.crew;
const detailsRecommendationsList = (state) => state.detailsPageReducer.recommendations;
const detailsError = (state) => state.detailsPageReducer.error;
const mediaCustomDetails = (state) => state.detailsPageReducer.customDetails;

const selectors = {
  detailsLoading,
  detailsData,
  detailsCastList,
  detailsCrewList,
  detailsRecommendationsList,
  detailsError,
  mediaCustomDetails,
};

export { selectors };

export const actions = {
  ...detailsSlice.actions,
  getMediaDetails,
  getMediaCustomDetails,
  changeMediaCustomDetails,
};

export default detailsSlice.reducer;
