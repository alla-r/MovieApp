import * as constants from './constants';

const initialState = {
  loading: false,
  isSuccess: false,
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.LOGIN_USER:
    case constants.REGISTER_USER:
      return { ...state };
    case constants.LOGIN_USER_REQUEST:
    case constants.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.LOGIN_USER_SUCCESS:
    case constants.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isSuccess: !!action.payload,
        error: null,
        loading: false,
      };
    case constants.LOGIN_USER_ERROR:
    case constants.REGISTER_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isSuccess: false,
        loading: false,
      };
    default:
      return state;
  }
};

const loading = (state) => state.loginPageReducer.loading;
const success = (state) => state.loginPageReducer.isSuccess;
const error = (state) => state.loginPageReducer.error;

const selectors = {
  loading,
  success,
  error,
};

export { selectors };

export default reducer;
