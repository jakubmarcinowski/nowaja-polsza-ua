/* eslint-disable */
const Promise = require('bluebird')
const path = require('path')
const webpack = require('webpack')

const initCategorizePostsByNodes = nodes =>
  nodes.reduce(
    (prev, current) => ({
      ...prev,
      [current.node.id]: {
        slug: current.node.slug,
        posts: [],
      },
    }),
    {}
  )

const createCategorizedPostsPages = (
  categorizedPosts,
  { getSlugBase, componentPath, createPage }
) => {
  const postsPerPage = 6

  Object.keys(categorizedPosts).forEach(categoryId => {
    const category = categorizedPosts[categoryId]
    const slugBase = getSlugBase(category.slug)
    const numPages = Math.max(
      1,
      Math.ceil(category.posts.length / postsPerPage)
    )

    Array.from({ length: numPages }).forEach((_, i) => {
      const isFirstPage = i === 0
      const isLastPage = i === numPages - 1

      createPage({
        path: isFirstPage ? slugBase : `${slugBase}/${i + 1}`,
        component: componentPath,
        context: {
          id: categoryId,
          postIds: category.posts.slice(
            i * postsPerPage,
            (i + 1) * postsPerPage
          ),
          prevPagePath: isFirstPage ? null : `${slugBase}/${i === 1 ? '' : i}`,
          nextPagePath: isLastPage ? null : `${slugBase}/${i + 2}`,
        },
      })
    })
  })
}

const getAllHighlightedPosts = (
  posts,
  { stickedPost, highlightedPostsData }
) => {
  const {
    post: highlightedPost,
    posts: highlightedPosts,
    highlightMorePosts,
  } = highlightedPostsData

  let allHighlightedPosts = posts.filter(
    ({ node: { id } }) => highlightedPost.id !== id
  )

  if (highlightMorePosts && highlightedPosts) {
    const moreHighlightedPosts = highlightedPosts.map(article => {
      return { node: article }
    })

    let postsWithoutDuplicates = allHighlightedPosts.filter(
      post =>
        !moreHighlightedPosts.find(
          highlightedPost => highlightedPost.node.id === post.node.id
        )
    )

    if (stickedPost.active) {
      postsWithoutDuplicates = [{ node: { id: stickedPost.id } }].concat(
        postsWithoutDuplicates.filter(post => stickedPost.id !== post.node.id)
      )
    }

    allHighlightedPosts = moreHighlightedPosts.concat(postsWithoutDuplicates)
  }

  return allHighlightedPosts
}

const createHomePagePages = (
  posts,
  { stickedPost, highlightedPostsData, createPage }
) => {
  const allHighlightedPosts = getAllHighlightedPosts(posts, {
    stickedPost,
    highlightedPostsData,
  })
  const postsPerPage = 12
  const newestPosts = allHighlightedPosts.splice(0, 4)

  for (i = 0; allHighlightedPosts.length > 0; i++) {
    const isFirstPage = i === 0
    const postsOnPage = allHighlightedPosts.splice(0, postsPerPage)
    const isLastPage = allHighlightedPosts.length === 0

    createPage({
      path: isFirstPage ? '/' : `/${i + 1}`,
      component: path.resolve('./src/templates/home.js'),
      context: {
        highlightedPostIds: [...newestPosts, ...postsOnPage].map(
          post => post.node.id
        ),
        prevPagePath: isFirstPage ? null : `/${i === 1 ? '' : i}`,
        nextPagePath: isLastPage ? null : `/${i + 2}`,
      },
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/article.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(
              filter: { slug: { nin: ["xxx", "xxx2"] } }
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
            allContentfulHighlightedPost(filter: { slug: { ne: "xxx" } }) {
              edges {
                node {
                  post {
                    id
                  }
                  highlightMorePosts
                  posts {
                    id
                  }
                }
              }
            }
            contentfulStickedPost {
              active
              stickedPost {
                id
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
        const categories = result.data.allContentfulCategory.edges
        const authors = result.data.allContentfulPerson.edges
        const stickedPost = {
          active: result.data.contentfulStickedPost.active,
          id: result.data.contentfulStickedPost.stickedPost.id,
        }
        let highlightedPostsData =
          result.data.allContentfulHighlightedPost.edges[0].node

        const categoryPosts = initCategorizePostsByNodes(categories)
        const authorPosts = initCategorizePostsByNodes(authors)

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

        createHomePagePages(posts, {
          stickedPost,
          highlightedPostsData,
          createPage,
        })

        createCategorizedPostsPages(categoryPosts, {
          getSlugBase: slug => `/category/${slug}`,
          componentPath: path.resolve('./src/templates/category.js'),
          createPage,
        })

        createCategorizedPostsPages(authorPosts, {
          getSlugBase: slug => `/author/${slug}`,
          componentPath: path.resolve('./src/templates/author.js'),
          createPage,
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
