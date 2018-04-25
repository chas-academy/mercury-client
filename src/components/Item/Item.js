// @flow
import React, { Component } from 'react';
import './Item.css';
import ProgressBar from '../ProgressBar/ProgressBar';

class Item extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.toggleCard = this.toggleCard.bind(this);

    this.state = { isOpen: false };
  }

  toggleCard = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { item } = this.props;

    return (
      <div onClick={this.toggleCard}>
        {!this.state.isOpen ? (
          <article id={item.id}>
            <h2>{item.name}</h2>
            <p>
              Framsteg<br />
              <ProgressBar progressBarMax={100} progressBarCurrent={5} />
            </p>
          </article>
        ) : (
          <article id={item.id}>
            <h2>{item.name}</h2>
            <dl>
              <dt>Mål:</dt>
              <dd>{item.goal}</dd>
              <dt>Användningar:</dt>
              <dd>{item.delimiter}</dd>
              <dt>Inköpspris:</dt>
              <dd>{item.price}</dd>
            </dl>
            <p>
              Framsteg<br />
              <ProgressBar
                progressBarMax={item.goal}
                progressBarCurrent={item.delimiter}
              />
            </p>
          </article>
        )}
      </div>
    );
  }
}

export default Item;
