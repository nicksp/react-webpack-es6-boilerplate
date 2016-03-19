import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory, hashHistory } from 'react-router';

import App from './components/app';
import Chooser from './components/chooser';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import {ConnectedDocs, DocsApp, About} from './containers/DocsApp/DocsApp';
import NotFoundView from './views/NotFoundView';

let route1 = (
    <Router history={hashHistory}>
      <Route path="/" component={Chooser}>
       <IndexRoute component={DocsApp} />
       </Route>
       <Route path="ab" component={App} >
       <IndexRoute component={About} />
       </Route>
       <Route path="fl" component={FriendListApp} >
       <Route path="*" component={NotFoundView} />
      </Route>
     </Router>
);

let route2 = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DocsApp} />
      <Route path="ab" component={About} />
      <Route path="fl" component={FriendListApp} />
      <Route path="*" component={NotFoundView} />
    </Route>
  </Router>
);


export default (
  route1
 
);

