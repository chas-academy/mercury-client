import React from 'react';
import { Box, LogOut } from '..';
import './SettingsComponent.css';

const SettingsComponent = () => (
  <React.Fragment>
    <Box customClass="column settings-card">
      <LogOut />
      <Box variant="card" display="flex">
        <section className="attribution">
          <h2>Tillkännagivanden</h2>
          <a href="https://www.algolia.com/">
            <img
              alt="Algolia Logo"
              src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.png"
            />
          </a>

          <a href="https://fontawesome.com/">Ikoner från Font Awesome</a>
        </section>
      </Box>
    </Box>
  </React.Fragment>
);

export default SettingsComponent;
