import { combineReducers } from 'redux';
import friendList from './friendList';
import Subdivide, { reducer as subdivide } from 'subdivide';

const rootReducer = combineReducers({
  subdivide,
  friendList
});

export default rootReducer;
