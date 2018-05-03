import React from 'react';
import { Icon, Button } from '..';
import './ItemNav.css';

const ItemNav = () => (
  <div>
    <nav>
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
    </nav>
  </div>
);

export default ItemNav;
