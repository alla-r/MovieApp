import * as constants from './constants';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.GET_LIST_DATA_REQUEST:
    case constants.CHANGE_MEDIA_CUSTOM_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_LIST_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case constants.GET_LIST_DATA_ERROR:
    case constants.CHANGE_MEDIA_CUSTOM_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};

const listLoading = (state) => state.listPageReducer.loading;
const listData = (state) => state.listPageReducer.data;
const listError = (state) => state.listPageReducer.error;

const selectors = {
  listLoading,
  listData,
  listError,
};

export { selectors };

export default reducer;
