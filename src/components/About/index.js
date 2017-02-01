import React from 'react';
import pure from 'recompose/pure';

import Skills from './Skills';

const About = () => (
	<section id="section1" className="padded-top">

		{/* Content */}
		<div className="row">

			<div className="col-xs-12 col-lg-8 col-lg-offset-2">
				<h2>about</h2>
        <p>Hi, I’m an enthusiastic French Software Engineer, currently working at Fizix.io. I graduated from Epitech Paris.</p>
        <p>I love travelling around the world and discover new things. During the last four years I’ve done a lot of projects in teams at Epitech (more than 70) and in Konkuk University of Seoul for two semesters.<br />
          Through all these experiences, I became a full professional software engineer, autonomous and responsible.</p>

				<p>Feel free to checkout my <a href="#">Linkedin</a> and my <a href="#">Github</a>.. or some pictures on my <a href="#">Flickr</a></p>

			</div>
		</div>

    <Skills />

	</section>
);

export default pure(About);
