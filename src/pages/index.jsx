import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogRoll from '../components/BlogRoll';
import { PureLayout as Layout } from '../components/Layout';
import { PureSEO as SEO } from '../components/SEO';

export default function Home({ data }) {
  return (
    <>
      <SEO data={data} title="Home" />
      <Layout data={data}>
        <main>
          <header>
            <h1>Climate Gatsby 3 MDX Blog Starter</h1>
          </header>
          <section>
            <h2>About me</h2>
            <p>
              I live and breathe analogue photography. I show you my favourite analogue film cameras
              on this site.
            </p>
          </section>
          <BlogRoll />
        </main>
      </Layout>
    </>
  );
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query Home {
    site {
      ...LayoutFragment
      ...SEOFragment
    }
    ...BlogRollFragment
  }
`;
