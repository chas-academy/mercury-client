import React from 'react';
import { PageTitle, Card } from '../components';

const Settings = () => (
  <React.Fragment>
    <PageTitle title="inställningar" />
    <Card variant="circle">
      <h4>h4!</h4>
    </Card>
    <Card>
      <h2>boxy</h2>
      <h4>h4 in Card with class box & card</h4>
    </Card>
  </React.Fragment>
);
export default Settings;
