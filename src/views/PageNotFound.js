import React from 'react';
import { PageTitle, Header } from '../components';

const PageNotFound = () => (
  <React.Fragment>
    <Header>
      <PageTitle title="ingenting" />
    </Header>
    <main>
      <section className="content">
        <h2>Hoppsan, den sidan verkar inte finnas (404)</h2>
      </section>
    </main>
  </React.Fragment>
);

export default PageNotFound;
