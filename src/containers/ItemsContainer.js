import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchItems, addUsage } from '../actions/items';
import { Items, Loader } from '../components';

class ItemsContainer extends Component {
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  handleIncrement(itemId) {
    this.props.dispatch(addUsage(itemId));
  }

  render() {
    const {
      user: { fetchingUser },
      items: { isFetching, allItems },
    } = this.props;

    return isFetching || fetchingUser ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Items items={allItems} handleIncrement={this.handleIncrement} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ items, user }) => ({ items, user });

export default withRouter(connect(mapStateToProps)(ItemsContainer));
