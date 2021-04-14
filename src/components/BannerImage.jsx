import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { image } from './BannerImage.module.scss';

export const BlogPostBannerImage = ({ imageData, alt, width, height }) => (
  <GatsbyImage
    className={image}
    image={getImage(imageData)}
    alt={alt}
    width={width}
    height={height}
    imgStyle={{ borderRadius: '0.75rem' }}
  />
);

BlogPostBannerImage.defaultProps = {
  width: 416,
  height: 277,
};

BlogPostBannerImage.propTypes = {
  imageData: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string,
        presentationWidth: PropTypes.number,
        presentationHeight: PropTypes.number,
      }),
    }),
  }).isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export const query = graphql`
  fragment BannerImageFragment on File {
    childImageSharp {
      gatsbyImageData(
        width: 672
        layout: CONSTRAINED
        sizes: "(max-width: 672px) calc(100vw - 32px), 672px"
      )
    }
  }
`;

export { BlogPostBannerImage as default };
