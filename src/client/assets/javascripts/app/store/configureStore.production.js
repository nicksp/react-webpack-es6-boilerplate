import { createStore } from 'redux';

import enhancerCreator from './enhancerCreator';
import rootReducer from '../reducer';

const enhancer = enhancerCreator();

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
