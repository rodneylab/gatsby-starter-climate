import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PurePageNotFound from '../components/Pages/PurePageNotFound';

export default function PageNotFound({ data }) {
  return <PurePageNotFound data={data} />;
}

PageNotFound.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query PageNotFound {
    site {
      ...LayoutFragment
      ...SEOFragment
    }
  }
`;
