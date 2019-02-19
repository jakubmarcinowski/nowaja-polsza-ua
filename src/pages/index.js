import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import HomePage from '../views/home'
import { breakpoints } from '../utils/mediaQueries'

class RootIndex extends React.Component {
  state = {
    isMobileView: false,
  }

  componentDidMount() {
    if (window.innerWidth < breakpoints.tablet) {
      this.setState({ isMobileView: true })
    }
  }

  render() {
    const { isMobileView } = this.state
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const highlightedPost = get(
      this,
      'props.data.contentfulHighlightedPost.post'
    )

    return (
      <Layout>
        <div>
          <Helmet title={siteTitle} />
          <HomePage
            posts={posts}
            highlightedPost={highlightedPost}
            isMobileView={isMobileView}
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
          publishDate(formatString: "MMMM Do, YYYY")
          author {
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
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 200)
            }
          }
        }
      }
    }
    contentfulHighlightedPost {
      title
      post {
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        author {
          name
          slug
        }
        categories {
          title
          slug
          color
        }
        description {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 200)
          }
        }
        heroImage {
          fluid(maxWidth: 1440, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid
          }
        }
        title
      }
    }
  }
`
