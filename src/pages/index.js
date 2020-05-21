import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from 'components/Layout'
import HomePage from 'views/home'
import SEO from 'components/SEO'

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
  const highlightedPosts = get(
    props,
    'data.allContentfulHighlightedPost.edges[0].node.posts'
  )
  const stickedPost = get(
    props,
    'data.allContentfulStickedPost.edges[0].node.stickedPost'
  )
  const stickedPostActive = get(
    props,
    'data.allContentfulStickedPost.edges[0].node.active'
  )

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

    if (stickedPostActive) {
      postsWithoutDuplicates = postsWithoutDuplicates.filter(
        post => stickedPost.id !== post.node.id
      )
    }

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
          stickedPostActive={stickedPostActive}
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
            fluid(quality: 30, maxWidth: 768, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          heroImageThumbnail {
            fluid(quality: 30, maxWidth: 620, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
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
              fluid(quality: 30, maxWidth: 1440, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            heroImageThumbnail {
              fluid(quality: 30, maxWidth: 620, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
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
              fluid(quality: 30, maxWidth: 768, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            heroImageThumbnail {
              fluid(quality: 30, maxWidth: 620, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
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
    allContentfulStickedPost {
      edges {
        node {
          active
          stickedPost {
            id
            slug
            title
            heroImage {
              fluid(quality: 30, maxWidth: 768, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            heroImageThumbnail {
              fluid(quality: 30, maxWidth: 620, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
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
              slug
            }
          }
        }
      }
    }
  }
`
