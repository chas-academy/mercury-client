import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon, Button } from '..';
import './ItemNav.css';

const ItemNav = () => (
  <nav className="navSteps">
    {/* <ReactCSSTransitionGroup
      transitionName="progressButtonChange"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    > */}
    <div>
      <p>namn</p>
      <Button color="primary" shape="round">
        <Icon icon="rocket" />
      </Button>
    </div>
    <div>
      <p>pris</p>
      <Button color="grey" shape="round">
        <Icon icon="rocket" />
      </Button>
    </div>
    <div>
      <p>mål</p>
      <Button color="grey" shape="round">
        <Icon icon="rocket" />
      </Button>
    </div>
    <div>
      <p>notiser</p>
      <Button color="grey" shape="round">
        <Icon icon="rocket" />
      </Button>
    </div>
    {/* </ReactCSSTransitionGroup> */}
  </nav>
);

export default ItemNav;
