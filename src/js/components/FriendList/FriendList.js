import './FriendList.scss';

import React, { Component, PropTypes } from 'react';
import { mapValues } from 'lodash';

import FriendListItem from '../FriendListItem/FriendListItem';

export default class FriendList extends Component {

  static propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  renderList() {
    return this.props.friends.map((friend) =>
      (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          starred={friend.starred}
          {...this.props.actions} />
      )
    );
  }

  render () {
    return (
      <ul className="friendList">
        {this.renderList()}
      </ul>
    );
  }
}
