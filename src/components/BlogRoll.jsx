import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import BlogPostSummary from './BlogPostSummary';
import { H_ELLIPSIS_ENTITY } from '../constants/entities';

export const PureBlogRoll = ({ data, initialPosts }) => {
  // showPosts is the maximum number of posts currently displayed
  const [showPosts, setShowPosts] = useState(initialPosts);

  const { edges: posts } = data.allMdx;
  const totalCount = posts.length;

  return (
    <section role="feed">
      <h2>Blog posts</h2>
      {totalCount > 0 ? (
        posts.slice(0, showPosts).map(({ node, index }) => (
          <article aria-posinset={index} aria-setsize={totalCount} key={node.id}>
            <BlogPostSummary
              excerpt={node.excerpt}
              frontmatter={node.frontmatter}
              slug={node.slug}
            />
          </article>
        ))
      ) : (
        <>No posts yet!</>
      )}
      {showPosts < totalCount ? (
        <>
          <button type="submit" onClick={() => setShowPosts(showPosts + initialPosts)}>
            See more {H_ELLIPSIS_ENTITY}
          </button>
        </>
      ) : null}
    </section>
  );
};

PureBlogRoll.defaultProps = {
  initialPosts: 4,
};

PureBlogRoll.propTypes = {
  initialPosts: PropTypes.number,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            slug: PropTypes.string,
            frontmatter: PropTypes.shape({
              postTitle: PropTypes.string,
              datePublished: PropTypes.string,
            }),
          }),
        }),
      ),
    }),
  }).isRequired,
};

export const query = graphql`
  fragment BlogRollFragment on Query {
    allMdx(sort: { order: DESC, fields: [frontmatter___datePublished] }) {
      edges {
        node {
          ...BlogPostSummaryFragment
        }
      }
    }
  }
`;

const BlogRoll = () => {
  const data = useStaticQuery(
    graphql`
      query BlogRoll {
        ...BlogRollFragment
      }
    `,
  );
  return <PureBlogRoll data={data} />;
};

export { BlogRoll as default };
