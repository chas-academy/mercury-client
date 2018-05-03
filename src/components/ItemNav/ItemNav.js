import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Icon, Button } from '..';
import './ItemNav.css';

const ItemNav = () => (
  <nav>
    <ReactCSSTransitionGroup
      transitionName="progressButtonChange"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      <div>
        <p>namn</p>
        <Button color="primary">
          <Icon icon="rocket" color="pink" />
        </Button>
      </div>
      <div>
        <p>pris</p>
        <Button>
          <Icon icon="rocket" color="pink" />
        </Button>
      </div>
      <div>
        <p>mål</p>
        <Button>
          <Icon icon="rocket" color="pink" />
        </Button>
      </div>
      <div>
        <p>notiser</p>
        <Button>
          <Icon icon="rocket" color="pink" />
        </Button>
      </div>
    </ReactCSSTransitionGroup>
  </nav>
);

export default ItemNav;
