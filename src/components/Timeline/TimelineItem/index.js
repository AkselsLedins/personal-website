import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const TimelineItem = ({ period, company, position, color }) => {
	return (
		<div className="entry">
			<div className="time on">{period}</div>
			<div className="content"><span className="strong">{company}</span><br />{position}</div>
		</div>
	);
}

TimelineItem.propTypes = {
  period: T.string.isRequired,
  company: T.string.isRequired,
  position: T.string.isRequired,
	color: T.string.isRequired,
}

export default pure(TimelineItem);
