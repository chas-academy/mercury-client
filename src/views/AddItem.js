import React from 'react';
import { ItemNav, Input } from '../components';

const style = {
  fontSize: '5em',
  textAlign: 'center',
};

const AddItem = () => (
  <div>
    <h1 style={style}>Lägg till Pryl</h1>
    <ItemNav />
    <Input />
  </div>
);

export default AddItem;
