// import * as actions from './actions';
import * as constants from './constants';

const initialState = {
  currentPage: null,
  totalPages: null,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.GET_TRENDINGS_REQUEST: return {
      ...state,
      // currentPage: action.payload.page,
      // totalPages: action.payload.total_pages,
      // data: action.payload.results
    }
    case constants.GET_TRENDINGS_SUCCESS: return {
      ...state,
      currentPage: action.payload.page,
      totalPages: action.payload.total_pages,
      data: action.payload.results
    }
    case constants.GET_TRENDINGS_ERROR: return {
      ...state,
      error: action.payload.message
    }
    default: return state
  }
};

export default reducer;