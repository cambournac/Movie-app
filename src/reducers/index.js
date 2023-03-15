import movies from './movies_reducers';
import recentSearch from './recent_search_reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies,
  recentSearch
})

export default rootReducer;