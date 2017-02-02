import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const Error = ({ data }) => (
	<p style={{ color: '#F44336'}}>{data}</p>
);

Error.propTypes = {
  data: T.string.isRequired,
}

export default pure(Error);
