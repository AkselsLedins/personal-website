import React from 'react';
import pure from 'recompose/pure';

import Title from '../generic/Title';
import Form from './Form';

const Contact = () => (
  <section id="section5">

    <Title title="contact" />

		<div className="row padded-bottom">
      <Form />
		</div>

	</section>
);

export default pure(Contact);
