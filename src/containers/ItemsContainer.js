import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchItems, addUsage, removeUsage } from '../actions/items';
import { Items, Loader, Welcome } from '../components';

class ItemsContainer extends Component {
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  handleIncrement(itemId) {
    this.props.dispatch(addUsage(itemId));
  }

  handleDecrement(itemId) {
    this.props.dispatch(removeUsage(itemId));
  }

  render() {
    const {
      user: { fetchingUser },
      items: { isFetching, allItems }
    } = this.props;

    return isFetching || fetchingUser ? (
      <Loader />
    ) : (
        <React.Fragment>
          {
            allItems.length > 0 ?
              <Items
                items={allItems}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
              />
              :
              <Welcome />
          }
        </React.Fragment>
      );
  }
}

const mapStateToProps = ({ items, user }) => ({ items, user });

export default withRouter(connect(mapStateToProps)(ItemsContainer));
