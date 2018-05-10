// @flow
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';
import { App } from '../components';
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from '../auth/localStorage';

/* 1. In `./localStorage` you'll find notes on how persistedState gets its value */
/* 2. Function that listens on changes of the store's state. When something  */
/*    changes in the state tree, it will call saveStateToLocalStorage */
/*    with the current state as an argument */

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const persistedState = loadStateFromLocalStorage(); /* 1 */

const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  // saveStateToLocalStorage(store.getState());
  console.log(store.getState());
}); /* 2 */

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
