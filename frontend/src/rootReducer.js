import { combineReducers } from 'redux';
import { homePageReducer } from './pages/HomePage';
import { detailsPageReducer } from './pages/DetailsPage';
import { mediaPageReducer } from './pages/MediaPage';

export default combineReducers({
  homePageReducer,
  detailsPageReducer,
  mediaPageReducer,
});
