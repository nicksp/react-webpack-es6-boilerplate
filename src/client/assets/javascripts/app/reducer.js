import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import plan from './dux/plan/reducer';

export default combineReducers({
	routing,
	plan
});
