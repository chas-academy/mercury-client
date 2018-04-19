// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers';
import App from './components/App';
import AddItem from './components/Views/AddItem';
import Settings from './components/Views/Settings';
import './index.css';

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/add" component={AddItem} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  </Provider>,
  app: HTMLElement | null,
);

registerServiceWorker();
