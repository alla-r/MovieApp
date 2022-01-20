import { combineReducers } from 'redux';
import { homePageReducer } from './pages/HomePage';
import { detailsPageReducer } from './pages/DetailsPage';

export default combineReducers({
  homePageReducer,
  detailsPageReducer,
});
