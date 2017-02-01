import React, { Component } from 'react';
import './App.css';

// layout
import Footer from './components/Footer';
import Header from './components/Header';

import About from './components/About';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';

class App extends Component {

  componentDidMount() {
    // atvImg();

    // thumbHeight();
    // window.resize(thumbHeight);

    // resizeNow();
    // $(window).resize(resizeNow);
  }

  render() {
    return (
      <div>
        	{/* Begin Pageloader */}
	<div id="pageloader">
		{/* Content */}
		<div className="pageloader-content">
			<img src="images/loading.gif" alt="" />
			<h6>loading</h6>
		</div>{/* END Content */}
	</div>{/* END Pageloader */}

	{/* Sticky Nav */}
  <Header />

	{/* Begin Hero */}
	<section className="hero" style={{ height: '100vh' }}>
		<div className="container" style={{ marginTop: '20%' }}>
			{/* Hero Content */}
			<div
        className="row hero-content" data-0="opacity: 1; transform: translate3d(0px, 0px, 0px);" data-top-bottom="opacity: 0; transform: translate3d(0px, 300%, 0px);"
      >
				{/* Logo */}
				<div className="col-xs-12 col-lg-2">
					<img className="logo has-retina" src="images/logo.png" alt="Persona" />
				</div>

				{/* Intro */}
				<div className="col-xs-10 col-sm-9 col-lg-7">
					<h2>introduction</h2>
					<h1>Hi! I am <span className="highlight">Aksels</span>.<br/>Software Engineer.<br />Based in Paris.</h1>
					<a href="#section1" className="scroll-to"></a>
				</div>
			</div>{/* END Hero Content */}
		</div>{/* END Container */}
	</section>{/* END Hero */}


	<div className="container">

    <About />
		<Projects />
    <ProfessionalExperience />
    <Education />

		{/* Clients */}
		<section id="section4">

			{/* Title */}
			<div className="row padded-top">
				<div className="col-xs-12 col-lg-8 col-lg-offset-2">
					<h2>clients</h2>
				</div>
			</div>

			{/* Large Text */}
			<div className="row">
				<div className="col-xs-12 col-lg-8 col-lg-offset-2">
					<h1>Had the privilege to work with companies such as <span className="highlight">Airbnb</span>, <span className="highlight">ClassDojo</span>, <span className="highlight">Puma</span>, <span className="highlight">Škoda</span>, <span className="highlight">Twitter</span> &amp; more.</h1>
					<p>Featured on Behance, The Dieline, Awwwards, siteinspire.com &amp; more.</p>
				</div>
			</div>

			{/* Logos */}
			<div className="row">
				<div className="col-xs-12 col-lg-8 col-lg-offset-2">
					<a className="client" href="#"><img className="has-retina" src="images/client-1.png" alt="" /></a>
					<a className="client" href="#"><img className="has-retina" src="images/client-3.png" alt="" /></a>
					<a className="client" href="#"><img className="has-retina" src="images/client-2.png" alt="" /></a>
					<a className="client" href="#"><img className="has-retina" src="images/client-4.png" alt="" /></a>
				</div>
			</div>

		</section>{/* END Clients */}

		{/* Contact */}
		<section id="section5">

			{/* Title */}
			<div className="row padded-top">
				<div className="col-xs-12 col-lg-8 col-lg-offset-2">
					<h2>contact</h2>
				</div>
			</div>

			{/* Form */}
			<div className="row padded-bottom">
				<div className="col-xs-12 col-lg-8 col-lg-offset-2">
					<h1><a href="mailto:hello@persona.com">hello@persona.com</a></h1>
					<p>Or just send me an email straight through here:</p>

					<form id="contact" name="contact" method="post" noValidate>
						<fieldset>
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
							<label htmlFor="email">Email</label>
					        <input type="email" name="email" id="email" />
					        <label htmlFor="message">Message</label>
					        <textarea name="message" id="message"></textarea>
					        <input id="submit" type="submit" name="submit" value="Send Email" />
						</fieldset>
					</form>

					<div id="success">
						<p>Your message was sent successfully! I will be in touch as soon as I can.</p>
					</div>

					<div id="error">
						<p>Something went wrong, try refreshing and submitting the form again.</p>
					</div>
				</div>
			</div>

		</section>{/* END Contact */}
	</div>{/* END Container */}

	{/* Footer */}
  <Footer />
      </div>
    );
  }
}

export default App;
