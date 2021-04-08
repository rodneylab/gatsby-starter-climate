import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { VERTICAL_LINE_ENTITY } from '../constants/entities';

export const PureSEO = ({ data, title }) => {
  const { siteLanguage, siteTitle } = data.site.siteMetadata;

  const getPageTitle = () => `${title} ${VERTICAL_LINE_ENTITY} ${siteTitle}`;

  return <Helmet title={getPageTitle()} htmlAttributes={{ lang: siteLanguage }} />;
};

export const seoQuery = graphql`
  fragment SEOFragment on Site {
    siteMetadata {
      siteLanguage
      siteTitle
    }
  }
`;

const query = graphql`
  query SEO {
    site {
      ...SEOFragment
    }
  }
`;

const SEO = () => {
  const data = useStaticQuery(query);
  return <PureSEO data={data} />;
};

export { PureSEO as default };
