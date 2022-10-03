import React from 'react'
// import {data} from '../data';
import { addMovieToList, handleMovieSearch } from '../Actions';

class Navbar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      //showSearchResults: true,
      searchText : ''
    };
  }

  handleAddToMovies = (movie) => {
    this.props.store.dispatch(addMovieToList(movie));
    // this.setState({
    //   showSearchResults: false,
    // });
  };
  handleSearch = () => {
    const {searchText} = this.state;

    this.props.store.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value      
    })
  };

  render() {
    const {result : movie, showSearchResults} = this.props.store.getState().search;

    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange}/>
          <button id='search-btn' onClick={this.handleSearch}>Search</button>

                    {
                        showSearchResults && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={movie.Poster} />
                                <div className='movie-info'>
                                    <span>{movie.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(movie)}>Add To Movies</button>
                                </div>
                            </div>
                        </div>
                    }
        </div>
      </div>
    );
  }
}

export default Navbar