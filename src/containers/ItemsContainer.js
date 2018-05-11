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
      user: { authenticated, data }
    } = this.props;
    const {
      items: { isFetching, allItems }
    } = this.props;

    return isFetching ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Items items={allItems} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ items, user }) => ({ items, user });

export default withRouter(connect(mapStateToProps)(ItemsContainer));
