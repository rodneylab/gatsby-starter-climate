import React from 'react';
import { graphql } from 'gatsby';

import PropTypes from 'prop-types';

import Card from '../components/Card';
import { contactAddress, contactDetails } from './contact.module.scss';
import { PureLayout as Layout } from '../components/Layout';
import { PureSEO as SEO } from '../components/SEO';
import {
  EmailIcon, FacebookIcon, TelegramIcon, TwitterIcon, WireIcon,
} from '../components/Icons';
import { ExternalLink, TwitterMessageLink } from '../components/Link';

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
      <SEO data={data} title="Contact" metadescription="Get in touch with Rodneylab, the developer of Climate Gatsby v3 Starter" />
      <Layout data={data}>
        <Card>
          <h1>Contact me</h1>
          <p>I would love to hear from you. Please get in touch!</p>
          <div className={contactDetails}>
            <ul>
              <li>
                <EmailIcon />
                <span className={contactAddress}>{contactEmailAddress}</span>
              </li>
              <li>
                <FacebookIcon />
                <ExternalLink
                  aria-label="DM Rodney Lab on Facebook Messenger"
                  href={`https://m.me/${facebookPageName}`}
                >
                  <span className={contactAddress}>{facebookPageName}</span>
                </ExternalLink>
              </li>
              <li>
                <TwitterIcon />
                {' '}
                <TwitterMessageLink twitterUserId={twitterUserId}>
                  <span className={contactAddress}>{twitterUsername}</span>
                </TwitterMessageLink>
              </li>
              <li>
                <TelegramIcon />
                <ExternalLink
                  aria-label="Message Rodney Lab on Telegram"
                  href={`https://t.me/${telegramUsername}`}
                >
                  <span className={contactAddress}>{telegramUsername}</span>
                </ExternalLink>
              </li>
              <li>
                <WireIcon />
                <span className={contactAddress}>{wireUsername}</span>
              </li>
            </ul>
          </div>
        </Card>
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
        facebookPageName: PropTypes.string,
        telegramUsername: PropTypes.string,
        twitterUserId: PropTypes.string,
        twitterUsername: PropTypes.string,
        wireUsername: PropTypes.string,
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
