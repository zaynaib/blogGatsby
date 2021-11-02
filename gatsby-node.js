const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = function onCreateNode({ actions, node, getNode }) {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode
    })

    actions.createNodeField({
      name: 'slug',
      value: slug,
      node
    })
  }
}



exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postComponent = require.resolve(`./src/templates/post.js`);
  const result = await graphql(`
      {
          allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
          ) {
              edges {
                  node {
                      frontmatter {
                          slug
                      }
                  }
              }
          }
      }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
          path: `blog${node.frontmatter.slug}`,
          component: postComponent,
          // If you need addition data inside your templates you can pass it via the context prop
          context: {
              slug: node.frontmatter.slug
              //slug: slug
          },
      });
  });
};