/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TMDBservice from '../../TMDBservice';
import { getFormattedGenreList, getFormattedListData } from '../../utils/helpers';

const initialState = {
  isNextPageAvailable: false,
  loading: false,
  genres: {
    data: [],
    error: null,
  },
  filteredData: {
    data: [],
    error: null,
  },
};

const getGenres = createAsyncThunk(
  'media/getGenres',
  async ({ type, selectedGenresArr }, thunkApi) => {
    try {
      const response = await TMDBservice.getGenres(type);

      return getFormattedGenreList(response.data.genres, selectedGenresArr);
    } catch (error) {
      // TODO check thunkAPI
      return thunkApi.rejectWithValue(error);
    }
  },
);

const getFilteredMedia = createAsyncThunk(
  'media/getFilteredMedia',
  async ({ type, pageNumber, selectedGenresArr = [] }, thunkApi) => {
    try {
      const response = await TMDBservice.getFilteredMedia(type, pageNumber, selectedGenresArr);

      return getFormattedListData(response.data, type);
    } catch (error) {
      // TODO check thunkAPI
      return thunkApi.rejectWithValue(error);
    }
  },
);

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    updateGenreList: (state, action) => {
      state.genres.data = action.payload;
    },
    clearFilteredMedia: (state) => {
      state.isNextPageAvailable = false;
      state.loading = false;
      state.filteredData.data = [];
      state.filteredData.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres.data = action.payload;
        state.genres.error = null;
        state.loading = false;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.genres.error = action.payload.message;
        state.loading = false;
      });

    builder
      .addCase(getFilteredMedia.pending, (state, action) => {
        if (action.meta.arg.pageNumber === 1) {
          state.filteredData.data = [];
        }
        state.loading = true;
        state.isNextPageAvailable = false;
      })
      .addCase(getFilteredMedia.fulfilled, (state, action) => {
        state.filteredData.data.push(...action.payload.results);
        state.genres.error = null;
        state.loading = false;
        state.isNextPageAvailable = action.payload.page < action.payload.totalPages;
      })
      .addCase(getFilteredMedia.rejected, (state, action) => {
        state.filteredData.error = action.payload.message || action.payload;
        state.loading = false;
      });
  },
});

const loading = (state) => state.mediaPageReducer.loading;
const genresData = (state) => state.mediaPageReducer.genres.data;
const genresError = (state) => state.mediaPageReducer.genres.error;

const filteredData = (state) => state.mediaPageReducer.filteredData.data;
const filteredDataError = (state) => state.mediaPageReducer.filteredData.error;
const isNextPageAvailable = (state) => state.mediaPageReducer.isNextPageAvailable;

const selectors = {
  loading,
  genresData,
  genresError,
  filteredData,
  filteredDataError,
  isNextPageAvailable,
};

export { selectors };

export const actions = {
  ...mediaSlice.actions,
  getGenres,
  getFilteredMedia,
};
export default mediaSlice.reducer;
