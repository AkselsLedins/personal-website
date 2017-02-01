import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

import TimelineItem from './TimelineItem';

const Timeline = ({ data, on }) => {
	return (
			<div className="row">
				<div className={`timeline col-xs-12 col-lg-8 col-lg-offset-2 ${on ? 'on' : ''}`}>
					{ data.map( (i, idx) =>
						<TimelineItem
							key={`pro-${idx}`}
							period={i.period} company={i.company} position={i.position} color="#F44336"
						/>
					)}
				</div>
			</div>
	);
}

Timeline.propTypes = {
  data: T.array.isRequired,
  on: T.bool.isRequired,
}

export default pure(Timeline);
