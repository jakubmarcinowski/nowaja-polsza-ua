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
            fluid(quality: 30, maxWidth: 768, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          heroImageThumbnail {
            fluid(quality: 30, maxWidth: 680, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
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
              fluid(quality: 30, maxWidth: 680, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            heroImageThumbnail {
              fluid(quality: 30, maxWidth: 680, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            title
          }
        }
      }
    }
  }
`
