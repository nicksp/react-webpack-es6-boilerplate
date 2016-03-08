import './DocsApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subdivide, { reducer as subdivide } from 'subdivide';


const ACTIVE = { color: 'red' }

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

class DocsApp extends Component {

  render () {


    return (
      <div className="docsApp">
        <h1>Docs</h1>
    <ul>
          <li><Link      to="ab"           activeStyle={ACTIVE}>About</Link></li>
          <li><Link      to="fl"           activeStyle={ACTIVE}>FriendList</Link></li>
     </ul>
      </div>
    );
  }
}
debugger;
const ConnectedDocs = connect(
    state => ({ subdivide: state.subdivide })
)(Subdivide);

export {ConnectedDocs};
export {DocsApp};
export {About};

