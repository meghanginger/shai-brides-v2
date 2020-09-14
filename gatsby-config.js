const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `SHAI BRIDES`,
    description: `hectic pop.`,
    author: `@shaibrides`,
    image: `/images/homeDesktop.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/img/favicon.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`
          },
          `gatsby-remark-copy-images`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158100447-1",
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase-key.json"),
        databaseUrl: "https://shai-brides-v2.firebaseio.com",
        types: [
          {
            type: 'Biography',
            collection: 'bio',
            map: doc => doc,
          },
          {
            type: 'test',
            collection: 'authors',
            map: doc => ({
              name: doc.name,
              country: doc.country,
              books___NODE: doc.books.map(book => book.id),
            }),
          },
        ],
      },
    },
  ]
};