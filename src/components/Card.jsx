import React from 'react';
import PropTypes from 'prop-types';

import { container, content } from './Card.module.scss';

const Card = ({ children }) => (
  <section className={container}>
    <div className={content}>{children}</div>
  </section>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { Card as default };
