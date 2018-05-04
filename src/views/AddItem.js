import React from 'react';
import { ItemNav } from '../components';
import { ItemNavInput } from '../components';

const style = {
  fontSize: '5em',
  textAlign: 'center'
};

const AddItem = () => (
  <div>
    <h1 style={style}>Lägg till Pryl</h1>
    <ItemNav />
    <ItemNavInput />
  </div>
);

export default AddItem;
