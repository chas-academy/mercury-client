import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '..';
import './GlobalNav.css';


const GlobalNav = () => (
  <nav>
    <Link to="/">
      <Icon icon="home" color="turquoise" />
    </Link>
    <Link to="/add">
      <Icon icon="plus" color="indianred" />
    </Link>
    <Link to="/settings">
      <Icon icon="cog" color="goldenrod" />
    </Link>
  </nav>
);

export default GlobalNav;
