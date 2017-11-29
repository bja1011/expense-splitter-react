import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import 'typeface-roboto'
import {Provider} from "react-redux";
import reducer from './store/reducer';
import {createStore, compose} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
