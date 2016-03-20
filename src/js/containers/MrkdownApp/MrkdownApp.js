import './MrkdownApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marktex from 'marktex';
import katex from 'katex';


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

function myFunc(err, content) {if (err) throw err;
  console.log(content);
  foo =content;}
  
marktex(txt, options, myFunc);

class Mrkdown extends Component {


  render() {
    return (
      <div>
        <h2>Markdown</h2>
        <div className="mrkdown" dangerouslySetInnerHTML={{__html: foo}}>
        </div>
      </div>
    )
  }
}

export default Mrkdown;

