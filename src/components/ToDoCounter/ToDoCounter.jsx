import React from "react";
import PropTypes from "prop-types";

// styles
import './index.scss';

const ToDoCounter = ({ toDoCount }) => (
		<div className='counter_container'>
			<p className='counter_text'>
				You have {toDoCount} cases!
			</p>
		</div>
)

ToDoCounter.propTypes = {
	toDoCount: PropTypes.number.isRequired,
}

export default ToDoCounter;
