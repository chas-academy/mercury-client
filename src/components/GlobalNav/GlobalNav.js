import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '..';
import './GlobalNav.css';

const GlobalNav = ({ active }: { active: string }) => (
  <nav className="navbar">
    <NavLink to="/" activeClassName="home" exact>
      <Icon icon="items" />
    </NavLink>
    <NavLink to="/add" activeClassName="add">
      <Icon icon="plus" />
    </NavLink>
    <NavLink to="/settings" activeClassName="settings">
      <Icon icon="cog" />
    </NavLink>
  </nav>
);

export default GlobalNav;
