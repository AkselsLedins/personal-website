import React from 'react';
import pure from 'recompose/pure';

const Footer = () => (
	<footer className="padded">
		{/* Container */}
		<div className="container">

			{/* Social List */}
			<div className="row">
				<div className="social-list col-xs-12 col-lg-8 col-lg-offset-2">
          <a target="_blank" href="https://fr.linkedin.com/in/akselsledins"><i className="social-icon-linkedin"></i></a>
          <a target="_blank" href="https://github.com/AkselsLedins"><i className="social-icon-github"></i></a>
					<a target="_blank" href="https://twitter.com/AkselsLedins"><i className="social-icon-twitter"></i></a>
					<a target="_blank" href="https://www.facebook.com/aksels.ledins"><i className="social-icon-facebook"></i></a>
					<a target="_blank" href="https://www.instagram.com/aksels.ledins"><i className="social-icon-instagram"></i></a>
				</div>
			</div>{/* END Social List */}

			{/* Copyright */}
			<div className="row">
				<div className="social-list col-xs-12 col-lg-8 col-lg-offset-2">
					<p className="copyright">© 2017 Aksels.me. Made with love with React.</p>
				</div>
			</div>
		</div>
	</footer>
);

export default pure(Footer);
