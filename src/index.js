import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';





import './index.css';
import App from './Components/App';
import rootReducer from './Reducer'


const store = createStore(rootReducer);
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

