import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/items';
import { Items } from '../components';

class ItemsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchData('items'));
  }

  render() {
    const { itemReducer: { isFetching, items } } = this.props;

    return (
      isFetching ? <p>Loading...</p> : <Items items={items} />
    );
  }
}

const mapStateToProps = ({ itemReducer }) => ({ itemReducer });

export default connect(mapStateToProps)(ItemsContainer);
