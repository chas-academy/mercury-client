import React from 'react';
import { PageTitle, SettingsComponent, LogOut } from '../components';

const Settings = () => (
  <React.Fragment>
    <PageTitle title="inställningar" />
    <SettingsComponent />
    <LogOut />
  </React.Fragment>
);

export default Settings;
