import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import ArticlesList from '../components/ArticlesList'

const NoPostsInfo = styled.div`
  padding: 2em;
  text-align: center;
`

class CategoryTemplate extends React.Component {
  render() {
    const category = get(this.props, 'data.contentfulCategory')
    const categoryPosts = get(this.props, 'data.allContentfulBlogPost.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout currentCategory={category}>
        {category && (
          <>
            <Helmet title={`${category.title} | ${siteTitle}`} />
            <Wrapper>
              {categoryPosts ? (
                <ArticlesList
                  posts={categoryPosts}
                  limit={6}
                  initialLimit={9}
                  noCategoryLabel
                  noMargin
                />
              ) : (
                <NoPostsInfo>Нет постов в категории</NoPostsInfo>
              )}
            </Wrapper>
          </>
        )}
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryByContentfulId($contentful_id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCategory(contentful_id: { eq: $contentful_id }) {
      title
      slug
      color
    }
    allContentfulBlogPost(
      filter: {
        categories: { elemMatch: { contentful_id: { in: [$contentful_id] } } }
      }
      sort: { fields: [publishDate], order: DESC }
    ) {
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
