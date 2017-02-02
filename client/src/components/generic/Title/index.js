import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const Title = ({ title }) => (
	<div className="row">
		<div className="col-xs-12 col-lg-8 col-lg-offset-2">
			<h3>{title}</h3>
		</div>
	</div>
);

Title.propTypes = {
  title: T.string.isRequired,
}

export default pure(Title);
