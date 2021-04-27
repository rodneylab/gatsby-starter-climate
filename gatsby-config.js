/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

postCssPlugins = require('./postcss-config.js');
const maxImageWidth = 672;
const website = require('./config/website');

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
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        disableOnDev: true,
        mergeScriptHashes: true,
        mergeStyleHashes: true,
        mergeDefaultDirectives: true,
        directives: {
          'base-uri': "'self'",
          'block-all-mixed-content': '',
          'child-src': "'self'",
          'connect-src':
            "'self' https://www.google-analytics.com/analytics.js https://www.google-analytics.com/collect https://connect.facebook.net/en_US/fbevents.js https://www.google-analytics.com/j/collect https://www.gstatic.com/recaptcha/releases/ https://www.facebook.com/tr/",
          'default-src': `'self' https://www.google-analytics.com/analytics.js https://connect.facebook.net/en_US/fbevents.js https://www.gstatic.com/recaptcha/releases/`,
          'disown-opener': '',
          'font-src': "'self' data:",
          'form-action': "'self' https://www.facebook.com/tr/",
          'frame-ancestors': "'self'",
          'frame-src':
            "'self' https://www.facebook.com https://www.google.com/recaptcha/api2/anchor https://www.google.com/recaptcha/api2/bframe https://www.youtube-nocookie.com/embed/",
          'img-src':
            "'self' data: www.google-analytics.com https://www.facebook.com https://webmention.io/avatar/pbs.twimg.com/",
          'manifest-src': "'self'",
          'media-src': "'self' data:",
          'object-src': "'none'",
          sandbox: '',
          'script-src': `'self' https://www.google-analytics.com/analytics.js https://connect.facebook.net/en_US/fbevents.js https://www.google.com/recaptcha/api.js https://www.gstatic.com/recaptcha/releases/ 'report-sample'`,
          'style-src': "'self' 'unsafe-hashes' 'report-sample'",
          'worker-src': "'self'",
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/': ['Content-Security-Policy: __REPLACE_ME__'], // do not replace manually, csp-util will replace
        },
        allPageHeaders: [
          'Permissions-Policy: accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()',
          'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
        ],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers) => headers,
        generateMatchPathRewrites: true,
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
          blog: path.resolve('./src/templates/blog-post.jsx'),
          default: path.resolve('./src/templates/blog-post.jsx'),
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
