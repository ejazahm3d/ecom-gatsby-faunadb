require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// Define site URL here
let URL
if (process.env.NODE_ENV === "production") {
  URL = "https://gatsby-faunadb-ts-2020.netlify.app"
} else {
  URL = "http://localhost:8000"
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Fauna`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: URL,
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
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-chakra-ui`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Fauna",
        fieldName: "fauna",
        url: "https://graphql.fauna.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.FAUNA_SECRET_SERVER}`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_API,
        js: "https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js",
        styles: "https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
