import React from 'react';
import Waypoint from 'react-waypoint';
import pure from 'recompose/pure';

import Title from '../generic/Title';
import Timeline from '../generic/Timeline';
import data from './data';

class ProfessionalExperience extends React.Component {

  state = { on: false }

  render() {
    return (
			<section id="section3">
		    <Waypoint onEnter={() => this.setState({ on: true })} />

        <Title title="professional experience" />

        <Timeline data={data} on={this.state.on} />
			</section>
    );
  }
}


export default pure(ProfessionalExperience);
