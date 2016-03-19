import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Router, browserHistory, hashHistory } from 'react-router';
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
      {routes}
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



class SComponent extends Component {
    render() {
        return (
            ComponentEl
        )
    }
    
}

const CComponent = connect(
    state => ({ subdivide: state.subdivide })
)(Subdivide);



// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <CComponent DefaultComponent={SComponent} />
  </Provider>,
  rootElement
);
