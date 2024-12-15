/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFormattedSearchData } from '../../utils/helpers';
import TMDBservice from '../../TMDBservice';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const getSearchData = createAsyncThunk(
  'search/getSearchData',
  async ({ query, type = 'movie', pageNumber = 1 }, thunkApi) => {
    try {
      const result = {};

      if (Number(pageNumber) === 1) {
        const responseMovie = await TMDBservice.getSearchData('movie', query, pageNumber);
        const responseTVshows = await TMDBservice.getSearchData('tv', query, pageNumber);
        const responsePeople = await TMDBservice.getSearchData('person', query, pageNumber);

        result.movie = getFormattedSearchData(responseMovie?.data, 'movie');
        result.tv = getFormattedSearchData(responseTVshows?.data, 'tv');
        result.person = getFormattedSearchData(responsePeople?.data, 'people');
      } else {
        const temp = await TMDBservice.getSearchData(type, query, pageNumber);
        result[type] = getFormattedSearchData(temp?.data, type);
      }

      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearchData.fulfilled, (state, action) => {
        state.data = { ...state.data, ...action.payload };
        state.error = null;
        state.loading = false;
      })
      .addCase(getSearchData.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

const searchLoading = (state) => state.searchPageReducer.loading;
const searchData = (state) => state.searchPageReducer.data;
const searchError = (state) => state.searchPageReducer.error;

const selectors = {
  searchLoading,
  searchData,
  searchError,
};

export { selectors };

export const actions = {
  ...searchSlice.actions,
  getSearchData,
};

export default searchSlice.reducer;
