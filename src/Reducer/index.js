import { ADD_MOVIE, ADD_FAVOURITE , } from "../Actions";


const initialMoviesState ={
    list:[],
    favourites:[],
}
export default function movies(state=initialMoviesState,action){
    // if(action.type === ADD_MOVIE){
    //     return {
    //         ...state,
    //         list: action.movies,
    //     };
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIE:
            return {
                ...state,
                list: action.movies,
            };

        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            };
        // case REMOVE_FAVOURITE:
        //     return {
        //         ...state,
        //         favourites: [action.movie, ...state.favourites]
        //     };
        default:
            return state;
    }
}
