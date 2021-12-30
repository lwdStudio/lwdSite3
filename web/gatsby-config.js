require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_ROOT_URL || "http://lwdsite.liwenduan.com",
    title: "lwdSite3",
    description:"This website help you learn more about me.",
    image:"src/images/IMG_7079.jpeg",
    ICPlicense:"鄂ICP备18006410号-2",
    PSBeian:"京公网安备 11011202002643号",
    PSBeianURL: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011202002643",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-transition-link",
    "gatsby-transformer-sharp",
    // gatsby-plugin-manifest
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `lwdSite`,
        short_name: `lwdSite`,
        description: `This website help you learn more about me.`,
        lang:`en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/lwd-stamp-mono-red.svg`,      
        localize: [
          {
            start_url: `/zh/`,
            lang: `zh`,
            name: `这里是力文`,
            short_name: `这里是力文`,
            description: `你可以通过这个网站了解我`,
          },
        ],
      },
    },
    // gatsby-plugin-sharp
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    // gatsby-source-filesystem
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // gatsby-source-strapi
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI_API_URL || "http://localhost:1337",
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name:`content-type`,
            api:{
              qs:{
                _locale:`all`,
                _publicationState: 'preview',
              }
            }
          },
          {
            name:`pages`,
            api:{
              qs:{
                _locale:`all`,
                _publicationState: 'preview',
              }
            }
          },
          {
            name:`tags`,
            api:{
              qs:{
                _locale:`all`,
                _publicationState: 'preview',
              }
            }
          },
          {
            name:`legal`,
            api:{
              qs:{
                _locale:`all`,
                _publicationState: 'preview',
              }
            }
          },
        ],
        singleTypes: [
          {
            name:'front-page',
            api:{
              qs:{
                _locale:`en`,
                _publicationState: 'preview',
              }
            }
          },
          {
            name:'about-me',
            api:{
              qs:{
                _locale:`en`,
                _publicationState: 'preview',
              }
            }
          },          
          {
            name:'lwd-service',
            api:{
              qs:{
                _locale:`en`,
                _publicationState: 'preview',
              }
            }
          },
        ],
      },
    },
  ],
};
