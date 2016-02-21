/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  friends: [0, 1, 2],
  friendsById: [
    {
      id: 0,
      name: '2Pac'
    },
    {
      id: 1,
      name: 'Dr.Dre'
    },
    {
      id: 2,
      name: 'Big Pun'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      const len = state.friends.length ? state.friends.length : 1;
      const newId = (state.friends[len - 1] + 1) || 0;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: [
          ...state.friendsById,
          {
            id: newId,
            name: action.name
          }
        ]
      };

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter((id) => id !== action.id),
        friendsById: state.friendsById.filter((friend) => friend.id !== action.id)
      };

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.map((friend) => {
          if (friend.id !== action.id) {
            return friend;
          }

          return assign({}, friend, {
            starred: !friend.starred
          });
        })
      };

    default:
      return state;
  }
}
