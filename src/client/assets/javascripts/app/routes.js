import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import ActionEnter from 'components/ActionEnter';
import AddAction from 'components/AddAction';
import NotFoundView from 'components/NotFound';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={AddAction} />
		<Route path="404" component={NotFoundView} />
		<Route path=":focus" component={AddAction} />
		<Route path=":focus/:type" component={ActionEnter} />
		<Redirect from="*" to="404" />
	</Route>
);
