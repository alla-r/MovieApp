/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getFormattedPersonDetails,
  getFormattedSocialMedia,
  getFormattedRecommendationItem,
} from '../../utils/helpers';
import TMDBservice from '../../TMDBservice';

const initialState = {
  loading: false,
  error: null,
  details: null,
};

const getPersonDetails = createAsyncThunk('person/getPersonDetails', async (id, thunkApi) => {
  try {
    const response = await TMDBservice.getPersonDetails(id);
    const formattedData = getFormattedPersonDetails(response.data);

    const socialMediaResponse = await TMDBservice.getPersonExternalIds(id);
    formattedData.socialMedia = getFormattedSocialMedia(socialMediaResponse.data);

    const creditsResponse = await TMDBservice.getPersonCredits(id);

    const onlyUnique = (value, index, arr) =>
      arr.findIndex((item) => item.id === value.id && item.media_type === value.media_type) ===
      index;

    formattedData.credits = {
      cast: creditsResponse.data.cast
        .filter(onlyUnique)
        .map((item) => getFormattedRecommendationItem(item, true)),
      crew: creditsResponse.data.crew
        .filter(onlyUnique)
        .map((item) => getFormattedRecommendationItem(item, false)),
    };

    return formattedData;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    personDetailsClearData: (state) => {
      state.loading = false;
      state.details = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPersonDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPersonDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getPersonDetails.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
        state.details = null;
      });
  },
});

const detailsLoading = (state) => state.personPageReducer.loading;
const detailsData = (state) => state.personPageReducer.details;
const detailsError = (state) => state.personPageReducer.error;

const selectors = {
  detailsLoading,
  detailsData,
  detailsError,
};

export { selectors };

export const actions = {
  ...personSlice.actions,
  getPersonDetails,
};

export default personSlice.reducer;
