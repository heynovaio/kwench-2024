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
    siteUrl: `https://www.clubkwench.com`,
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
        name: `Club Kwench`,
        short_name: `kwench-2024`,
        start_url: `/`,
        background_color: `#ecdbe1`,
        display: `minimal-ui`,
        icon: `src/images/getlogo.png`,
      },
    },
    `gatsby-omni-font-loader`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://use.typekit.net`],   
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
