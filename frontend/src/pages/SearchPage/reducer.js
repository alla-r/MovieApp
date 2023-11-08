import * as constants from './constants';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.GET_SEARCH_DATA_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case constants.GET_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        error: null,
        loading: false,
      };
    case constants.GET_SEARCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};

const searchLoading = (state) => state.searchPageReducer.loading;
const searchData = (state) => state.searchPageReducer.data;
const searchError = (state) => state.searchPageReducer.error;

const selectors = {
  searchLoading,
  searchData,
  searchError,
};

export { selectors };

export default reducer;
