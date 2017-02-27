import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import FriendsView from 'features/friends/components/FriendsView';
import NotFound from 'components/NotFound';

const App = (props) => (
<BrowserRouter
 onChange={(location) => {
   console.log(location)
 }}
  >
  <div className="page-container">
    <Switch>
      <Route exact path='/' component={FriendsView}/>
      <Route exact path='/404' component={NotFound} />
      <Redirect from="/*" to='/404' />
    </Switch>
  </div>
</BrowserRouter>
);

export default App;