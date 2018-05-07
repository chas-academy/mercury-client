import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '..';
import './GlobalNav.css';

const GlobalNav = () => (
  <nav className="navbar">
    <Link to="/">
      <Icon icon="home" />
    </Link>
    <Link to="/add">
      <Icon icon="plus" />
    </Link>
    <Link to="/settings">
      <Icon icon="cog" />
    </Link>
  </nav>
);

export default GlobalNav;
