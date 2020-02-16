module.exports = {
  siteMetadata: {
      title: `Harry Potter Hogwarts Battle`,
      description: `A reference for questions `,
      author: `@JMRIV`,
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
                  background_color: `#000000`,
                  theme_color: `#000000`,
                  display: `minimal-ui`,
                  icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
              },
          },
      `gatsby-plugin-react-svg`,
          {
              resolve: `gatsby-plugin-react-svg`,
              options: {
                  rule: {
                  include: /assets/
                  }
              },
          },
      `gatsby-plugin-styled-components`,
      // `gatsby-plugin-web-font-loader`,
      //     {
      //         resolve: `gatsby-plugin-web-font-loader`,
      //         options: {
      //             custom: {
      //                 families: ["harrypotter"],
      //                 urls: ["/fonts/fonts.css"]

      //             },
      //         },
      //     },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  ],
}
