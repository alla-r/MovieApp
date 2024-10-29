import * as constants from './constants';

const initialState = {
  isNextPageAvailable: false,
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.GET_TRENDINGS_REQUEST:
      return {
        ...state,
        loading: true,
        isNextPageAvailable: false,
      };
    case constants.GET_TRENDINGS_SUCCESS:
      return {
        ...state,
        isNextPageAvailable: action.payload.page < action.payload.totalPages,
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
    case constants.TRENDINGS_CLEAR_DATA:
      return {
        isNextPageAvailable: false,
        loading: false,
        data: [],
        error: null,
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
