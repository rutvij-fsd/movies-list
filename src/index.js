import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';





import './index.css';
import App from './Components/App';
import rootReducer from './Reducer'

//function logger(obj,next,action)
//logger(obj)(next)(action)

// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       //middleware Code
//       console.log('ACTION_TYPE : ',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState})=> (next) => (action) =>{
  //logger Code
  //middleware Code
    console.log('ACTION_TYPE : ',action.type);
    next(action);
}



const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store', store);
// console.log('before state', store.getState());

//store.dispatch(addMovies(data));

// console.log('After state', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
    
  </React.StrictMode>
);

