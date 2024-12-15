import { configureStore } from '@reduxjs/toolkit';
import { initComponentReducer } from './pages/InitComponent';
import { homePageReducer } from './pages/HomePage';
import { mediaPageReducer } from './pages/MediaPage';
import { detailsPageReducer } from './pages/DetailsPage';
import { listPageReducer } from './pages/ListPage';
import { loginPageReducer } from './pages/LoginPage';
import { personPageReducer } from './pages/PersonPage';
import { searchPageReducer } from './pages/SearchPage';

const store = configureStore({
  reducer: {
    initComponentReducer,
    homePageReducer,
    mediaPageReducer,
    detailsPageReducer,
    listPageReducer,
    loginPageReducer,
    personPageReducer,
    searchPageReducer,
  },
});

export default store;
