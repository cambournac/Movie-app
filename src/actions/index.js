export const MOVIES = 'MOVIES';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ADD_SEARCH_KEYWORD = 'ADD_SEARCH_KEYWORD';

export function movies(items){
  const action = {
    type: MOVIES,
    items
  }
  return action
}

export function addToFav(movie){
  return {
    type: ADD_FAV,
    movie
  }
}

export function removeFromFav(movie){
  return{
    type: REMOVE_FAV,
    movie
  }
}


export function addRecentSearch(keyword){
  debugger;
  return{
    type: ADD_SEARCH_KEYWORD,
    keyword
  }
}