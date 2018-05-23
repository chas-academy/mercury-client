import React from 'react';

import { LogInForm, PageTitle, Header } from '../components';

const LogIn = () => (
  <React.Fragment>
    <Header>
      <PageTitle title="logga in" />
    </Header>
    <main>
      <section className="content">
        <LogInForm />
      </section>
    </main>
  </React.Fragment>
);

export default LogIn;
