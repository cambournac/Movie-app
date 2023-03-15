import movies from './movies_reducers';
import addToFav from './fav_reducer';
import recentSearch from './recent_search_reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies,
  addToFav,
  recentSearch
})

export default rootReducer;