import React from 'react';
import { connect } from 'react-redux';

import { requestLogin, requestLogout } from '../../actions/user';
import { Icon, LineButton } from '../';
import './SettingsComponent.css';

const SettingsComponent = () => (
  <div className="settingsComponent">
    <Icon icon="cog" size="large" />
    <h3> Logga ut:</h3>
    <LineButton>Logga ut</LineButton>
    <h3> Tillkännagivanden:</h3>
    <a href="https://www.algolia.com/">
      <img alt="Algolia Logo" src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.png" />
    </a>
    <br /><br />
    Ikoner från <a href="https://fontawesome.com/">Font Awesome</a>
    <br /><br /><br />
  </div>
);

export default SettingsComponent;

