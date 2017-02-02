import React from 'react';
import pure from 'recompose/pure';

import Logo from './Logo';
import Intro from './Intro';

const Hero = () => (
	<section className="hero" style={{ height: '100vh' }}>
		<div className="container" style={{ marginTop: '20%' }}>
			<div
        className="row hero-content"
        data-0="opacity: 1; transform: translate3d(0px, 0px, 0px);"
        data-top-bottom="opacity: 0; transform: translate3d(0px, 300%, 0px);"
      >
        <Logo />
        <Intro />
			</div>
		</div>
	</section>
);

export default pure(Hero);
