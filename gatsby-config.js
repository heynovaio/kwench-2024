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
    title: `KWENCH`,
    description: `We are a full-service coworking & culture club in Victoria for creative, ambitious thinkers & doers who seek more.”`,
    author: `HeyNova`,
    siteUrl: `https://www.clubkwench.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://www.clubkwench.com/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
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
        name: `Club KWENCH`,
        short_name: `kwench-2024`,
        start_url: `/`,
        background_color: `#ecdbe1`,
        display: `minimal-ui`,
        icon: `src/images/getlogo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "s3-website-us-east-1",
        protocol: "https",
        hostname: "www.clubkwench.com",
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
