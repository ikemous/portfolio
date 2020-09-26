import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import allReducers from './utils/reducers';
import { Provider } from "react-redux";
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

//create store
const store = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
