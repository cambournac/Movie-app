import React, {Component} from 'react';
import { API_KEY } from '../secrets';

const URLCOMPONENT = 'https://image.tmdb.org/t/p/w342';

class MovieDetails extends Component{
  constructor(props){
    super(props);

    
    this.state = {
      movieID : this.props.location.search.split(':')[1],
      singleMovieDetails: [],
      dataUpdated: false
    }
    
  }

  componentDidMount(){

    this.getData();
  }

  getData(){
    let URL = `https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=${API_KEY}&append_to_response=credits`;

    var loader = document.querySelector('.loader');
    loader.classList.remove('hide');

    fetch(URL,{
      method: 'GET'
    })
    .then(res => res.json())
    .then(jsonObj => {
      this.setState({
        singleMovieDetails : jsonObj,
        dataUpdated: true
      });
      loader.classList.add('hide');
    })
  }

  showImg(img){
    if(img) {
      return URLCOMPONENT+img
    }else{
      return 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    }
  }

  renderCast(data){
    var castObj = [];
    var that = this;
    if(this.state.dataUpdated){
      data.credits.cast.map( (record, i)=> {
         castObj.push(<div className="record" key={i}>
         <img className="imgDes" alt={record.profile_path} src={that.showImg(record.profile_path)} />
         <br />
         <strong>{record.name}</strong> As {record.character}</div>)
      })

      return castObj
    }
  }

  
  renderCrew(data){
    var castCrew = []
    if(this.state.dataUpdated){
      data.credits.crew.map( (record, i)=> {
         castCrew.push(<li key={i}>{record.name} was <strong>{record.job}</strong> </li>)
      })

      return castCrew
    }
  }

  render(){
    var data = this.state.singleMovieDetails;
    return(
      <div className="content">
        <div className='loader hide'></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb40 text-center">
                <h1><a className="back" href="/">Atrás</a>{data.original_title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12 col-12">
                <h3>Elenco</h3>
                  {this.renderCast(data)}
              </div>
              <div className="col-md-3 col-sm-12 col-12">
                <h3>Data de Lançamento</h3>
                <ul>
                  {data.release_date}
                </ul>
              </div>
              <div className="col-md-3 col-sm-12 col-12">
                <h3>Produção</h3>
                <ul>
                  {this.renderCrew(data)}
                </ul>
              </div>
              <div className="col-md-3 col-sm-12 col-12">
                <h3>Sinopse</h3>
                <p>
                  {data.overview}
                </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails;