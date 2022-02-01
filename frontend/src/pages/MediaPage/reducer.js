import * as constants from './constants';

const initialState = {
  mediaType: null,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_MEDIA_TYPE:
      return {
        ...state,
        mediaType: action.payload,
      };
    case constants.GET_GENRES:
      return {
        ...state,
      };
    case constants.GET_GENRES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: {
          ...state.genres,
          data: action.payload,
        },
      };
    case constants.GET_GENRES_ERROR:
      return {
        ...state,
        loading: false,
        genres: {
          ...state.genres,
          error: action.payload.message,
        },
      };
    case constants.GET_FILTERED_MEDIA:
      return {
        ...state,
      };
    case constants.GET_FILTERED_MEDIA_REQUEST:
      return {
        ...state,
        loading: true,
        isNextPageAvailable: false,
      };
    case constants.GET_FILTERED_MEDIA_SUCCESS:
      return {
        ...state,
        loading: false,
        isNextPageAvailable: action.payload.page < action.payload.totalPages,
        filteredData: {
          ...state.filteredData,
          data: [...state.filteredData.data, ...action.payload.results],
        },
      };
    case constants.GET_FILTERED_MEDIA_ERROR:
      return {
        ...state,
        loading: false,
        filteredData: {
          ...state.filteredData,
          error: action.payload.message,
        },
      };
    case constants.CLEAR_FILTERED_MEDIA:
      return {
        mediaType: null,
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
    default:
      return state;
  }
};

const mediaType = (state) => state.mediaPageReducer.mediaType;

const loading = (state) => state.mediaPageReducer.loading;
const genresData = (state) => state.mediaPageReducer.genres.data;
const genresError = (state) => state.mediaPageReducer.genres.error;

const filteredData = (state) => state.mediaPageReducer.filteredData.data;
const filteredDataError = (state) => state.mediaPageReducer.filteredData.error;
const isNextPageAvailable = (state) => state.mediaPageReducer.isNextPageAvailable;

const selectors = {
  mediaType,
  loading,
  genresData,
  genresError,
  filteredData,
  filteredDataError,
  isNextPageAvailable,
};

export { selectors };

export default reducer;
