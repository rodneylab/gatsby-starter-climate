import React from 'react';
import { graphql } from 'gatsby';

import PropTypes from 'prop-types';

import { PureLayout as Layout } from '../components/Layout';
import { PureSEO as SEO } from '../components/SEO';
import { EmailIcon, FacebookIcon, TelegramIcon, TwitterIcon, WireIcon } from '../components/Icons';
import { TwitterMessageLink } from '../components/Link';

export default function Contact({ data }) {
  const {
    contactEmailAddress,
    facebookPageName,
    telegramUsername,
    twitterUserId,
    twitterUsername,
    wireUsername,
  } = data.site.siteMetadata;

  return (
    <>
      <SEO data={data} title="Contact" />
      <Layout data={data}>
        <main>
          <h1>Contact me</h1>
          <p>I would love to hear from you. Please get in touch!</p>
          <ul>
            <li>
              <EmailIcon /> {contactEmailAddress}
            </li>
            <li>
              <FacebookIcon /> {facebookPageName}
            </li>
            <li>
              <TwitterIcon />{' '}
              <TwitterMessageLink twitterUserId={twitterUserId}>
                {twitterUsername}
              </TwitterMessageLink>
            </li>
            <li>
              <TelegramIcon />{' '}{telegramUsername}
            </li>
            <li>
              <WireIcon />{' '}{wireUsername}
            </li>
          </ul>
        </main>
      </Layout>
    </>
  );
}

Contact.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string,
      siteMetadata: PropTypes.shape({
        contactEmailAddress: PropTypes.string,
        twitterUserId: PropTypes.string,
        twitterUsername: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query Contact {
    site {
      ...LayoutFragment
      ...SEOFragment
      siteMetadata {
        contactEmailAddress
        facebookPageName
        telegramUsername
        twitterUserId
        twitterUsername
        wireUsername
      }
    }
  }
`;
