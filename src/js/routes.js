import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import {ConnectedDocs, DocsApp, About} from './containers/DocsApp/DocsApp';
import NotFoundView from './views/NotFoundView';

export default (

  <Route path="/" component={App}>
    <IndexRoute component={DocsApp} />
    <Route path="ab" component={About} />
    <Route path="fl" component={FriendListApp} />
    <Route path="*" component={NotFoundView} />
    debugger;
  </Route>
 
);

