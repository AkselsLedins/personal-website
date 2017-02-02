import React from 'react';
import pure from 'recompose/pure';

import Navigation from './Navigation';

const Header = () => (
	<header>
		{/* Container */}
		<div className="container">
			<div className="row header-inner">

				{/* Logo */}
				<div className="col-xs-6 col-lg-2">
					<img className="logo has-retina" src="images/logo.png" alt="Persona" />
				</div>

				{/* Nav Button */}
				<div className="menu-button">
					<span className="before"></span>
					<span className="main"></span>
					<span className="after"></span>
				</div>

				{/* Navigation */}
        <Navigation />
			</div>
		</div>
	</header>
);

export default pure(Header);
