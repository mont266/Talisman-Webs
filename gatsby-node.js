/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog-post.js')
    const res = await graphql(`
        query {
            allContentfulBlogs {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogs.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog-post/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}