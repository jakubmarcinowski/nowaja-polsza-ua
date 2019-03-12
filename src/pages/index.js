import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import HomePage from '../views/home'
import SEO from '../components/SEO'
import image from '../../static/logo.svg'

const RootIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const description = get(props, 'data.site.siteMetadata.description')
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const importantInfo = get(props, 'data.contentfulHomepageStaticContent')
  const highlightedPost = get(props, 'data.contentfulHighlightedPost.post')
  const highlightedEvents = get(
    props,
    'data.allContentfulHighlightedEvents.edges[0].node.events'
  )

  return (
    <Layout>
      <div>
        <SEO
          siteTitle={siteTitle}
          description={description}
          type="home page"
          image={image}
        />
        <HomePage
          posts={posts}
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

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
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
          lead
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
        lead
        heroImage {
          fluid(maxWidth: 1440, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid
          }
        }
        title
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
