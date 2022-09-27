import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //Make Api Call here
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    //Dispatch actions here
    store.dispatch({
      type: "ADD_MOVIE",
      movies: data,
    });

    console.log("State", this.props.store.getState());
  }
  render() {
    console.log("render");
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
