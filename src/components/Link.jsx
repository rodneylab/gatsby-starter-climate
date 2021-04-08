import React from 'react';
import PropTypes from 'prop-types';

import { ExternalLinkIcon } from './Icons';

export const ExternalLink = ({
  children,
  href,
  rel,
  target,
  'aria-label': ariaLabel,
  showExternalIcon,
}) => (
  <a aria-label={ariaLabel} href={href} target={target} rel={rel}>
    {children}
    {target === '_blank' && showExternalIcon ? (
      <>
        {' '}
        <ExternalLinkIcon />
      </>
    ) : null}
  </a>
);

ExternalLink.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
  showExternalIcon: true,
};

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  'aria-label': PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
  showExternalIcon: PropTypes.bool,
};

export const TwitterMessageLink = ({ children, twitterUserId }) => (
  <ExternalLink
    aria-label="D M Rodney Lab on twitter"
    href={`https://twitter.com/messages/compose?recipient-id=${twitterUserId}`}
  >
    {children}
  </ExternalLink>
);

TwitterMessageLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  twitterUserId: PropTypes.string.isRequired,
};
