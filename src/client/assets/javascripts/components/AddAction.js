import React, { Component, PropTypes } from 'react';
import ListChoose from './ListChoose';
import { withRouter } from 'react-router';

class AddAction extends Component {
	static propTypes = {
		location: PropTypes.object,
		params: PropTypes.object,
		router: PropTypes.object
	}

	select = (val) => {
		const { params, router } = this.props;
		const { focus = '' } = params;
		const newRoute = '/select' + focus + '/' + val;
		router.push(newRoute);
	}

	render() {
		const { focus } = this.props.params;
		const heading = focus ? 'Pick a type of work:' : 'Pick a focus area:';
		const displayItems = focus ? items.types : items.focus;
		return (
			<div>
				<h2>{heading}</h2>
				<ListChoose items={displayItems} onClick={this.select} />
			</div>
		);
	}
}

export default withRouter(AddAction);

const items = {
	focus: [
		'Education',
		'Environment',
		'Disability Rights',
		'Health Care',
		'Immigration',
		'Partiarchy',
		'Politics',
		'Queer',
		'Racial Justice'
	],
	types: [
		'Donation',
		'Community Meetings',
		'Contact Your Reps',
		'Interpersonal',
		'Protest',
		'Self-Education',
		'Volunteer',
		'Vote'
	]
};
