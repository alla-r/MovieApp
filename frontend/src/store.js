import { configureStore } from '@reduxjs/toolkit';
import { initComponentReducer } from './pages/InitComponent';
import { homePageReducer } from './pages/HomePage';
import { mediaPageReducer } from './pages/MediaPage';
import { detailsPageReducer } from './pages/DetailsPage';

const store = configureStore({
  reducer: {
    initComponentReducer,
    homePageReducer,
    mediaPageReducer,
    detailsPageReducer,
  },
});

export default store;
