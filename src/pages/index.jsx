import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogRoll from '../components/BlogRoll';
import Card from '../components/Card';
import Projects from '../components/Projects';
import { PureLayout as Layout } from '../components/Layout';
import { PureSEO as SEO } from '../components/SEO';

export default function Home({ data }) {
  const { projectImage1, projectImage2, projectImage3 } = data;
  const projectCarouselImages = [projectImage1, projectImage2, projectImage3];

  return (
    <>
      <SEO data={data} title="Home" />
      <Layout data={data}>
        <>
          <header>
            <h1>Climate &mdash; Gatsby 3 Starter</h1>
            <h2>Gatsby 3 Starter for MDX Blog Sites</h2>
          </header>
          <Card>
            <h2>About me</h2>
            <p>
              I live and breathe analogue photography. I show you my favourite analogue film cameras
              on this site. Hopefully if you are not into analogue photography yet, some of my
              enthusiasm will rub off onto you.
            </p>
          </Card>
          <Projects carouselImages={projectCarouselImages} />
          <BlogRoll />
        </>
      </Layout>
    </>
  );
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string,
    }),
    projectImage1: PropTypes.shape.isRequired,
    projectImage2: PropTypes.shape.isRequired,
    projectImage3: PropTypes.shape.isRequired,
  }).isRequired,
};

export const query = graphql`
  query Home {
    site {
      ...LayoutFragment
      ...SEOFragment
    }
    ...BlogRollFragment
    ...ProjectsFragment
  }
`;
