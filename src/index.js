// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Root from './containers/Root';

const root: any = document.getElementById('root');

ReactDOM.render(<Root />, root);

registerServiceWorker();
