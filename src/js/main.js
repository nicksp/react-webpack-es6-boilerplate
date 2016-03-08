import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import Subdivide, { reducer as subdivide } from 'subdivide';
import { connect } from 'react-redux';


import routes from './routes';

const store = configureStore();
const rootElement = document.getElementById('app');

let ComponentEl;

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('./containers/DevTools').default;

  // If using routes
  ComponentEl = (
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  );
} else {
  ComponentEl = (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
}

debugger;

class SComponent extends Component {
    render() {
        return (
            {ComponentEl}
        )
    }
    
}

const CComponent = connect(
    state => ({ subdivide: state.subdivide })
)(Subdivide);

debugger;

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    {ComponentEl}
  </Provider>,
  rootElement
);
