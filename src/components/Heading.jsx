import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { hideHeadingLink } from './Heading.module.scss';

const Heading = ({ children, as, hash }) => {
  const [showLink, setShowLink] = useState(false);

  if (hash === '') {
    return React.createElement(as, [], { children });
  }
  return React.createElement(
    as,
    {
      id: hash,
      onMouseEnter: () => setShowLink(true),
      onMouseLeave: () => setShowLink(false),
    },
    <span>
      {children}
      {' '}
      <a aria-hidden className={showLink ? '' : hideHeadingLink} href={`#${hash}`}>
        #
      </a>
    </span>,
  );
};

Heading.defaultProps = {
  as: 'h1',
  hash: '',
};

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  hash: PropTypes.string,
};

export { Heading as default };
