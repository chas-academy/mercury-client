import React from 'react';
import { Box, LogOut } from '../';
import { Link } from 'react-router-dom';
import './SettingsComponent.css';

const SettingsComponent = () => (
  <React.Fragment>
    <Box>
      <Box variant="card">
        <div className="attribution">
          <h2>Tillkännagivanden</h2>
          <a href="https://www.algolia.com/">
            <img
              alt="Algolia Logo"
              src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.png"
            />
          </a>

          <a href="https://fontawesome.com/">Ikoner från Font Awesome</a>
        </div>
      </Box>
      <LogOut />
    </Box>
  </React.Fragment>
);

export default SettingsComponent;
