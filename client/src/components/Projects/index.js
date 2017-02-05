import React from 'react';
import pure from 'recompose/pure';

/* TODO remove this jquery *** function and dependency :d */
import $ from 'jquery';

import atvImg from './atv';

// components
import Project from './Project';
import Title from '../generic/Title';

// data
import data from './data';

function thumbHeight() {
  var imageContainer = $('.atvImg');

  imageContainer.css({
    "height": $('.folio-list li').width() + "px"
  });
}

class Projects extends React.Component {

  componentDidMount() {
    atvImg();
    thumbHeight();
  }

  render() {
    return (
      <section id="section2">

  			{/* Title */}
        <Title title="some projects" />

        {/* Gallery */}
  			<div className="row padded-bottom">
  				<ul className="folio-list">
            { data.map( (i, idx) => <Project {...i} offset={idx % 2 === 0} />)}
  				</ul>
  			</div>

  		</section>
    )
  }
}

export default pure(Projects);
