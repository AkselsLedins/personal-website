import React from 'react';
import pure from 'recompose/pure';

const Logo = () => (
	<div className="col-xs-12 col-lg-2">
		<img className="logo has-retina" src="images/logo.png" alt="Aksels" />
	</div>
);

export default pure(Logo);
