import './AboutApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



const ACTIVE = { color: 'red' }

class About extends Component {

  render() {
    return (
      <div className="AboutApp">
        <h2>About</h2>
        <p>Non-information goes here.</p>
      </div>
    )
  }
}

export default About;

