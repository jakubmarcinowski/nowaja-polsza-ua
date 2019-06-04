import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'

import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import ArticlesList from '../components/ArticlesList'
import Author from '../components/Author'

class AuthorTemplate extends React.Component {
  render() {  
    const author = get(this.props, 'data.contentfulPerson')
    const authorPosts = get(this.props, 'data.allContentfulBlogPost.edges')
    const description = get(this.props, 'data.site.siteMetadata.description')
    const imageSrc = author.image
      ? `https://${author.image.fluid.src.substring(2)}`
      : ''

    return (
      <Layout>
        {author && (
          <>
            <SEO
              siteTitle={author.name}
              description={description}
              type="summary"
              image={imageSrc}
            />
            <Wrapper>
              <Author author={author} />
              {authorPosts && (
                <ArticlesList posts={authorPosts} limit={6} initialLimit={6} />
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
        description
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
          authorsWithoutAccount
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
`
