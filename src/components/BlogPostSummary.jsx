import React, { useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { graphql, Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { H_ELLIPSIS_ENTITY } from '../constants/entities';

import { container, content } from './BlogPostSummary.module.scss';

const BlogPostSummary = ({
  frontmatter: { datePublished, postTitle, seoMetaDescription },
  slug,
}) => {
  const containerNode = useRef();
  const titleNode = useRef();
  useEffect(() => {
    if (containerNode.current) {
      // deliberately set style with javascript and not CSS for accessibility reasons
      containerNode.current.style.cursor = 'pointer';
    }
    const listener = (event) => {
      if (containerNode.current && !titleNode.current.contains(event.target)) {
        navigate(`/${slug}`);
      }
    };
    containerNode.current.addEventListener('mousedown', listener);
    return () => {
      if (containerNode.current) {
        containerNode.current.removeEventListener('mousedown', listener);
      }
    };
  }, [containerNode, titleNode]);

  const date = dayjs(datePublished);
  const idString = `blog-post-summary-${slug.slice(0, -1)}`;

  return (
    <div className={container} ref={containerNode}>
      <div className={content}>
        <h3 ref={titleNode}>
          <Link
            aria-label={`Open ${postTitle} blog post`}
            aria-describedby={idString}
            to={`/${slug}`}
          >
            {postTitle}
          </Link>
        </h3>
        <p>{`${date.format('D')} ${date.format('MMM')}`}</p>
        <p>{seoMetaDescription}</p>
        <span aria-hidden id={idString}>
          Read more
          {' '}
          {H_ELLIPSIS_ENTITY}
        </span>
      </div>
    </div>
  );
};

BlogPostSummary.propTypes = {
  frontmatter: PropTypes.shape({
    datePublished: PropTypes.string,
    postTitle: PropTypes.string,
    seoMetaDescription: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
};

export const query = graphql`
  fragment BlogPostSummaryFragment on Mdx {
    excerpt(pruneLength: 400)
    id
    slug
    frontmatter {
      postTitle
      datePublished(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      seoMetaDescription
    }
  }
`;

export { BlogPostSummary as default };
