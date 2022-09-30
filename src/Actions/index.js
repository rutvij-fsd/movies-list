
// action types
export const ADD_MOVIE ='ADD_MOVIE';
export const ADD_TO_FAVOURITE ='ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE ='REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITES ='SHOW_FAVOURITES';


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