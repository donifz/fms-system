import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import combined from "./redux"
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom"
import thunk from 'redux-thunk';
import {history} from "./helpers/_history"

let store = createStore(combined, applyMiddleware(thunk))
window.store = store
ReactDOM.render(
  <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

