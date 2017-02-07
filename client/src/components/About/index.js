import React from 'react';
import pure from 'recompose/pure';

import Skills from './Skills';
import ExternalLink from '../generic/ExternalLink';

const About = () => (
	<section id="section1" className="padded-top">

		<div className="row">

			<div className="col-xs-12 col-lg-8 col-lg-offset-2">
				<h3>about</h3>
        <p>Hi, I’m an enthusiastic French Software Engineer, currently working at Fizix.io. I graduated from Epitech Paris.</p>
        <p>I love travelling around the world and discover new things. During the last five years I’ve done a lot of projects in teams at Epitech (more than 70) and in Konkuk University of Seoul for two semesters.<br />
          Through all these experiences, I became a full professional software engineer, autonomous and responsible.</p>

				<p>
					{'Feel free to checkout my '}<ExternalLink href="https://fr.linkedin.com/in/akselsledins">Linkedin</ExternalLink>
					{' and my '}<ExternalLink href="https://github.com/AkselsLedins">Github</ExternalLink>
					{'.. or some pictures on my '}<ExternalLink href="https://www.flickr.com/photos/aksels">Flickr</ExternalLink>
					{'.. or my blog '}<ExternalLink href="http://aksels.io">aksels.io</ExternalLink>.
				</p>

			</div>
		</div>

    <Skills />

	</section>
);

export default pure(About);
