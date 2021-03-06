import React from 'react';
import pure from 'recompose/pure';

import Scrollchor from 'react-scrollchor';

const Intro = () => (
	<div className="col-xs-10 col-sm-9 col-lg-7">
		<h2>introduction</h2>
		<h1>Hi! I am <span className="highlight">Aksels</span>.<br/>Software Engineer.<br />Based in Paris.</h1>
		<Scrollchor to="section1" className="scroll-to" />
	</div>
);

export default pure(Intro);
