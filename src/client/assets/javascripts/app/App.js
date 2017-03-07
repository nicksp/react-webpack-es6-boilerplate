import React, { PropTypes } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import FriendsView from 'features/friends/components/FriendsView';
import NotFound from 'components/NotFound';
import { withRouter } from 'react-router';

class App extends React.Component {

  componentWillReceiveProps() {
    //if you need to dispatch location
    //changes for your application
    //in react-router-redux style
    //you can do it here by dispatching
    //some action based on this.props.location.pathname
  }

  render() {
    return (
      <div className="page-container">
        <Switch>
          <Route exact path='/' component={FriendsView}/>
          <Route exact path='/404' component={NotFound} />
          <Redirect from="/*" to='/404' />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired
}

//withRouter makes the global router props
// available to the wrapped component

export default withRouter(App);