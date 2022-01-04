const path = require("path")

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
        console.log(`Generating Page "${node.pageTitle}"`)
        createPage({
            path:`/${node.pageSlug}`,
            component: path.resolve('./src/templates/article.js'),
            context: {
                id: node.id,
            },
        })
    })
}