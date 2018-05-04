import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '..';
import './GlobalNav.css';

const GlobalNav = () => (
  <nav>
    <Link to="/">
      <Icon icon="home" color="turquoise" />
    </Link>
    <Link to="/add">
      <Icon icon="plus" color="#ff4379" />
    </Link>
    <Link to="/settings">
      <Icon icon="cog" color="orange" />
    </Link>
  </nav>
);

export default GlobalNav;
