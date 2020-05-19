import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from 'components/Layout'
import HomePage from 'views/home'
import SEO from 'components/SEO'

const RootIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const description = get(props, 'data.site.siteMetadata.description')
  const allHighlightedPosts = get(props, 'data.allContentfulBlogPost.edges')
  const importantInfo = get(props, 'data.contentfulHomepageStaticContent')
  const highlightedPost = get(
    props,
    'data.allContentfulHighlightedPost.edges[0].node.post'
  )
  const stickedPost = get(
    props,
    'data.allContentfulStickedPost.edges[0].node.stickedPost'
  )
  const stickedPostActive = get(
    props,
    'data.allContentfulStickedPost.edges[0].node.active'
  )
  const prevPagePath = get(props, 'pageContext.prevPagePath')
  const nextPagePath = get(props, 'pageContext.nextPagePath')
  const postsOrder = get(props, 'pageContext.highlightedPostIds')
  const allHighlightedPostsSorted = allHighlightedPosts.sort(
    (a, b) => postsOrder.indexOf(a.node.id) - postsOrder.indexOf(b.node.id)
  )

  return (
    <Layout>
      <div>
        <SEO siteTitle={siteTitle} description={description} type="summary" />
        <HomePage
          posts={allHighlightedPostsSorted}
          highlightedPost={highlightedPost}
          importantInfo={importantInfo}
          stickedPost={stickedPost}
          stickedPostActive={stickedPostActive}
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
        />
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery($highlightedPostIds: [String!]) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(filter: { id: { in: $highlightedPostIds } }) {
      edges {
        node {
          id
          title
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
          heroImage {
            fluid(maxWidth: 768, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          heroImageThumbnail {
            fluid(maxWidth: 620, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp_noBase64
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
            summary
            heroImage {
              fluid(maxWidth: 1440, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            heroImageThumbnail {
              fluid(maxWidth: 620, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            heroImageThumbnail {
              fluid(maxWidth: 620, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
              fluid(maxWidth: 768, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            heroImageThumbnail {
              fluid(maxWidth: 620, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
