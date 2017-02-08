import React, { Component } from 'react';
import { Link } from 'react-router';
import './Welcome.scss';

class Welcome extends Component {

	render() {

		return (
			<div className="Welcome">
				<h2>Welcome</h2>
					<div className="Welcome__message">
						APP NAME helps you to create a tangible plan in resisting oppressive policies and practices.
						Make a plan and take actionable steps today.
					</div>
					<div className="Welcome__go">
						<Link className="Welcome__link" to="select">
							Make a plan
						</Link>
					</div>
			</div>
		);
	}
}

export default Welcome;
