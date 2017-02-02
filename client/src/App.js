import React from 'react';
import pure from 'recompose/pure';

import './App.css';

import {
  Footer, Header, About,
  Projects, ProfessionalExperience,
  Education, Contact, Hero,
  PageLoader,
} from './components';

const App = () => (
  <div>
    <PageLoader />
    <Header />
    <Hero />

  	<div className="container">
      <About />
  		<Projects />
      <ProfessionalExperience />
      <Education />
  		<Contact />
  	</div>

    <Footer />
  </div>
);

export default pure(App);
