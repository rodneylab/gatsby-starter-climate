require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  CONTACT_EMAIL,
  GITHUB_PAGE,
  LINKEDIN_PROFILE,
  TWITTER_USERNAME,
  TWITTER_USER_ID,
  FACEBOOK_PAGE,
  TELEGRAM_USERNAME,
  WIRE_USERNAME,
} = process.env;

module.exports = {
  siteLanguage: 'en-GB',
  siteTitle: 'Climate Gatsby 3 MDX Blog Starter',
  siteUrl: 'https://www.example.com',

  // JSON / Manifest
  favicon: 'static/assets/icon.png', // Used for manifest favicon generation
  shortName: 'Rodney Lab', // shortname for manifest.  MUST be shorter than 12 characters
  author: 'Rodney Johnson', // Author for schema.org JSONLD
  authorImage: '/assets/rodneylab-icon.png', // AuthorImage for schema.org JSONLD
  background_color: '#032539',
  theme_color: '#1c768f',

  contactEmailAddress: CONTACT_EMAIL,
  facebookPage: FACEBOOK_PAGE,
  githubPage: GITHUB_PAGE,
  linkedinProfile: LINKEDIN_PROFILE,
  telegramUsername: TELEGRAM_USERNAME,
  twitterUserId: TWITTER_USER_ID,
  twitterUsername: TWITTER_USERNAME,
  wireUsername: WIRE_USERNAME,
};
