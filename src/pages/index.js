import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import HomePage from '../views/home'
import { breakpoints } from '../utils/mediaQueries'

class RootIndex extends React.Component {
  state = {
    isNotLarge: false,
  }

  componentDidMount() {
    if (window.innerWidth < breakpoints.large) {
      this.setState({ isNotLarge: true })
    }
  }

  render() {
    const { isNotLarge } = this.state
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const highlightedPost = get(
      this,
      'props.data.contentfulHighlightedPost.post'
    )
    const highlightedEvents = get(
      this,
      'props.data.allContentfulEvent.edges',
    )

    //todo remove when get highlighted events not newest ones
    const newestEvents = highlightedEvents.slice(0, 2)

    return (
      <Layout>
        <div>
          <Helmet title={siteTitle} />
          <HomePage
            posts={posts}
            highlightedPost={highlightedPost}
            isNotLarge={isNotLarge}
            highlightedEvents={newestEvents}
          />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
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
    allContentfulEvent(sort: { fields: [expirationDate], order: ASC }) {
      edges {
        node {
          id
          title
          expirationDay: expirationDate(formatString: "DD", locale: "ru")
          expirationMonth: expirationDate(formatString: "MMMM", locale: "ru")
          city
        }
      }
    }
  }
`
