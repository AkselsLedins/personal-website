import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const NavLink = ({ href, label }) => (
  <li><a href={href}>{label}</a></li>
);

NavLink.propTypes = {
  href: T.string.isRequired,
  label: T.string.isRequired,
}

export default pure(NavLink);
