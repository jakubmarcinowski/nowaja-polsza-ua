import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import HomePage from '../views/home'
import SEO from '../components/SEO'

const RootIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const description = get(props, 'data.site.siteMetadata.description')
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const importantInfo = get(props, 'data.contentfulHomepageStaticContent')
  const highlightedPost = get(
    props,
    'data.allContentfulHighlightedPost.edges[0].node.post'
  )
  const highlightMorePosts = get(
    props,
    'data.allContentfulHighlightedPost.edges[0].node.highlightMorePosts'
  )
  const highlightedEvents = get(
    props,
    'data.allContentfulHighlightedEvents.edges[0].node.events'
  )
  const highlightedPosts = get(
    props,
    'data.allContentfulHighlightedPost.edges[0].node.posts'
  )

  const stickedPost = get(
    props,
    'data.allContentfulStickedPost.edges[0].node.stickedPost'
  )

  let allHighlightedPosts = posts.filter(
    ({ node: { id } }) => highlightedPost.id !== id
  )

  if (highlightMorePosts && highlightedPosts) {
    const moreHighlightedPosts = highlightedPosts.map(article => {
      return { node: article }
    })

    const postsWithoutDuplicates = allHighlightedPosts.filter(
      post =>
        !moreHighlightedPosts.find(
          highlightedPost => highlightedPost.node.id === post.node.id
        )
    )
    allHighlightedPosts = moreHighlightedPosts.concat(postsWithoutDuplicates)
  }

  return (
    <Layout>
      <div>
        <SEO siteTitle={siteTitle} description={description} type="summary" />
        <HomePage
          posts={allHighlightedPosts}
          highlightedPost={highlightedPost}
          importantInfo={importantInfo}
          stickedPost={stickedPost}
        />
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(
      filter: { slug: { nin: ["xxx", "xxx2"] } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          authors {
            id
            name
            slug
          }
          authorsWithoutAccount
          categories {
            title
            slug
            color
          }
          heroImage {
            fluid(maxWidth: 768, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          leadLong {
            childMarkdownRemark {
              html
            }
          }
          summary
        }
      }
    }

    contentfulHomepageStaticContent {
      importantInfoStatus
      importantInfo
      importantInfoLinkUrl
    }

    allContentfulHighlightedPost(filter: { slug: { ne: "xxx" } }) {
      edges {
        node {
          title
          post {
            id
            slug
            publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
            authors {
              id
              name
              slug
            }
            authorsWithoutAccount
            categories {
              title
              slug
              color
            }
            leadLong {
              childMarkdownRemark {
                html
              }
            }
            summary
            heroImage {
              fluid(maxWidth: 1440, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
            }
            title
          }
          highlightMorePosts
          posts {
            id
            title
            slug
            body {
              childMarkdownRemark {
                html
              }
            }
            publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
            authors {
              id
              name
              slug
            }
            authorsWithoutAccount
            categories {
              title
              slug
              color
            }
            heroImage {
              fluid(maxWidth: 768, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
            }
            leadLong {
              childMarkdownRemark {
                html
              }
            }
            summary
          }
        }
      }
    }
    allContentfulHighlightedEvents(filter: { slug: { ne: "xxx" } }) {
      edges {
        node {
          events {
            id
            title
            city
            expirationDay: expirationDate(formatString: "DD", locale: "ru")
            expirationMonth: expirationDate(formatString: "MMMM", locale: "ru")
            address
          }
          title
          id
        }
      }
    }
    allContentfulStickedPost {
      edges {
        node {
          stickedPost {
            title
            heroImage {
              fluid(maxWidth: 768, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
            }
            categories {
              title
              slug
              color
            }
            summary
            authors {
              name
            }
          }
        }
      }
    }
  }
`
