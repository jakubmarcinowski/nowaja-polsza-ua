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
    const {
      pageContext: { prevPagePath, nextPagePath },
    } = this.props
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
                  prevPagePath={prevPagePath}
                  nextPagePath={nextPagePath}
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
  query CategoryByContentfulId($id: String!, $postIds: [String!]) {
    site {
      siteMetadata {
        title
        description
      }
    }
    contentfulCategory(id: { eq: $id }) {
      title
      slug
      color
    }
    allContentfulBlogPost(
      filter: { id: { in: $postIds } }
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
          heroImageThumbnail {
            fluid(maxWidth: 620, resizingBehavior: SCALE) {
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
