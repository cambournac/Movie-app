export const MOVIES = 'MOVIES';
export const ADD_SEARCH_KEYWORD = 'ADD_SEARCH_KEYWORD';

export function movies(items){
  const action = {
    type: MOVIES,
    items
  }
  return action
}


export function addRecentSearch(keyword){
  debugger;
  return{
    type: ADD_SEARCH_KEYWORD,
    keyword
  }
}