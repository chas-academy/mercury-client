import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';
import { PageTitle, Header } from '../components';

const Home = () => (
  <React.Fragment>
    <Header>
      <PageTitle title="mina prylar" />
    </Header>
    <main>
      <section className="content">
        <ItemsContainer />
      </section>
    </main>
  </React.Fragment>
);

export default Home;
