import { ADD_FAV, REMOVE_FAV } from '../actions';

function addToFav(state = [], action){
  switch(action.type){
    case ADD_FAV:
      let favMovies = [...state, action.movie];
      return favMovies;
    case REMOVE_FAV:
      favMovies = state.filter(item => item.id !== action.movie.id );
      return favMovies
    default:
      return state
  }
}

export default addToFav;