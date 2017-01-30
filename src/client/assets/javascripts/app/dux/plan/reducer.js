import Immutable from 'Immutable';
import { uniqId } from 'lodash';

import { ADD_PLEDGE } from './actions';

const DEFAULT = Immutable.Map();

export default function plan(state = DEFAULT, action) {
	switch (action.type) {
		case ADD_PLEDGE: {
			const { pledge } = action;
			const id = pledge.id || uniqId('pledge:');
			const update = {
				...pledge,
				id
			};
			return state.set(id, update);
		}

		default:
			return state;
	}
}
