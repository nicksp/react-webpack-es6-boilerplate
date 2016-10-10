import { createStore } from 'redux';
import { persistState } from 'redux-devtools';
import createLogger from 'redux-logger';

import enhancerCreator from './enhancerCreator';
import rootReducer from '../reducer';
import DevTools from '../DevTools';

/**
 * Entirely optional.
 * This tiny library adds some functionality to your DevTools,
 * by logging actions/state to your console. Used in conjunction
 * with your standard DevTools monitor gives you great flexibility.
 */
const logger = createLogger();

const middleware = [logger, require('redux-immutable-state-invariant')()];

/**
 * Additional store enhancers
 */
const devTools = window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument();

// By default we try to read the key from ?debug_session=<key> in the address bar
const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length) ? matches[1] : null;
};

const enhancers = [devTools, persistState(getDebugSessionKey())];

const enhancer = enhancerCreator(enhancers, middleware);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
