const path = require("path")
const { runScreenshots } = require("gatsby-plugin-printer")
const generateSocialImage = require('./script/generateSocialImage')

// generate article pages
exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const { data } = await graphql(`
        query getArticlePageContent {
            allStrapiPages(filter: {content_type: {typeSlug: {ne: "fa-wu"}}}) {
                edges {
                    node {
                        id
                        pageTitle
                        pageSlug
                    }
                }
            }
        }
    `)

    data.allStrapiPages.edges.forEach(({node}) => {
        generateSocialImage({
            node:node
        })

        createPage({
            path:`/${node.pageSlug}`,
            component: path.resolve('./src/templates/article.js'),
            context: {
                id: node.id,
            },
        })
        console.log(`Page "${node.pageTitle}" Generated`)

    })
}

// // generate open graph image for each article
// exports.onPostBuild = async ({graphql}) => {
//     const data = await graphql(`
//         query{
//             allStrapiPages(filter: {content_type: {typeSlug: {ne: "fa-wu"}}}) {
//                 edges {
//                     node {
//                         id
//                         pageTitle
//                         pageSlug
//                         CoverImage {
//                             alternativeText
//                             url
//                             localFile {
//                             childImageSharp {
//                                 gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
//                             }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     `).then(r => {
//         if (r.errors) {
//           reporter.error(r.errors.join(`, `));
//         }
//         console.log("finish fetching data for generate social image")
//         return r.data;
//     })

//     const node = data.allStrapiPages.edges.map(({ node }) => (
//         {
//             id: node.pageSlug,
//             node,
//         }
//     ));
    
//     await runScreenshots({
//         data: node,
//         component: require.resolve('./src/components/socialImage'),
//         outputDir: 'og-images'
//     });
// }