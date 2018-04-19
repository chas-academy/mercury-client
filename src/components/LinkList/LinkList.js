// this is a temporary component!
// remove it when we have a better navbar

import React from 'react';
import { Link } from 'react-router-dom';

const LinkList = () => (
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

export default LinkList;
