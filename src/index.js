// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);

registerServiceWorker();
