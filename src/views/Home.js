import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';

const style = {
  fontSize: '2em',
  textAlign: 'center',
  marginTop: '1.6em',
};

const Home = () => (
  <div>
    <h1 style={style}>PRYLAR</h1>
    <ItemsContainer />
  </div>
);

export default Home;
