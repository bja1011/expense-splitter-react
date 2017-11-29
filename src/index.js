import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import 'typeface-roboto'
import {Provider} from "react-redux";
import {createStore, compose, combineReducers} from "redux";
import userReducer from './store/reducers/user';
import expensesReducer from './store/reducers/expenses';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer,
  expenses: expensesReducer
});

const store = createStore(rootReducer,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
