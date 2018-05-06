import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ItemNav, ItemNavInput, PageTitle } from '../components';

const AddItem = () => (
  <React.Fragment>
    <PageTitle title="lägg till en pryl" />
    <ItemNav />
    <ItemNavInput />
  </React.Fragment>
);

export default AddItem;
