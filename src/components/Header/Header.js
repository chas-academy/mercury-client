import React from 'react';
import './Header.css';

const Header = ({ children, ...props }) => (
  <React.Fragment>
    <header role="banner">{children}</header>
  </React.Fragment>
);

export default Header;
