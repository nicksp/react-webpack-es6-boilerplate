import { configureContainer, expect } from '../testHelper';
import FriendListApp from '../../../src/js/containers/FriendListApp/FriendListApp';


import { shallow, mount, render } from 'enzyme';

describe('FriendListApp', () => {

  let component;

  beforeEach(() => {
    component = mount(configureContainer(FriendListApp))
  });

  it('shows an input to add a new friend', () => {
    expect(component.find('.addFriendInput')).to.have.length(1);
  });

  it('shows a friend list', () => {
    expect(component.find('.friendList')).to.have.length(1);
  });
});
