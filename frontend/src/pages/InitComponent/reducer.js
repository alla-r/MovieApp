import * as constants from './constants';

const initialState = {
  modalConfig: null,
  isModalOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_MODAL:
      return {
        ...state,
        modalConfig: action.payload,
        isModalOpen: true,
      };
    case constants.HIDE_MODAL:
      return {
        ...state,
        modalConfig: null,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

const isModalOpen = (state) => state.initComponentReducer.isModalOpen;
const modalConfig = (state) => state.initComponentReducer.modalConfig;

const selectors = {
  modalConfig,
  isModalOpen,
};

export { selectors };

export default reducer;
