import React  from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';





import './index.css';
import App from './Components/App';
import rootReducer from './Reducer'
// import AppWrapper from './Components/App';

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
  if(typeof action !== 'function'){
    console.log('ACTION_TYPE : ',action.type);
  }
    next(action);
}

// Using redux-thunk package so below function is commented
// const thunk = ({dispatch, getState})=> (next) => (action) =>{
//   //middleware Code
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }



const store = createStore(rootReducer, applyMiddleware(logger,thunk));
console.log('store', store);

// export const StoreContext = createContext();

// class Provider extends React.Component {

//   render() {
//     const{store}=this.props;
//     return <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

