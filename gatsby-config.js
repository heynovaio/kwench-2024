/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kwench Events`,
    description: ``,
    author: `HeyNova`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
    resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kwench Events`,
        short_name: `kwench-events`,
        start_url: `/`,
        background_color: `#ecdbe1`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-omni-font-loader`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://use.typekit.net`],
        custom: [
          {
            name: ['FS Siena'],
            file: `static/fonts/fonts.css`,
          },
        ],    
        web: [
          {
            name: `canada-type-gibson`,
            file: `https://use.typekit.net/jxr5rgp.css`,
          },
        ],
      },
    },
  ],
}
