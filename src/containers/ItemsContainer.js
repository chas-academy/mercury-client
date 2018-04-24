import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Items } from '../components';
import DUMMYDATA from '../DummyData';

class ItemsContainer extends Component {
  constructor(props) {
    super(props);

    this.data = DUMMYDATA;
  }

  render() {
    return <Items items={this.data} />;
  }
}

function mapStateToProps(state) {
  const { items } = state;
  return { items };
}

export default connect(mapStateToProps)(ItemsContainer);
