import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';

const style = {
  fontSize: '5em',
  textAlign: 'center',
};

const Home = () => (
  <div>
    <h1 style={style}>Hem</h1>
    <ItemsContainer />
  </div>
);

export default Home;
