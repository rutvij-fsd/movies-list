import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies } from '../Actions';

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


    

    //console.log("State", this.props.store.getState());
  }

  isMovieFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();
    console.log('favourites',favourites);
    

    const index = favourites.indexOf(movie);
    
    console.log('index',index);
    if(index !== -1) {
      //found movie
      return true;
    }
    return false;
  }


  render() {
    console.log("render", this.props);
    const {list} = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={`movie-${index}`} 
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
