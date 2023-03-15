import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MoviesResults from './MoviesResults';
import MoviesDetails from './MovieDetails';
import NoMatch from './notFoundPage';
import RecentSearch from './RecentSearch';

class App extends Component {
  render() {
    return (
      
        <Router>
         
          <div>
            <div className="container">
              <div className="row ">
                <div className="jumbotron text-center">
                  
                    <h1 className="display-3">Filmes</h1>
                </div>
              </div>
              <div className="row">
                <Switch>
                
                  <Route path="/" exact component={MoviesResults}></Route>
                  <Route path="/recentSearch" exact component={RecentSearch}></Route>
                  <Route path="/movieDetails" exact component={MoviesDetails}></Route>
                  <Route component={NoMatch} />
               </Switch>
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
