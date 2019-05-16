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
  const highlightedPost = get(props, 'data.contentfulHighlightedPost.post')
  const highlightMorePosts = get(
    props,
    'data.contentfulHighlightedPost.highlightMorePosts'
  )
  const highlightedEvents = get(
    props,
    'data.allContentfulHighlightedEvents.edges[0].node.events'
  )
  const highlightedPosts = get(props, 'data.contentfulHighlightedPost.posts')

  let allHighlightedPosts = posts
  if (highlightMorePosts && highlightedPosts) {
    const moreHighlightedPosts = highlightedPosts.map(article => {
      return { node: article }
    })

    const postsWithoutDuplicates = posts.filter(
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
        <SEO siteTitle={siteTitle} description={description} type="website" />
        <HomePage
          posts={allHighlightedPosts}
          highlightedPost={highlightedPost}
          importantInfo={importantInfo}
          highlightedEvents={highlightedEvents}
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
        }
      }
    }

    contentfulHomepageStaticContent {
      importantInfoStatus
      importantInfo
      importantInfoLinkUrl
    }

    contentfulHighlightedPost {
      title
      post {
        slug
        publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
        authors {
          id
          name
          slug
        }
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
      }
    }
    allContentfulHighlightedEvents {
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
  }
`
