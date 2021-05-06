/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const postCssPlugins = require('./postcss-config.js');
const website = require('./config/website');

const maxImageWidth = 672;

module.exports = {
  siteMetadata: {
    siteLanguage: website.siteLanguage,
    siteTitle: website.siteTitle,
    siteUrl: website.siteUrl,
    contactEmailAddress: website.contactEmailAddress,
    facebookPage: `https://www.facebook.com/${website.facebookPage}`,
    facebookPageName: website.facebookPage,
    githubPage: website.githubPage,
    linkedinProfile: website.linkedinProfile,
    telegramUsername: website.telegramUsername,
    twitterUserId: website.twitterUserId,
    twitterUsername: website.twitterUsername,
    wireUsername: website.wireUsername,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        sassOptions: {
          precision: 4,
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'tracedSVG',
          formats: ['auto', 'webp', 'avif'],
          quality: 100,
          avifOptions: { lossless: true, quality: 100, speed: 0 },
          jpgOptions: { quality: 100, progressive: true },
          pngOptions: { quality: 100, compressionSpeed: 1 },
          webpOptions: { quality: 100 },
          tracedSVGOptions: {
            color: '#5cc8ff',
            background: '#fff275',
          },
        },
        defaultQuality: 100,
        stripMetadata: false,
        useMozJpeg: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-remark-images',
      options: {
        linkImagesToOriginal: false,
        maxWidth: maxImageWidth,
        showCaptions: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          blog: require.resolve('./src/templates/blog-post.jsx'),
          default: require.resolve('./src/templates/blog-post.jsx'),
        },
        extensions: ['.mdx', '.md'],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: maxImageWidth,
              showCaptions: ['title'],
              withWebp: { quality: 100 },
              tracedSVG: { color: '#5cc8ff', background: '#fff275' },
            },
          },
        ],
        gatsbyRemarkPlugins: [],
      },
    },
  ],
};
