import React, { Component } from 'react';
import { Link } from 'react-router';
import './Welcome.scss';

class Welcome extends Component {

	render() {

		return (
			<div className="Welcome">
				<h2>Welcome</h2>
					<div className="Welcome_message">
						We're here to help you create an actionable plan. Commit to actions...
					</div>
					<div className="Welcome_go">
						<Link className="Welcome_link" to="select">
							Make a plan
						</Link>
					</div>
			</div>
		);
	}
}

export default Welcome;
