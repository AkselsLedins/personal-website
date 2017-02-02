import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const ExternalLink = ({ href, children }) => (
  <a target="_blank" href={href}>
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: T.string.isRequired,
  children: T.node,
}

export default pure(ExternalLink);
