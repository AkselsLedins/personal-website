import React from 'react';
import pure from 'recompose/pure';

import NavLink from './../NavLink';

const menu = [
  { href: '#section1', label: 'about' },
  { href: '#section2', label: 'projects' },
  { href: '#section3', label: 'experience' },
  { href: '#section4', label: 'education' },
  { href: '#section5', label: 'contact' },
]

const Navigation = () => (
	<nav className="col-xs-12 col-lg-2 col-lg-offset-8">
		<ul id="side-nav">
      { menu.map( (data, idx) => <NavLink key={`${idx}-menu`} {...data} />)}
			<li><a id="top" href="#">Top</a></li>
		</ul>
	</nav>
);

export default pure(Navigation);
