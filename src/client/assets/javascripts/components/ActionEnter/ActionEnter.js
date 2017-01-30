import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';

import './ActionEnter.scss';
import { addPledge } from 'app/dux/plan/actions';
import Calendar from 'components/Calendar';

const NOW = moment();
class ActionEnter extends Component {
	static propTypes = {
		addPledge: PropTypes.func, // connect()
		date: PropTypes.object, // moment
		params: PropTypes.object,
		plan: PropTypes.object,
		setDate: PropTypes.func, // from withState()
		setText: PropTypes.func, // from withState()
		text: PropTypes.string
	}

	pledge = () => {
		const { addPledge, date, text } = this.props;
		const pledge = {
			date,
			text
		};
		addPledge(pledge);
	}

	setDate = (date) => this.props.setDate(date) // Ignore further arguments
	setText = (evt) => this.props.setText(evt.target.value)

	render() {
		const {
			date,
			params,
			plan,
			text
		} = this.props;
		const { focus, type } = params;

		const pledges = plan.toArray().map((pledge) => (
			<div key={pledge.get('id')}>
				{pledge.get('text')}
				at {pledge.get('date')}
			</div>
		));

		return (
			<div className="ActionEnter">
				<h2>Action you're taking:</h2>
				<div className="ActionEnter__textarea">
					<textarea value={text} onChange={this.setText} />
					<DatePicker customInput={<Calendar />}
							minDate={NOW}
							selected={date}
							onChange={this.setDate} />
				</div>
				<div className="ActionEnter__breadcrumbs">
					{focus} - {type}
				</div>
				<button className="ActionEnter__pledge"
						disabled={!text}
						onClick={this.pledge}>Pledge</button>
				{pledges}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {plan: state.plan};
}

export default compose(
	connect(mapStateToProps, { addPledge }),
	withState('date', 'setDate', null),
	withState('text', 'setText', null)
)(ActionEnter);
