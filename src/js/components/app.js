import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="page-container">
        {this.props.children}
      </div>
    );
  }
}
