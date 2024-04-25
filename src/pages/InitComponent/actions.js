import * as constants from './constants';

export const showModal = (modalConfig) => ({
  type: constants.SHOW_MODAL,
  payload: modalConfig,
});

export const hideModal = (modalConfig) => ({
  type: constants.HIDE_MODAL,
  payload: modalConfig,
});
