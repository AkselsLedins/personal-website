import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const TimelineItem = ({ period, where, what, color }) => {
	return (
		<div className="entry">
			<div className="time on">{period}</div>
			<div className="content"><span className="strong">{where}</span><br />
				{what}
			</div>
		</div>
	);
}

TimelineItem.propTypes = {
  period: T.string.isRequired,
  where: T.string.isRequired,
  what: T.string.isRequired,
}

export default pure(TimelineItem);
