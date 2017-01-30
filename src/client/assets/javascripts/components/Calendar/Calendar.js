import React, { PropTypes } from 'react';
import CalIcon from 'images/calendar.svg';

import './Calendar.scss';

Calendar.propTypes = {
	clear: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string
};

export default function Calendar({ clear, onClick, value }) {
	return (
		<div className="Calendar" onClick={onClick}>
			{value && (
				<div className="Calendar__value">
					<button className="Calendar__clear"
							onClick={clear}>✗</button>
					{value}
				</div>
			)}
			<CalIcon />
		</div>
	);
}
