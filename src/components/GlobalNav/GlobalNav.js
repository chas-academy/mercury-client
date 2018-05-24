import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '..';
import './GlobalNav.css';

class GlobalNav extends Component {
  render() {
    if (this.props.isAuth.user.authenticated) {
      return (
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
    }
    return '';
  }
}

export default GlobalNav;
