import { configureStore } from '@reduxjs/toolkit';
import { initComponentReducer } from './pages/InitComponent';
import { homePageReducer } from './pages/HomePage';

const store = configureStore({
  reducer: {
    initComponentReducer,
    homePageReducer,
  },
});

export default store;
