import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { intersectionBy, get } from 'lodash/fp'

import Layout from '../components/Layout'
import ArticlePage from '../views/article/index'

const ArticleTemplate = props => {
  const post = get('data.contentfulBlogPost', props)
  const siteTitle = get('data.site.siteMetadata.title', props)
  const posts = get('data.allContentfulBlogPost.edges', props)

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
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <ArticlePage article={post} posts={recommendedArticles} />
        </>
      )}
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query BlogPostByContentfulId($contentful_id: String!) {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulBlogPost(
      filter: { contentful_id: { ne: $contentful_id } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          lead
          slug
          publishDate(formatString: "DD MMMM YYYY", locale: "ru-RU")
          authors {
            id
            name
            slug
          }
          contentful_id
          categories {
            contentful_id
            title
            color
          }
          heroImage {
            fluid(maxWidth: 800, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }

    contentfulBlogPost(contentful_id: { eq: $contentful_id }) {
      title
      lead
      authors {
        id
        name
        slug
      }
      categories {
        contentful_id
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
      body {
        childMarkdownRemark {
          html
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
    }
  }
`
