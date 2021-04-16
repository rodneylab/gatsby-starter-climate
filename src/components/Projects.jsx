import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import {
  cardContainer,
  cardContent,
  detailText,
  detailTextShort,
  icon,
  image,
  overlayText,
  slide,
  slideContainer,
  slideFront,
  slideBack,
  slideBackContent,
  slider,
  sliderShortcut,
  sliderShortcutActive,
  sliderShortcuts,
  slides,
} from './Projects.module.scss';
import { isBrowser } from '../utilities/utilities';
import { FilmIcon, SettingsIcon, ThermometerIcon } from './Icons';

const imageAltText = [
  'Photograph of analogue camera which is disassembled with its components arranged on a table.  There is a magnifying glass above the centre of the image',
  'Photograph of a roll of 35mm camera film centred on a large yellow background',
  'Photograph of an analogue film camera placed in front of an arrangement of film processing chemical bottles of different shapes and size as well as beakers, measuring cylinders and other photo lab equipment',
];
const projectTitles = ['Classic Camera Repair', 'Film Exchange Programme', 'Film Lab'];

const ProjectDetail = ({ index }) => {
  if (index === 0) {
    return (
      <div className={slideBackContent}>
        <h2>{projectTitles[0]}</h2>
        <span className={icon}>
          <SettingsIcon size="48" />
        </span>
        <p className={detailTextShort}>I rescue and repair unloved analogue cameras.</p>
        <p className={detailText}>
          I fix analogue film cameras whenever I find the time. Get in touch if you have an unloved
          film camera, no matter what condition it is in. I can use the spare parts to get another
          camera working.
        </p>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className={slideBackContent}>
        <h2>{projectTitles[1]}</h2>
        <span className={icon}>
          <FilmIcon size="48" />
        </span>
        <p className={detailTextShort}>
          Find someone who has a film you want and exchange it for one they want.
        </p>
        <p className={detailText}>
          Sometimes you want to try out a film but it&apos;s difficult to get hold of it where you
          live. I can pair you up with someone in a another part of the world who either has or can
          source the film for you. You just exchange it for film which they are looking for.
        </p>
      </div>
    );
  }
  return (
    <div className={slideBackContent}>
      <h2>{projectTitles[2]}</h2>
      <span className={icon}>
        <ThermometerIcon size="48" />
      </span>
      <p className={detailTextShort}>
        I&apos;m rediscovering a rare, forgotten photographic printing process every month.
      </p>
      <p className={detailText}>
        I&apos;m trying out a different, forgotten film processing technique every month this year.
        So far I have tried Kallitype, Platinum and Palladium printing, and the Wet-Plate Collodion
        Process. What other rare processes should I try?
      </p>
    </div>
  );
};

ProjectDetail.propTypes = {
  index: PropTypes.number.isRequired,
};

const Projects = ({ carouselImages }) => {
  let currentCarouselIndex = 0;
  if (isBrowser) {
    const { hash } = window.location;
    const regularExpression = /slide-\d/;
    if (regularExpression.test(hash)) {
      currentCarouselIndex = parseInt(hash.slice(7), 10);
    }
  }

  return (
    <section>
      <h2>My Latest Projects</h2>
      <div className={cardContainer}>
        <div className={cardContent}>
          <div className={slider}>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className={slides} tabIndex="0">
              {carouselImages.map((element, index) => (
                <div
                  aria-selected={currentCarouselIndex === index}
                  className={slideContainer}
                  key={element.id}
                  id={`slide-${index}`}
                >
                  <div className={slide}>
                    <div className={slideFront}>
                      <GatsbyImage
                        className={image}
                        image={getImage(element)}
                        alt={imageAltText[index]}
                        width={672}
                        height={448}
                      />
                      <div className={overlayText}>{projectTitles[index]}</div>
                    </div>
                    <div className={slideBack}>
                      <ProjectDetail index={index} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={sliderShortcuts}>
            {carouselImages.map((element, index) => (
              <a
                aria-label={`Skip to ${projectTitles[index]} project`}
                aria-current={currentCarouselIndex === index}
                className={`${sliderShortcut} ${
                  currentCarouselIndex === index ? sliderShortcutActive : ''
                }`}
                href={`#slide-${index}`}
                key={`link-${element.id}`}
              >
                <span className="screen-reader-text">{index + 1}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  carouselImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export const carouselQuery = graphql`
  fragment ProjectCarouselFragment on File {
    id
    childImageSharp {
      gatsbyImageData(
        width: 672
        layout: CONSTRAINED
        sizes: "(max-width: 672px) calc(100vw - 64px), 672px"
      )
    }
  }
`;

export const query = graphql`
  fragment ProjectsFragment on Query {
    projectImage1: file(relativePath: { eq: "camera-restoration-project.jpg" }) {
      ...ProjectCarouselFragment
    }
    projectImage2: file(relativePath: { eq: "film-exchange-project.jpg" }) {
      ...ProjectCarouselFragment
    }
    projectImage3: file(relativePath: { eq: "film-lab-project.jpg" }) {
      ...ProjectCarouselFragment
    }
  }
`;

export { Projects as default };
