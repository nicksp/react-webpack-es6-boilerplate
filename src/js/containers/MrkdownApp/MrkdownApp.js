import './MrkdownApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { marktex } from 'marktex';
//import Subdivide, { reducer as subdivide } from 'subdivide';


const ACTIVE = { color: 'red' }

var txt = '**fuck markdown**';

var options = {
  gfm: true,
  marktex: true,
  math: function(mathString, isInline, language){
            return isInline ? '<span class="mathjax">\\('+mathString+'\\)</span>'
            :'<div class="mathjax">\\['+mathString+'\\]</div>';
            }
};

var foo = 'test';



class Mrkdown extends Component {


  render() {
    return (
      <div>     
        <p>Stuff is going here.</p>
      </div>
    )
  }
}

//marktex('**fuck markdown**'); 

export default Mrkdown;

