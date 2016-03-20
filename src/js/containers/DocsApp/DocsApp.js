import './DocsApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subdivide, { reducer as subdivide } from 'subdivide';
import marktex from 'marktex';
//import mathjax from 'mathjax';

const ACTIVE = { color: 'red' }
/*
var txt = '**inline math**: $mr\omega^2 = F$, and math block. $$$ f(a) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)  }{z-a}dz $$$';

var options = {
  gfm: true,
  marktex: true,
  math: function(mathString, isInline, language){
            return isInline ? '<span class="mathjax">\\('+mathString+'\\)</span>'
            :'<div class="mathjax">\\['+mathString+'\\]</div>';
            }
};

var foo = 'test';

  
marktex(txt, options, function (err, content) {
  if (err) throw err;
  console.log(content);
  foo =content;
});
*/
class DocsApp extends Component {
 constructor(props, ctx) {
    super(props, ctx)
this.state = { url: '' }
  }


  render () {


    return (
      <div className="docsApp">
        <h1>Docs</h1>
    <ul>
          <li><Link      to="ab"           activeStyle={ACTIVE}>About</Link></li>
          <li><Link      to="fl"           activeStyle={ACTIVE}>FriendList</Link></li>
          <li><Link      to="md"           activeStyle={ACTIVE}>Mrkdown</Link></li>
     </ul>
      </div>
    );
  }
}

const ConnectedDocs = connect(
    state => ({ subdivide: state.subdivide })
)(Subdivide);

export {ConnectedDocs};
export {DocsApp};

