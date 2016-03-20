import './AboutApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import Subdivide, { reducer as subdivide } from 'subdivide';


const ACTIVE = { color: 'red' }

class About extends Component {
// <div className="AboutApp"> 

  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Non-information goes here.</p>
      </div>
    )
  }
}

export default About;

