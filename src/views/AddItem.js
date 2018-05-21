import React from 'react';
import { AddItemWizard, PageTitle, Header } from '../components';

const AddItem = () => (
  <React.Fragment>
    <Header>
      <PageTitle title="lägg till en pryl" />
    </Header>
    <main className="content">
      <AddItemWizard />
    </main>
  </React.Fragment>
);

export default AddItem;
