import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import HomePage from '../views/home'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const highlightedPost = get(
      this,
      'props.data.contentfulHighlightedPost.post'
    )

    return (
      <Layout>
        <>
          <Helmet title={siteTitle} />
          <HomePage posts={posts} highlightedPost={highlightedPost} />
        </>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
          }
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
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
        }
        description {
          childMarkdownRemark {
            html
          }
        }
        heroImage {
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid
          }
        }
        title
      }
    }
  }
`
