const config = require('./config/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  siteMetadata: {
    title: 'finiteloop',
    siteUrl: `https://finiteloop.io`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/settings`,
        name: 'settings',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sitemap`,
   // 'gatsby-plugin-jss',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#70A898`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/img/logos/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/logos/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/flLogo.png",
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: false,
          coast: true,
          favicons: true,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: true,
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    'gatsby-plugin-remove-serviceworker',
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
   // 'gatsby-plugin-offline', // Disabling this due to issues.
  ],
};
