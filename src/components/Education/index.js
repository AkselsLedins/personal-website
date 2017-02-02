import React from 'react';
import Waypoint from 'react-waypoint';
import pure from 'recompose/pure';

import Title from '../generic/Title';
import Timeline from '../generic/Timeline';
import data from './data';

class Education extends React.Component {

  state = { on: false }

  render() {
    return (
			<section id="section4">
		    <Waypoint onEnter={() => this.setState({ on: true })} />

        <Title title="education" />

        <Timeline data={data} on={this.state.on} />
			</section>
    );
  }
}


export default pure(Education);
