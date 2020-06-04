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
    const prevPagePath = get(this.props, 'pageContext.prevPagePath')
    const nextPagePath = get(this.props, 'pageContext.nextPagePath')

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
            fluid(quality: 30, maxWidth: 680, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          heroImageThumbnail {
            fluid(quality: 30, maxWidth: 680, resizingBehavior: SCALE) {
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
