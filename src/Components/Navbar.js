import React from 'react'
// import {data} from '../data';
import { addMovieToList, handleMovieSearch } from '../Actions';
// import {StoreContext} from '../index'
import {connect} from 'react-redux';

class Navbar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      //showSearchResults: true,
      searchText : ''
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    // this.setState({
    //   showSearchResults: false,
    // });
  };
  handleSearch = () => {
    const {searchText} = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value      
    })
  };

  render() {
    const {result : movie, showSearchResults} = this.props.search;

    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange}/>
          <button id='search-btn' onClick={this.handleSearch}>Search</button>

                    {
                        showSearchResults && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={movie.Poster} alt={'Movie Poster'} />
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


// class NavbarWrapper extends React.Component{
//   render(){
//       return(
//           <StoreContext.Consumer>
//               {
//                   (store) =>{
//                       return(<Navbar store={store} />)
//                   }
//               }
//           </StoreContext.Consumer>
//       )
//   }
// }
// export default NavbarWrapper;

function mapStateToProps(state){
  return{
    search : state.search
  }
}


const connectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default connectedNavbarComponent;