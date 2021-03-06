/* eslint-disable */
require('dotenv').config()

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_API === 'preview'
      ? process.env.CONTENTFUL_PREVIEW_TOKEN
      : process.env.CONTENTFUL_DELIVERY_TOKEN,
  environment: process.env.CONTENTFUL_ENV,
  host:
    process.env.CONTENTFUL_API === 'preview'
      ? 'preview.contentful.com'
      : 'cdn.contentful.com',
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

const meta = {
  ru: {
    title: 'Новая Польша',
    description: 'Вся Польша в вашей ленте',
  },
  ua: {
    title: 'Нова Польща',
    description: 'Вся Польща у вашій стрічці',
  },
}

module.exports = {
  siteMetadata: {
    siteUrl: process.env.HOST || 'https://silly-morse-77d306.netlify.com/',
    themeColor: '#172429',
    ...meta[process.env.GATSBY_VERSION],
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 992,
              linkImagesToOriginal: false,
              withWebp: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-portal',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `covers`,
        path: `${__dirname}/assets/covers`,
      },
    },
  ],
}
