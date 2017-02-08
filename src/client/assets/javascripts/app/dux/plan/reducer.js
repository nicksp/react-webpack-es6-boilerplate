import Immutable from 'Immutable';
import { mapValues } from 'lodash';
import moment from 'moment';
import { REHYDRATE } from 'redux-persist/constants';

import { ADD_PLEDGE } from './actions';

const DEFAULT = Immutable.Map();

export default function plan(state = DEFAULT, action) {
	switch (action.type) {
		case ADD_PLEDGE: {
			const { pledge } = action;
			const id = pledge.id || state.size;
			const update = {
				...pledge,
				id
			};
			return state.merge({[id]: update});
		}

		case REHYDRATE:
			if (action.payload && action.payload.plan) {
				const mapped = mapValues(action.payload.plan, (pledge) => (
					{
						...pledge,
						date: moment(pledge.date)
					}
				));
				return Immutable.fromJS(mapped);
			} else {
				return state;
			}

		default:
			return state;
	}
}
