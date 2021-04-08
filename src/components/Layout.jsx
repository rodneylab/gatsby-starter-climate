import React from 'react';
import dayjs from 'dayjs';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

import { COPYRIGHT_ENTITY } from '../constants/entities';
import { ExternalLink } from './Link';

const FooterIcons = ({
  siteMetadata: {
    facebookPage, githubPage, linkedinProfile, twitterUsername,
  },
}) => (
  <>
    <ExternalLink
      aria-label="Go to the Rodney Lab Facebook page"
      href={facebookPage}
      showExternalIcon={false}
    >
      f
    </ExternalLink>
    <ExternalLink
      aria-label="Go to the Rodney Lab Twitter page"
      href={`https://twitter.com/intent/user?screen_name=${twitterUsername.slice(1)}`}
      showExternalIcon={false}
    >
      t
    </ExternalLink>
    <ExternalLink
      aria-label="Go to the Rodney Lab LinkedIn page"
      href={`https://uk.linkedin.com/in/${linkedinProfile}`}
      showExternalIcon={false}
    >
      l
    </ExternalLink>
    <ExternalLink
      aria-label="Go to the Rodney Lab GitHub page"
      href={`https://github.com/${githubPage}`}
      showExternalIcon={false}
    >
      g
    </ExternalLink>
  </>
);

FooterIcons.propTypes = {
  siteMetadata: PropTypes.shape({
    facebookPage: PropTypes.string,
    githubPage: PropTypes.string,
    linkedinProfile: PropTypes.string,
    twitterUsername: PropTypes.string,
  }).isRequired,
};

const RodneyLabCredit = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      color: '#032539',
      fontFamily: 'Lato',
    }}
  >
    A project by
    {' '}
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <a
        aria-label="Open Rodney Lab site"
        href="https://rodneylab.com"
        rel="noopener"
        style={{ display: 'flex', alignItems: 'center', margin: '0 0.25rem' }}
      >
        <StaticImage
          alt="Rodney Lab logo"
          src="../images/rodneylab-logo.png"
          layout="fixed"
          width={16}
          height={16}
          tracedSVGOptions={{
            color: '#1c768f',
            background: '#ffffff',
          }}
        />
      </a>
      {' '}
      <a aria-label="Open Rodney Lab site" href="https://rodneylab.com" rel="noopener">
        <span style={{ fontWeight: 300 }}>RODNEY LAB</span>
      </a>
      .
    </span>
  </div>
);

export const PureLayout = ({ children, data: { site } }) => {
  const { buildTime, siteMetadata } = site;
  const copyrightYear = dayjs(buildTime).format('YYYY');

  return (
    <>
      <header>
        <Link aria-label="Jump to home page" to="/">
          Home
        </Link>
        <nav>
          <ul>
            <li>
              <Link aria-label="Jump to home page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link aria-label="Jump to contact page" to="/contact/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer>
        Created by
        {' '}
        <a aria-label="Open Rodney Lab Site" href="https://rodneylab.com" rel="noopener">
          Rodney Lab
        </a>
        .
        {` Copyright ${COPYRIGHT_ENTITY} ${copyrightYear}.`}
        <RodneyLabCredit />
        <FooterIcons siteMetadata={siteMetadata} />
      </footer>
    </>
  );
};

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string,
      siteMetadata: PropTypes.shape({
        facebookPage: PropTypes.string,
        githubPage: PropTypes.string,
        linkedinProfile: PropTypes.string,
        twitterUsername: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  fragment LayoutFragment on Site {
    buildTime
    siteMetadata {
      facebookPage
      githubPage
      linkedinProfile
      twitterUsername
    }
  }
`;

const Layout = ({ children }) => <PureLayout>{children}</PureLayout>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { Layout as default };
