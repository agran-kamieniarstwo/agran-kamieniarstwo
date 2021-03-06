module.exports = {
  siteMetadata: {
    title: `Agran Kamieniarstwo`,
    description: `Firma Agran działą na terenie całego śląska. Specjalizujemy się w kamieniarstwie nagrobkowym oraz kamieniarstwie budowlanym.`,
    author: `KK`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
