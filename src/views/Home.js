import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';
import { PageTitle } from '../components';

const Home = () => (
  <React.Fragment>
    <PageTitle title="mina prylar" />
    <ItemsContainer />
  </React.Fragment>
);

export default Home;
