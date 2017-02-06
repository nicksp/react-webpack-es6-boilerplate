import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import ActionEnter from 'components/ActionEnter';
import AddAction from 'components/AddAction';
import NotFoundView from 'components/NotFound';
import Welcome from 'components/Welcome';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Welcome} />
		<Route path="select(/:focus)" component={AddAction} />
		<Route path="select/:focus/:type" component={ActionEnter} />
		<Route path="404" component={NotFoundView} />
		<Redirect from="*" to="404" />
	</Route>
);
