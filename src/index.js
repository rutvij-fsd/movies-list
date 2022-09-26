import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';


import './index.css';
import App from './Components/App';
import movies from './Reducer'


const store = createStore(movies);
console.log('store', store);
console.log('before state', store.getState());

store.dispatch({
  type: 'ADD_MOVIE',
  movies:[{name:'Superman'}]
});

console.log('After state', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

