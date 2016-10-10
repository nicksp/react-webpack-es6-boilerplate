import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

const defaults = {
  enhancers: [],
  middleware: [promiseMiddleware, routerMiddleware(browserHistory)],
};

export default function enhancerCreator(extraEnhancers = [], extraMiddleware = []) {

  const enhancers = defaults.enhancers.concat(extraEnhancers);
  const middleware = defaults.middleware.concat(extraMiddleware);

  return compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );
}
