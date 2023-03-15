import { ADD_SEARCH_KEYWORD } from '../actions';

function recentSearch(state = [], action){
  switch(action.type){
    case ADD_SEARCH_KEYWORD:
      let recentSearch = [...state, action.keyword];
      return recentSearch;
    default:
      return state
  }
}

export default recentSearch;