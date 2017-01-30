import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducer';

const enhancer = compose(
	applyMiddleware(promiseMiddleware),
	autoRehydrate()
)(createStore);

export default function configureStore(initialState) {
	const store = enhancer(rootReducer, initialState);
	persistStore(store, {
		blacklist: ['routing']
	});
	return store;
}
