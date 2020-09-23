require("dotenv").config({
  path: `.env`,
});
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
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DB_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_SB,
          messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
      },
    }
  ]
};

/*
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY
        }
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
    }
    */