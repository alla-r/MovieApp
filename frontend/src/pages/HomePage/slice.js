/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TMDBservice from '../../TMDBservice';
import { getFormattedListData } from '../../utils/helpers';

const initialState = {
  isNextPageAvailable: false,
  loading: false,
  data: [],
  error: null,
};

const getTrendingsMedia = createAsyncThunk(
  'home/getTrendingsMedia',
  async (pageNumber, thunkApi) => {
    try {
      const response = await TMDBservice.getTrendings(pageNumber);

      return getFormattedListData(response.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    trendingsClearData: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingsMedia.pending, (state) => {
        state.loading = true;
        state.isNextPageAvailable = false;
      })
      .addCase(getTrendingsMedia.fulfilled, (state, action) => {
        state.data = action.payload.results;
        state.isNextPageAvailable = action.payload.page < action.payload.totalPages;
        state.error = null;
        state.loading = false;
      })
      .addCase(getTrendingsMedia.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

const trendingsLoading = (state) => state.homePageReducer.loading;
const trendingsData = (state) => state.homePageReducer.data;
const trendingsError = (state) => state.homePageReducer.error;
const trendingsIsNextPageAvailable = (state) => state.homePageReducer.isNextPageAvailable;

const selectors = {
  trendingsLoading,
  trendingsData,
  trendingsError,
  trendingsIsNextPageAvailable,
};

export { selectors };

export const actions = {
  ...homeSlice.actions,
  getTrendingsMedia,
};
export default homeSlice.reducer;
