import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import ArticlesList from '../components/ArticlesList'
import Author from '../components/Author'

class AuthorTemplate extends React.Component {
  render() {
    const author = get(this.props, 'data.contentfulPerson')
    const authorPosts = get(this.props, 'data.allContentfulBlogPost.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        {author && (
          <>
            <Helmet title={`${author.name} | ${siteTitle}`} />
            <Wrapper>
              <Author author={author}/>
              {authorPosts && (
                <ArticlesList posts={authorPosts} limit={6} initialLimit={9} />
              )}
            </Wrapper>
          </>
        )}
      </Layout>
    )
  }
}

export default AuthorTemplate

export const pageQuery = graphql`
  query AuthorByContentfulId($contentful_id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPerson(contentful_id: { eq: $contentful_id }) {
      name
      image {
        fluid(maxWidth: 1920, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid
        }
      }
      shortBio {
        childMarkdownRemark {
          html
        }
      }
      facebook
      twitter
      telegram
      youtube
      vk
      academia
    }
    allContentfulBlogPost(
      filter: {
        authors: { elemMatch: { contentful_id: { in: [$contentful_id] } } }
      }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
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
          heroImage {
            fluid(maxWidth: 1920, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          lead
        }
      }
    }
  }
`
