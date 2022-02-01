import axios from 'axios';
import * as constants from './constants';
import { getFormattedGenreList, getFormattedListData } from '../../global/helpers';

export const getGenresSuccess = (data) => ({
  type: constants.GET_GENRES_SUCCESS,
  payload: data,
});

export const getGenresError = (error) => ({
  type: constants.GET_GENRES_ERROR,
  payload: error,
});

export const getGenresRequest = () => ({
  type: constants.GET_GENRES_REQUEST,
});

export const getGenres = () => async (dispatch) => {
  dispatch(getGenresRequest());
  try {
    const response = await axios.get(
      `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    );

    const formattedGenreList = getFormattedGenreList(response.data.genres);
    dispatch(getGenresSuccess(formattedGenreList));
  } catch (error) {
    dispatch(getGenresError(error));
  }
};

export const getFilteredMediaSuccess = (data) => ({
  type: constants.GET_FILTERED_MEDIA_SUCCESS,
  payload: data,
});

export const getFilteredMediaError = (error) => ({
  type: constants.GET_FILTERED_MEDIA_ERROR,
  payload: error,
});

export const getFilteredMediaRequest = () => ({
  type: constants.GET_FILTERED_MEDIA_REQUEST,
});

export const getFilteredMedia = (mediaType = "movie", pageNumber, genreList = ["all"]) => async (dispatch) => {
  dispatch(getGenresRequest());
  try {
    const response = await axios.get(
      `/discover/${mediaType}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&with_genres=${genreList.join(', ')}`,
    );

    const formattedData = getFormattedListData(response.data, mediaType)
    dispatch(getFilteredMediaSuccess(formattedData));
  } catch (error) {
    dispatch(getFilteredMediaError(error));
  }
};

export const clearFilteredMedia = () => ({
  type: constants.CLEAR_FILTERED_MEDIA,
})

export const changeMediaType = (mediaType) => ({
  type: constants.CHANGE_MEDIA_TYPE,
  payload: mediaType
})