import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies , showFavourites} from '../Actions';
// import {StoreContext} from '../index'
import Navbar from './Navbar';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data))
  }

  isMovieFavourite = (movie) =>{
    
    const {movies} = this.props;
    

    const index = movies.favourites.indexOf(movie);
    
    
    if(index !== -1) {
      //found movie
      return true;
    }
    return false;
  }
  onChangeTab =(val)=>{
    this.props.dispatch(showFavourites(val))
  }


  render() {
    console.log("render");
    const {movies} = this.props;
    const {list, favourites, showFavourites} = movies;

    const displayMovies = showFavourites? (favourites):(list)

    
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites? '':'active-tabs'}`} onClick={()=> this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites? 'active-tabs':''}`} onClick={()=> this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={`movie-${index}`} 
                // dispatch={this.props.dispatch}
                isFavorite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies To Show!</div> : null}
        </div>
      </div>
    );
  }
}


// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//           return(<App store={store}/>)
//         }}
//       </StoreContext.Consumer>
//     )
//   }
// }

// export default AppWrapper;
function mapStateToProps(state){
  return{
    movies : state.movies,
    search : state.search
  }
}


const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;