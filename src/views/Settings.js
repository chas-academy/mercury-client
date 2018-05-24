import React from 'react';
import { PageTitle, SettingsComponent, Header } from '../components';

const Settings = () => (
  <React.Fragment>
    <Header>
      <PageTitle title="inställningar" />
    </Header>
    <main className='settings-view'>
      <section className="content">
        <SettingsComponent />
      </section>
    </main>
  </React.Fragment>
);

export default Settings;
