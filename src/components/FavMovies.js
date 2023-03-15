import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';

class FavMovieList extends Component{
  render(){
    return(
      <React.Fragment>
        <Link to="/">Atrás</Link>
        <h4>A minha lista</h4>
        <div>
            {this.props.fav.map( (movie, i) => {
              return <MovieItem movieData={movie} key={i} showButton={false}/>
            })}
          </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    fav: state.addToFav
  }
}

export default connect( mapStateToProps, null) (FavMovieList);