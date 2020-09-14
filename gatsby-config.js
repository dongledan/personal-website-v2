module.exports = {
    siteMetadata: {
        title: `Danny Li`,
        description: `I'm a software engineer based in Queens, New York. Home to New York's best food. My passion is to deliver fast and seamless user experiences. This is my website.`,
        author: `Danny Li`,
        url: `https://dannyboy.dev/`,
        image: `/danny.jpg`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
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
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/danny-icon.png`, // This path is relative to the root of the site.
            },
        },

        {
            resolve: "gatsby-plugin-use-dark-mode",
            options: {
                classNameDark: "dark-mode",
                classNameLight: "light-mode",
                storageKey: "darkMode",
                minify: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: `UA-178028561-1`,
              anonymize: true,
              respectDNT: true
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
