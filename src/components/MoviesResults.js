import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from './Search';
import MovieItem from './MovieItem';

class MoviesResults extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="fav-row"> 
            <p></p>
            <Link to="/recentSearch">Procura Recente</Link>
            </div>
          <Search />
          <div className="col-container">
            {this.props.movies.map( (item, i) => {
              return <MovieItem movieData={item} key={i} showButton={true}/>
            })}
          </div>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state){
  return{
    movies: state.movies
  }
}
export default connect(mapStateToProps, null) (MoviesResults);
