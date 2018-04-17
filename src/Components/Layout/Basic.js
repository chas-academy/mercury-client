import React, { Component } from 'react';
import Footer from './Basic/Footer';
import NavBar from './Basic/NavBar';

export default class Basic extends Component {
  render() {
    return (
      <div className="layout">
        <NavBar />
        <main className="container">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
