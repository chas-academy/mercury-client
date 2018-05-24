import React, { Component } from 'react';
import { Box, LogOut } from '..';
import './SettingsComponent.css';

class SettingsComponent extends Component {

  componentDidMount() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #f2994a, #ffa496, #ffbfd5, #fae0f7, #fbfbfb)';
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
  }

  render() {
    return (
      <React.Fragment>
        <Box display="flex column" customClass="settings-card">
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
    )
  }
}

export default SettingsComponent;
