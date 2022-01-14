// import * as actions from './actions';
import * as constants from './constants';

const initialState = {
  currentPage: null,
  totalPages: null,
  loading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.GET_TRENDINGS_MEDIA: return {
      ...state,
    }
    case constants.GET_TRENDINGS_REQUEST: return {
      ...state,
      loading: true
      // currentPage: action.payload.page,
      // totalPages: action.payload.total_pages,
      // data: action.payload.results
    }
    case constants.GET_TRENDINGS_SUCCESS: return {
      ...state,
      currentPage: action.payload.page,
      totalPages: action.payload.total_pages,
      data: action.payload.results,
      loading: false
    }
    case constants.GET_TRENDINGS_ERROR: return {
      ...state,
      error: action.payload.message,
      loading: false,
    }
    default: return state
  }
};

const trendingsLoading = (state) => state.homePageReducer.loading;
const trendingsData = (state) => state.homePageReducer.data;
const trendingsError = (state) => state.homePageReducer.error;
const trendingsIsNextPageAvailable = (state) => state.homePageReducer.page < state.homePageReducer.totalPages;

const selectors = {
  trendingsLoading,
  trendingsData,
  trendingsError,
  trendingsIsNextPageAvailable,
};

export { selectors }

export default reducer;