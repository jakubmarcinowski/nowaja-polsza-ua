/* eslint-disable */
const Promise = require('bluebird')
const path = require('path')
const webpack = require('webpack')

const postsPerPage = 6

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/article.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(
              sort: { fields: [publishDate], order: DESC }
            ) {
              edges {
                node {
                  id
                  slug
                  categories {
                    id
                  }
                  authors {
                    id
                  }
                }
              }
            }
            allContentfulCategory {
              edges {
                node {
                  id
                  slug
                }
              }
            }
            allContentfulPerson {
              edges {
                node {
                  id
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

        const posts = result.data.allContentfulBlogPost.edges
        const categoryPosts = result.data.allContentfulCategory.edges.reduce(
          (prev, current) => ({
            ...prev,
            [current.node.id]: {
              slug: current.node.slug,
              posts: [],
            },
          }),
          {}
        )
        const authorPosts = result.data.allContentfulPerson.edges.reduce(
          (prev, current) => ({
            ...prev,
            [current.node.id]: {
              slug: current.node.slug,
              posts: [],
            },
          }),
          {}
        )

        posts.forEach((post, index) => {
          createPage({
            path: `/article/${post.node.slug}/`,
            component: blogPost,
            context: {
              id: post.node.id,
              categories_ids: post.node.categories
                ? post.node.categories.map(({ id }) => id)
                : [],
            },
          })

          post.node.categories.forEach(category => {
            categoryPosts[category.id].posts.push(post.node.id)
          })

          if (post.node.authors) {
            post.node.authors.forEach(author => {
              authorPosts[author.id].posts.push(post.node.id)
            })
          }
        })

        Object.keys(categoryPosts).forEach(categoryId => {
          const category = categoryPosts[categoryId]
          const slugBase = `/category/${category.slug}`
          const numPages = Math.ceil(category.posts.length / postsPerPage)

          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? slugBase : `${slugBase}/${i + 1}`,
              component: path.resolve('./src/templates/category.js'),
              context: {
                id: categoryId,
                postIds: category.posts.slice(
                  i * postsPerPage,
                  (i + 1) * postsPerPage
                ),
                prevPagePath: i === 0 ? null : `${slugBase}/${i}`,
                nextPagePath:
                  i === numPages - 1 ? null : `${slugBase}/${i + 2}`,
              },
            })
          })
        })

        Object.keys(authorPosts).forEach(authorId => {
          const author = authorPosts[authorId]
          const slugBase = `/author/${author.slug}`
          const numPages = Math.ceil(author.posts.length / postsPerPage)

          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? slugBase : `${slugBase}/${i + 1}`,
              component: path.resolve('./src/templates/author.js'),
              context: {
                id: authorId,
                postIds: author.posts.slice(
                  i * postsPerPage,
                  (i + 1) * postsPerPage
                ),
                prevPagePath: i === 0 ? null : `${slugBase}/${i}`,
                nextPagePath:
                  i === numPages - 1 ? null : `${slugBase}/${i + 2}`,
              },
            })
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
        path.resolve(`./src/config/config-${process.env.GATSBY_VERSION}.js`)
      ),
    ],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        static: path.resolve(__dirname, 'static'),
      },
    },
  })
}
