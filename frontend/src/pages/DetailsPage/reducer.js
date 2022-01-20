import * as constants from './constants';

const initialState = {
  loading: false,
  error: null,
  details: [],
  recommendations: [],
  cast: [],
  crew: [],
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_MEDIA_DETAILS:
      return {
        ...state,
      };
    case constants.GET_MEDIA_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_MEDIA_DETAILS_SUCCESS:
      return {
        ...state,
        data: {...state.data, ...action.payload},
        error: null,
        loading: false,
      };
    case constants.GET_MEDIA_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};

const mediaDetailsLoading = (state) => state.detailsPageReducer.loading;
const mediaDetailsData = (state) => state.detailsPageReducer.data;
const mediaDetailsError = (state) => state.detailsPageReducer.error;


const selectors = {
  mediaDetailsLoading,
  mediaDetailsData,
  mediaDetailsError,
};

export { selectors };

export default reducer;
