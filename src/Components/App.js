import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies , showFavourites} from '../Actions';
import {StoreContext} from '../index'
import NavbarWrapper from "./Navbar";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //Make Api Call here
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    //Dispatch actions here
    // store.dispatch({
    //   type: "ADD_MOVIE",
    //   movies: data,
    // });
    this.props.store.dispatch(addMovies(data));


    
  }

  isMovieFavourite = (movie) =>{
    
    const {movies} = this.props.store.getState();
    

    const index = movies.favourites.indexOf(movie);
    
    
    if(index !== -1) {
      //found movie
      return true;
    }
    return false;
  }
  onChangeTab =(val)=>{
    this.props.store.dispatch(showFavourites(val))
  }


  render() {
    console.log("render");
    const {movies} = this.props.store.getState();
    const {list, favourites, showFavourites} = movies;

    const displayMovies = showFavourites? (favourites):(list)

    
    return (
      <div className="App">
        <NavbarWrapper/>
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
                dispatch={this.props.store.dispatch}
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


class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          return(<App store={store}/>)
        }}
      </StoreContext.Consumer>
    )
  }
}

export default AppWrapper;
