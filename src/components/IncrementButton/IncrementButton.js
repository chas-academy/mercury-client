import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUsage } from '../../actions/items';

class IncrementButton extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { itemId } = this.props;

    this.props.addUsage(itemId);
    return false;
  }

  render() {
    return (
      <div className="btnGroup">
        <button onClick={this.handleSubmit}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  requestFullfilled: true,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addUsage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton);
