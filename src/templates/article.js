import React from 'react'
import { graphql } from 'gatsby'
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
          <ArticlePage article={post} posts={posts} />
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
  query BlogPostById($id: String!, $categories_ids: [String!]) {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulBlogPost(
      filter: {
        id: { ne: $id }
        categories: { elemMatch: { id: { in: $categories_ids } } }
      }
      sort: { fields: [publishDate], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          title
          summary
          slug
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          authors {
            id
            name
            slug
          }
          authorsWithoutAccount
          id
          categories {
            id
            title
            color
            slug
          }
          heroImage {
            fluid(quality: 30, maxWidth: 800, background: "rgb:000000") {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }

    contentfulBlogPost(id: { eq: $id }) {
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
        id
        title
        slug
        color
      }
      publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
      heroImage {
        fluid(quality: 30, maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      heroImageCredit
      body {
        childMarkdownRemark {
          html
        }
      }
      bodyCustomEditor {
        json
      }
      gallery {
        id
        description
        fluid(quality: 30, maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
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
          fluid(quality: 30, maxWidth: 480) {
            ...GatsbyContentfulFluid_withWebp
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
        id
        categories {
          id
          title
          color
          slug
        }
        heroImage {
          fluid(quality: 30, maxWidth: 800, background: "rgb:000000") {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      secondLanguageSlug
    }
  }
`
