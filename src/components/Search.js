import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import { API_KEY } from '../secrets';
import { movies, addRecentSearch } from '../actions';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }

  search(e){
    e.preventDefault();

    this.props.addRecentSearch(this.state.query)

    let SearchKeyword = this.state.query
    let URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${SearchKeyword}`;

    var loader = document.querySelector('.loader');
    loader.classList.remove('hide');
    fetch(URL,{
      method: 'GET'
    })
    .then(res => res.json())
    .then(jsonObj => {
      this.props.movies(jsonObj.results);
      loader.classList.add('hide');
    })
  }

  render() {
    return (
      <Form onSubmit={ e => { this.search(e);}}>
        <div className='loader hide'></div>
        <div className="form-inline" >
          <FormGroup>
            <ControlLabel>Procurar:</ControlLabel>
            { ' ' }
            <FormControl type="text" ref="search" placeholder="Procurar Filmes" onChange={ (e)=> this.setState({query: e.target.value}) }></FormControl>
            { ' ' }
            <Button bsStyle="success" onClick={ (e)=> this.search(e)}>Procurar</Button>
          </FormGroup>
        </div>
      </Form>
    );
  }
}



export default connect(null, { movies, addRecentSearch } )(Search);