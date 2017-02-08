import React, { PropTypes } from 'react';

import ActionPlan from 'components/ActionPlan';
const App = (props) => (
	<div className="page-container">
		{React.cloneElement({...props}.children, {...props})}
		<ActionPlan />
	</div>
);

App.propTypes = {
	children: PropTypes.element.isRequired
};

export default App;
