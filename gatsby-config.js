if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    require('dotenv').config({ path: './.env.development'})
}
  
if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
    require('dotenv').config({ path: './.env.production' })
}

module.exports = {
    siteMetadata: {
        title: `Talisman Webs - Digital presence starts here.`,
        description: `Your digital presence starts here. We build stunning websites at affordable prices to help kickstart the digital presence of small businesses in the UK.`,
        author: `@envy_theme`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
                accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
