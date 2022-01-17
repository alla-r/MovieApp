import * as constants from './constants';

const initialState = {
  isNextPageAvailable: false,
  currentPage: null,
  totalPages: null,
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TRENDINGS_MEDIA:
      return {
        ...state,
      };
    case constants.GET_TRENDINGS_REQUEST:
      return {
        ...state,
        loading: true,
        isNextPageAvailable: false,
      };
    case constants.GET_TRENDINGS_SUCCESS:
      return {
        ...state,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        isNextPageAvailable: action.payload.page < action.payload.total_pages,
        data: [...state.data, ...action.payload.results],
        error: null,
        loading: false,
      };
    case constants.GET_TRENDINGS_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};

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

export default reducer;
