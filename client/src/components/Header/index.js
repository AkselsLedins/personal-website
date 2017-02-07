import React from 'react';
import pure from 'recompose/pure';

import $ from 'jquery';

import Navigation from './Navigation';

const handleClick = () => {
	if ($('#side-nav').is(':hidden')) {
		$('#side-nav').slideDown();
		$('.menu-button').addClass('active');
	} else {
		$('#side-nav').slideUp();
		$('.menu-button').removeClass('active');
	}
}

const Header = () => (
	<header>
		{/* Container */}
		<div className="container">
			<div className="row header-inner" style={{ paddingTop: 0 }}>

				{/* Logo */}
				<div className="col-xs-6 col-lg-2">
					<img className="logo has-retina" src="images/logo.png" alt="Aksels.me" />
				</div>

				{/* Nav Button */}
				<div className="menu-button" onClick={handleClick}>
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
