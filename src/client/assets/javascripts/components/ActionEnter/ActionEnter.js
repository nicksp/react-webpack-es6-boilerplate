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
		setDate: PropTypes.func, // from withState()
		setText: PropTypes.func, // from withState()
		text: PropTypes.string
	}

	pledge = () => {
		const {
			addPledge,
			date,
			params,
			text,
			setDate,
			setText
		} = this.props;
		const { focus, type } = params;
		const pledge = {
			date,
			focus,
			text,
			type
		};
		addPledge(pledge);
		setText('');
		setDate(null);
	}

	clearDate = (evt) => {
		evt.stopPropagation();
		this.setDate(null);
	}

	setDate = (date) => this.props.setDate(date) // Ignore further arguments
	setText = (evt) => this.props.setText(evt.target.value)

	render() {
		const {
			date,
			params,
			text
		} = this.props;
		const { focus, type } = params;

		return (
			<div className="ActionEnter">
				<h2>Action you're taking:</h2>
				<div className="ActionEnter__textarea">
					<textarea value={text} onChange={this.setText} />
					<DatePicker customInput={<Calendar clear={this.clearDate} />}
							minDate={NOW}
							selected={date}
							onChange={this.setDate} />
				</div>
				<div className="ActionEnter__breadcrumbs">
					{focus} - {type}
				</div>
				<button className="ActionEnter__pledge"
						disabled={!text}
						onClick={this.pledge}>Add to my plan</button>
			</div>
		);
	}
}

export default compose(
	connect(null, { addPledge }),
	withState('date', 'setDate', null),
	withState('text', 'setText', '')
)(ActionEnter);
