// @flow
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const App = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/add">Add item</Link>
    </li>
    <li>
      <Link to="/settings">Settings</Link>
    </li>
  </ul>
);

export default App;
