import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { PureLayout as Layout } from '../Layout';
import { PureSEO as SEO } from '../SEO';

const PurePageNotFound = ({ data }) => (
  <>
    <SEO data={data} title="Page not Found" />
    <Layout data={data}>
      <>
        <h1>Page not found!</h1>
        <p>Not sure that page exists!</p>
        <p>
          Go to
          {' '}
          <Link aria-label="Go to home page" to="/">
            home page
          </Link>
          {' '}
          instead
        </p>
      </>
    </Layout>
  </>
);

PurePageNotFound.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string,
      siteMetadata: PropTypes.shape({}),
    }),
  }).isRequired,
};

export { PurePageNotFound as default };
