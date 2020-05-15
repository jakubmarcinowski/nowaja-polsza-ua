import React from 'react'
import { graphql } from 'gatsby'
import { intersectionBy, get } from 'lodash/fp'

import Layout from 'components/Layout'
import ArticlePage from 'views/article/index'
import SEO from 'components/SEO'

const ArticleTemplate = props => {
  const post = get('data.contentfulBlogPost', props)
  const posts = get('data.allContentfulBlogPost.edges', props)
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
          leadLong {
            childMarkdownRemark {
              html
            }
          }
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
            fluid(maxWidth: 800, background: "rgb:000000") {
              ...GatsbyContentfulFluid
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
        fluid(maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid
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
          ...GatsbyContentfulFluid
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
            ...GatsbyContentfulFluid
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
          fluid(maxWidth: 800, background: "rgb:000000") {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
