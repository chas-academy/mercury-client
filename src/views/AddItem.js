import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ItemNav, ItemNavInput, PageTitle } from '../components';

const AddItem = () => (
  <div>
    <PageTitle title="lägg till en pryl" />
    <ItemNav />
    <ItemNavInput />
  </div>
);

export default AddItem;
