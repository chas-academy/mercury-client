import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CustomLink, AuthNavLink } from '../../../Lib/Common/Views';
import SignOutButton from '../../../Redux/Containers/Sessions/SignOutButton';

class NavBar extends Component {
  render() {
    const path = this.props.match.path;
    const referrer = window.location.pathname;
    return (
      <nav>
        <CustomLink title="Redux" to="/redux" path={path} />
        <CustomLink title="Sign In" to="/sign-in" path={path} isSignedOut />
        <AuthNavLink title="Admin" to="/admin/dashboard" />
        <AuthNavLink title="My Stuff" to="/my-profile" path={path} />
        <SignOutButton referrer={referrer} />
      </nav>
    );
  }
}

export default withRouter(NavBar);
