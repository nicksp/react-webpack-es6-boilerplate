import { combineReducers } from 'redux';

import friends, { NAME as friendsName } from 'features/friends';

export default combineReducers({
  [friendsName]: friends
});
