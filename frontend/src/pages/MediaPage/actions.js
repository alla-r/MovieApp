import * as constants from './constants';
import { getFormattedGenreList, getFormattedListData } from '../../global/helpers';
import TMDBservice from '../../TMDBservice';

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

export const getGenres = (type, selectedGenresArr) => async (dispatch) => {
  dispatch(getGenresRequest());
  try {
    const response = await TMDBservice.getGenres(type);

    const formattedGenreList = getFormattedGenreList(response.data.genres, selectedGenresArr);
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

export const clearFilteredMedia = () => ({
  type: constants.CLEAR_FILTERED_MEDIA,
});

export const getFilteredMedia =
  (mediaType = 'movie', pageNumber, genreList = []) =>
  async (dispatch) => {
    if (pageNumber === 1) {
      dispatch(clearFilteredMedia());
    }

    dispatch(getFilteredMediaRequest());
    try {
      const response = await TMDBservice.getFilteredMedia(mediaType, pageNumber, genreList);

      if (response.data.results.length === 0) {
        dispatch(getFilteredMediaError("Nothing was found"));
      } else {
        const formattedData = getFormattedListData(response.data, mediaType);
        dispatch(getFilteredMediaSuccess(formattedData));
      }
    } catch (error) {
      dispatch(getFilteredMediaError("Something went wrong. Couldn't fetch data."));
    }
  };

export const updateGenreList = (newGenreList) => ({
  type: constants.UPDATE_GENRE_LIST,
  payload: newGenreList,
});
