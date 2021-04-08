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

  contactEmailAddress: CONTACT_EMAIL,
  facebookPage: FACEBOOK_PAGE,
  githubPage: GITHUB_PAGE,
  linkedinProfile: LINKEDIN_PROFILE,
  telegramUsername: TELEGRAM_USERNAME,
  twitterUserId: TWITTER_USER_ID,
  twitterUsername: TWITTER_USERNAME,
  wireUsername: WIRE_USERNAME,
};
