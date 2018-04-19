// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import rootReducer from '../reducers';
import { App } from '../components';

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));


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
