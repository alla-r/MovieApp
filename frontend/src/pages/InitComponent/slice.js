/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalConfig: null,
  isModalOpen: false,
};

const initComponentSlice = createSlice({
  name: 'initComponent',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.modalConfig = action.payload;
      state.isModalOpen = true;
    },
    hideModal: (state) => {
      state.modalConfig = null;
      state.isModalOpen = false;
    },
  },
});

const isModalOpen = (state) => state.initComponentReducer.isModalOpen;
const modalConfig = (state) => state.initComponentReducer.modalConfig;

const selectors = {
  modalConfig,
  isModalOpen,
};

export { selectors };

export const initActions = initComponentSlice.actions;
export default initComponentSlice.reducer;
