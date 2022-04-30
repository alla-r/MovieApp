import { combineReducers } from 'redux';
import { homePageReducer } from './pages/HomePage';
import { detailsPageReducer } from './pages/DetailsPage';
import { mediaPageReducer } from './pages/MediaPage';
import { listPageReducer } from './pages/ListPage';

export default combineReducers({
  homePageReducer,
  detailsPageReducer,
  mediaPageReducer,
  listPageReducer,
});
