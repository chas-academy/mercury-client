import React, { Component } from 'react';
import { Box, LogOut, Icon } from '..';
import './SettingsComponent.css';

class SettingsComponent extends Component {

  componentDidMount() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #f2994a, #f38f53, #f2855c, #ef7c65, #e9756e)';
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
  }

  render() {
    return (
      <React.Fragment>
        <Box display="flex column" customClass="settings-card">
          <Box variant="card" display="flex">
            <section className="attribution">
              <h1 className="logo">Worth It</h1>
              <a href="https://fontawesome.com/">
                <h3>Fonts by FontAwesome</h3>
              </a>            
              <a href="https://www.algolia.com/">
                <img
                  alt="Search by Algolia"
                  src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.png"
                />
              </a>
            <a href="https://github.com/chas-academy/mercury-client">App by Mercury - 2018</a>                            
            <LogOut />
            </section>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}

export default SettingsComponent;
