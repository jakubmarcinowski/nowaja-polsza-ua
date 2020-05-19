import React from 'react'
import { graphql } from 'gatsby'
import { intersectionBy } from 'lodash/fp'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import ArticlePage from 'views/article/index'
import SEO from 'components/SEO'

const ArticleTemplate = ({
  data: { contentfulBlogPost, allContentfulBlogPost },
}) => {
  const post = contentfulBlogPost
  const posts = allContentfulBlogPost.edges
  const imageSrc = post.heroImage
    ? `https://${post.heroImage.fluid.src.substring(2)}`
    : ''

  const recommendedArticles = posts.filter(({ node: { categories } }) => {
    const postIntersection = intersectionBy(
      'contentful_id',
      categories,
      post.categories
    )
    return !!postIntersection.length
  })
  return (
    <Layout>
      {post && (
        <>
          <SEO
            siteTitle={post.title}
            description={post.summary}
            type="summary_large_image"
            image={imageSrc}
          />
          <ArticlePage article={post} posts={recommendedArticles} />
        </>
      )}
    </Layout>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.any,
    allContentfulBlogPost: PropTypes.any,
  }),
}
export default ArticleTemplate

export const pageQuery = graphql`
  query BlogPostByContentfulId(
    $contentful_id: String!
    $categories_ids: [String!]
  ) {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulBlogPost(
      filter: {
        contentful_id: { ne: $contentful_id }
        categories: { elemMatch: { contentful_id: { in: $categories_ids } } }
      }
      sort: { fields: [publishDate], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          title
          leadLong {
            childMarkdownRemark {
              html
            }
          }
          summary
          body {
            childMarkdownRemark {
              html
            }
          }
          slug
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          authors {
            id
            name
            slug
          }
          authorsWithoutAccount
          contentful_id
          categories {
            contentful_id
            title
            color
            slug
          }
          heroImage {
            fluid(maxWidth: 800, background: "rgb:000000") {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }

    contentfulBlogPost(contentful_id: { eq: $contentful_id }) {
      title
      leadLong {
        childMarkdownRemark {
          html
        }
      }
      summary
      authors {
        id
        name
        slug
      }
      authorsWithoutAccount
      categories {
        contentful_id
        title
        slug
        color
      }
      publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
      heroImage {
        fluid(maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      heroImageCredit
      body {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        id
        description
        fluid(maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      authors {
        id
        name
        slug
        shortBio {
          childMarkdownRemark {
            html
            excerpt
          }
        }
        image {
          fluid(maxWidth: 480) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      recommendedArticles {
        title
        leadLong {
          childMarkdownRemark {
            html
          }
        }
        summary
        body {
          childMarkdownRemark {
            html
          }
        }
        slug
        publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
        authors {
          id
          name
          slug
        }
        authorsWithoutAccount
        contentful_id
        categories {
          contentful_id
          title
          color
          slug
        }
        heroImage {
          fluid(maxWidth: 800, background: "rgb:000000") {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
