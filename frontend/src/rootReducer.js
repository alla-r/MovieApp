import { combineReducers } from 'redux';
import { homePageReducer } from './pages/HomePage';
import { detailsPageReducer } from './pages/DetailsPage';
import { mediaPageReducer } from './pages/MediaPage';
import { listPageReducer } from './pages/ListPage';
import { initComponentReducer } from './pages/InitComponent';
import { searchPageReducer } from './pages/SearchPage';

export default combineReducers({
  initComponentReducer,
  homePageReducer,
  detailsPageReducer,
  mediaPageReducer,
  listPageReducer,
  searchPageReducer,
});
