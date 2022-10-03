
// action types
export const ADD_MOVIE ='ADD_MOVIE';
export const ADD_TO_FAVOURITE ='ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE ='REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITES ='SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';       

// action creators
export function  addMovies(movies){
    return {
        type: ADD_MOVIE,
        movies
    }
}

export function  addFavourite(movie){
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}


export function  removeFavourite(movie){
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function  showFavourites(val){
    return {
        type: SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie){
    return {
        type : ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=aa535c4c&t=${movie}`;

    return function (dispatch) {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((movie) =>{
            console.log('movie',movie);
            dispatch(addMovieSearch(movie));
        })     
    }   
}


export function addMovieSearch(movie){
    return {
        type : ADD_SEARCH_RESULT,
        movie
    }
}