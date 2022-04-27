import * as constants from './constants';

const initialState = {
  loading: false,
  error: null,
  details: null,
  customDetails: [],
  recommendations: [],
  cast: [],
  crew: [],
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
        details: action.payload.details,
        cast: action.payload.cast,
        crew: action.payload.crew,
        recommendations: action.payload.recommendations,
        error: null,
        loading: false,
      };
    case constants.GET_MEDIA_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
        details: null,
        recommendations: [],
        cast: [],
        crew: [],
      };
    case constants.MEDIA_DETAILS_CLEAR_DATA:
      return {
        loading: true,
        error: null,
        details: null,
        recommendations: [],
        cast: [],
        crew: [],
      };
    case constants.GET_MEDIA_CUSTOM_DETAILS_SUCCESS:
      return {
        ...state,
        customDetails: action.payload,
      }
    default:
      return state;
  }
};

const detailsLoading = (state) => state.detailsPageReducer.loading;
const detailsData = (state) => state.detailsPageReducer.details;
const detailsCastList = (state) => state.detailsPageReducer.cast;
const detailsCrewList = (state) => state.detailsPageReducer.crew;
const detailsRecommendationsList = (state) => state.detailsPageReducer.recommendations;
const detailsError = (state) => state.detailsPageReducer.error;
const mediaCustomDetails = (state) => state.detailsPageReducer.customDetails;

const selectors = {
  detailsLoading,
  detailsData,
  detailsCastList,
  detailsCrewList,
  detailsRecommendationsList,
  detailsError,
  mediaCustomDetails,
};

export { selectors };

export default reducer;
