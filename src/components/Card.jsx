import React from 'react';

import { container, content } from './Card.module.scss';

const Card = ({ children }) => (
  <section className={container}>
    <div className={content}>{children}</div>
  </section>
);

export { Card as default };
