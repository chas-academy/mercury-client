import React from 'react';
import { Card, LogOut } from '../';
import './SettingsComponent.css';

const SettingsComponent = () => (
  <Card>
    <LogOut />

    <h2>Tillkännagivanden</h2>
    <a href="https://www.algolia.com/">
      <img
        alt="Algolia Logo"
        src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.png"
      />
    </a>
    <a href="https://fontawesome.com/">Ikoner från Font Awesome</a>
  </Card>
);

export default SettingsComponent;
