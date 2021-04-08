import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';

import { ExternalLink, TwitterMessageLink } from './Link';
import Heading from './Heading';
import { PureLayout as Layout } from './Layout';
import { PureSEO as SEO } from './SEO';

const shortcodes = {
  ExternalLink,
  Heading,
  Link,
  TwitterMessageLink,
};

const PureBlogPost = ({ children, data }) => {
  const { frontmatter, slug } = data.post;
  const { postTitle } = frontmatter;
  const { siteUrl } = data.site.siteMetadata;

  return (
    <>
      <SEO data={data} title={postTitle} />
      <Helmet>
        <link rel="canonical" href={`${siteUrl}/${slug}`} />
      </Helmet>
      {' '}
      <Layout data={data}>
        <article>
          <h1>{postTitle}</h1>
          <section itemProp="articleBody">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </section>
        </article>
      </Layout>
    </>
  );
};

PureBlogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteUrl: PropTypes.string,
      }),
    }),
    post: PropTypes.shape({
      slug: PropTypes.string,
      frontmatter: PropTypes.shape({
        postTitle: PropTypes.string,
      }),
    }),
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PureBlogPost as default };
