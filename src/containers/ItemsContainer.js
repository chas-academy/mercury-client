import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchItems } from '../actions/items';
import { Items, Loader } from '../components';

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItems('items'));
  }

  render() {
    const {
      items: { isFetching, allItems },
    } = this.props;

    return isFetching ? <Loader /> : <Items items={allItems} />;
  }
}

const mapStateToProps = ({ items }) => ({ items });

export default withRouter(connect(mapStateToProps)(ItemsContainer));
