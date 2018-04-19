// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Root from './containers/Root';

import './assets/styles/style.css';

const root = document.getElementById('root');

ReactDOM.render(
  <Root />,
  root: HTMLElement | null,
);

registerServiceWorker();
