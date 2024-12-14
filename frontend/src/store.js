import { configureStore } from '@reduxjs/toolkit';
import { initComponentReducer } from './pages/InitComponent';
import { homePageReducer } from './pages/HomePage';
import { mediaPageReducer } from './pages/MediaPage';

const store = configureStore({
  reducer: {
    initComponentReducer,
    homePageReducer,
    mediaPageReducer,
  },
});

export default store;
