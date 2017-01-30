import React, { PropTypes } from 'react';
import CalIcon from 'images/calendar.svg';

import './Calendar.scss';

Calendar.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string
};

export default function Calendar({ onClick, value }) {
	return (
		<div className="Calendar" onClick={onClick}>
			<div className="Calendar__value">
				{value}
			</div>
			<CalIcon />
		</div>
	);
}
