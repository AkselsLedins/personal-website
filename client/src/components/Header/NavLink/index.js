import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

import Scrollchor from 'react-scrollchor';

const NavLink = ({ href, label }) => (
  <li><Scrollchor to={href}>{label}</Scrollchor></li>
);

NavLink.propTypes = {
  href: T.string.isRequired,
  label: T.string.isRequired,
}

export default pure(NavLink);
