export const ADD_PLEDGE = 'plan:ADD_PLEDGE';
export function addPledge(pledge) {
	return {
		type: ADD_PLEDGE,
		pledge
	};
}
