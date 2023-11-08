import * as constants from './constants';

const initialState = {
  loading: false,
  error: null,
  details: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.GET_PERSON_DETAILS:
      return { ...state };
    case constants.GET_PERSON_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_PERSON_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        error: null,
        loading: false,
      };
    case constants.GET_PERSON_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
        details: null,
      };
    case constants.PERSON_DETAILS_CLEAR_DATA:
      return {
        loading: true,
        details: null,
        error: null,
      };
    default:
      return state;
  }
};

const detailsLoading = (state) => state.personPageReducer.loading;
const detailsData = (state) => state.personPageReducer.details;
const detailsError = (state) => state.personPageReducer.error;

const selectors = {
  detailsLoading,
  detailsData,
  detailsError,
};

export { selectors };

export default reducer;
