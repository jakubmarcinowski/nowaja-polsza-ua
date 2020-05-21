import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'components/SEO'
import get from 'lodash/get'

import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'
import ArticlesList from 'components/ArticlesList'
import Placeholder from 'components/Placeholder'
import { trans } from 'utils/translate'

class CategoryTemplate extends React.Component {
  render() {
    const category = get(this.props, 'data.contentfulCategory')
    const categoryPosts = get(this.props, 'data.allContentfulBlogPost.edges')
    const description = get(this.props, 'data.site.siteMetadata.description')

    return (
      <Layout currentCategory={category}>
        {category && (
          <>
            <SEO
              siteTitle={category.title}
              description={description}
              type="summary"
            />
            <Wrapper>
              {categoryPosts ? (
                <ArticlesList
                  posts={categoryPosts}
                  limit={6}
                  initialLimit={6}
                  noCategoryLabel
                  noMargin
                />
              ) : (
                <Placeholder>{trans('NO_ARTICLES')}</Placeholder>
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
        description
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
          authorsWithoutAccount
          categories {
            title
            slug
            color
          }
          heroImage {
            fluid(quality: 30, maxWidth: 1920, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          heroImageThumbnail {
            fluid(quality: 30, maxWidth: 620, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
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
