/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // previous setup
  siteMetadata: {
    title: `Code With Ola`,
    author: {
      name: `Ola Giwa`,
      summary: `who lives and works in Chicago building useful things.`,
    },
    description: `A site to document my journey into data science`,
    siteUrl: `https://codewithola.com`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/blog`,
        name: `blog`
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-sass`
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-feed`,
    
  ]
}