import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import { Link } from 'react-router';

import './ActionPlan.scss';
class ActionPlan extends Component {
	static propTypes = {
		plan: PropTypes.object
	}

	render() {
		const { plan } = this.props;

		if (!plan.size) { return null; }

		const pledges = plan.toArray().map((pledge) => {
			const date = pledge.get('date');
			const dateEl = date && (
				<span key="date" className="ActionPlan__date">
					{` by ${date.format('LL')}`}
				</span>
			);
			return (
				<div className="ActionPlan__pledge" key={pledge.get('id')}>
					{pledge.get('text')}
					{dateEl}
					<div className="ActionPlan__category">
						{`${pledge.get('focus')} - ${pledge.get('type')}`}
					</div>
				</div>
			);

		});

		return (
			<div className="ActionPlan">
				<h2>My action plan:</h2>
				{pledges}
				<div className="ActionPlan__more">
					<Link className="ActionPlan__link" to="/select">
						Add more
					</Link>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {plan: state.plan};
}

export default connect(mapStateToProps)(ActionPlan);
