// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AUTH } from './Redux/Actions/Sessions/Types';
import reducers from './Redux/Reducers';
import Routes from './Components/Routes';
import registerServiceWorker from './registerServiceWorker';
import './Assets/Styles/Style.css';
// eslint-disable-next-line no-use-before-define
const composeEnhancers = initReduxDevTools();
const appReducer = combineReducers(reducers);
const rootReducer = (state, action) => {
  if (action.type === AUTH) { state = undefined; }

  return appReducer(state, action);
};
const middleware = typeof (composeEnhancers) === 'function' ? composeEnhancers(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

const app: any = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  app,
);

registerServiceWorker();

function initReduxDevTools() {
  // eslint-disable-next-line
  return process.env.NODE_ENV === 'development' ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ : null;
}
