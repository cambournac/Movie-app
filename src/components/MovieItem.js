import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addToFav, removeFromFav } from '../actions';

const URLCOMPONENT = 'https://image.tmdb.org/t/p/w342';
const MovieURL = "/movieDetails?movieID:";

class MovieItem extends Component{
  constructor(props){
    super(props);
    this.state={
      fav: false
    }
  }

  showImg(img){
    if(img) {
      return URLCOMPONENT+img
    }else{
      return 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    }
  }

  displayFav(){
    if(!this.state.fav){
      return (
      <span className="glyphicon glyphicon-heart-empty fav" aria-hidden="true" 
      onClick={ () =>{ this.addtoFavourite() } }></span>
      )
    }else{
      return <span className="glyphicon glyphicon-heart fav" aria-hidden="true" onClick={ () =>{ this.removeFromFav() } }  ></span>
    }
  }

 
  render(){
    const movie = this.props.movieData;
    return(
      <div className="col-sm-12 col-sm-3 col">
        <div className="thumbnail">
        <a  href={MovieURL+movie.id}> <img src={this.showImg(movie.poster_path)} alt={movie.title} /> </a>
          <div className="caption">
            <h3>{movie.title}</h3>
            <div className="movie-desc">
              <p>{movie.overview}</p>
            </div>
            <p>Data de lançamento: {movie.release_date}</p>
            <p>Ratings : <span className="badge badge-default">  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>{movie.vote_average}</span></p>
            <a className="successBtn"  href={MovieURL+movie.id}>Detalhes</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(MovieItem);