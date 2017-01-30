import React, { Component, PropTypes } from 'react';
import { get } from 'lodash';

import './ListChoose.scss';

export default class ListChoose extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		onClick: PropTypes.func.isRequired
	}

	select = (evt) => {
		const { onClick } = this.props;
		if (typeof onClick === 'function') {
			const val = get(evt, 'target.dataset.val');
			if (typeof val !== 'undefined') {
				this.props.onClick(val);
			}
		}
	}

	render() {
		const { items } = this.props;
		const links = items.map((item) => {
			let { label, val } = item;
			if (typeof item === 'string') {
				label = val = item;
			}
			return (
				<li key={val} data-val={val}>
					{label}
				</li>
			);
		});
		return (
			<ul className="ListChoose"
					onClick={this.select}>
				{links}
			</ul>
		);
	}
}
