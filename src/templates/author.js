import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'

import ImgWrapper from '../components/ImgWrapper'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import ArticlesList from '../components/ArticlesList'

const AuthorContainerStyled = styled.div`
  padding-bottom: 100px;
  width: 70%;
  margin: auto;
`

const AuthorImageStyled = styled.div`
  width: 30%;
  margin: auto;
`

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
              <AuthorContainerStyled>
                <AuthorImageStyled>
                  <ImgWrapper img={author.image} />
                </AuthorImageStyled>
                <h1>{author.name}</h1>
                {author.shortBio && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: author.shortBio.childMarkdownRemark.html,
                    }}
                  />
                )}
              </AuthorContainerStyled>
              {authorPosts && (
                <ArticlesList posts={authorPosts} limit={2} initialLimit={2} />
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
            name
            slug
          }
          categories {
            title
            slug
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
