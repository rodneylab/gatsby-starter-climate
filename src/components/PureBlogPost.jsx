import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';

import { ExternalLink, TwitterMessageLink } from './Link';
import { PureLayout as Layout } from './Layout';
import { PureSEO as SEO } from './SEO';

const shortcodes = {
  ExternalLink,
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
      </Helmet>{' '}
      <Layout data={data}>
        <main>
          <article>
            <h1>{postTitle}</h1>
            <section itemProp="articleBody">
              <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </section>
          </article>
        </main>
      </Layout>
    </>
  );
};

PureBlogPost.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      frontmatter: PropTypes.shape({
        postTitle: PropTypes.string,
      }),
    }),
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PureBlogPost as default };
