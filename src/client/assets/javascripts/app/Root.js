// @flow

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { SENTRY_URL } from './config';
import  App  from './App';

// With react router v4 and redux there is no need
// for react-router-redux since it your components
// are more declarative, you can dispatch events
// on one of the component lifecycle methods that 
// make sense for the component see these: 
// https://github.com/ReactTraining/react-router/issues/3854#issuecomment-279410103
// https://github.com/reactjs/react-router-redux/issues/454

window.Raven && Raven.config(SENTRY_URL).install();

const Root = ({ store }) => {
  let ComponentEl = (
    <Provider store={store}>
        <App />
    </Provider>
);

  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./DevTools').default;
    ComponentEl = (
      <Provider store={store}>
        <div>    
          <App/>    
          {!window.devToolsExtension ? <DevTools /> : null}
        </div>
      </Provider>
    );
  }

  return ComponentEl;
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
