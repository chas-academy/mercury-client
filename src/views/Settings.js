import React from 'react';
import { PageTitle, SettingsComponent, Header } from '../components';

const Settings = () => (
  <React.Fragment>
    <Header>
      <PageTitle title="inställningar" />
    </Header>
    <main className="content">
      <SettingsComponent />
    </main>
  </React.Fragment>
);

export default Settings;
