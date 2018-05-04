import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ItemNav } from '../components';
import { ItemNavInput } from '../components';

const style = {
  fontSize: '2em',
  textAlign: 'center',
  marginTop: '1.6em',
};

const AddItem = () => (
  <div>
    <h1 style={style}>Lägg till Pryl</h1>
    <ItemNav />
    <ItemNavInput />
  </div>
);

export default AddItem;
