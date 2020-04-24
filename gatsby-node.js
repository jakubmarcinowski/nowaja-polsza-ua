/* eslint-disable */
const Promise = require('bluebird')
const path = require('path')
const webpack = require('webpack')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/article.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  contentful_id
                  slug
                  categories {
                    contentful_id
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/article/${post.node.slug}/`,
            component: blogPost,
            context: {
              contentful_id: post.node.contentful_id,
              categories_ids: post.node.categories
                ? post.node.categories.map(({ contentful_id }) => contentful_id)
                : [],
            },
          })
        })
      })
    )

    const authorTemplate = path.resolve('./src/templates/author.js')
    resolve(
      graphql(
        `
          {
            allContentfulPerson {
              edges {
                node {
                  contentful_id
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const authors = result.data.allContentfulPerson.edges
        authors.forEach((author, index) => {
          createPage({
            path: `/author/${author.node.slug}/`,
            component: authorTemplate,
            context: {
              contentful_id: author.node.contentful_id,
            },
          })
        })
      })
    )

    const category = path.resolve('./src/templates/category.js')
    resolve(
      graphql(
        `
          {
            allContentfulCategory {
              edges {
                node {
                  contentful_id
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const categories = result.data.allContentfulCategory.edges
        categories.forEach(({ node: { contentful_id, slug } }, index) => {
          createPage({
            path: `/category/${slug}/`,
            component: category,
            context: {
              contentful_id: contentful_id,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        new RegExp(path.resolve('./src/config/index.js')),
        path.resolve(`./src/config/config-${process.env.VERSION}.js`)
      ),
    ],
  })
}
